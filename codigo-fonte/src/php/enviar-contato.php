<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, bool $success, string $message): never
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Método não permitido.');
}

$nome = trim((string) ($_POST['nome'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$assunto = trim((string) ($_POST['assunto'] ?? ''));
$mensagem = trim((string) ($_POST['mensagem'] ?? ''));

if ($nome === '' || mb_strlen($nome) > 120 || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || strlen($email) > 254 || $mensagem === '' || mb_strlen($mensagem) > 5000
    || !in_array($assunto, ['Eventos', 'Restaurantes', 'Delivery', 'Parcerias', 'Outros'], true)) {
    respond(422, false, 'Confira os campos preenchidos e tente novamente.');
}

// Ajuste estes caminhos conforme a estrutura definitiva da hospedagem.
$autoload = dirname(__DIR__, 2) . '/vendor/autoload.php';
$configFile = getenv('AMBROZINI_CONTACT_CONFIG') ?: '';

if (!is_file($autoload) || !is_file($configFile)) {
    error_log('Contato Ambrozini: dependências ou configuração privada ausentes.');
    respond(503, false, 'O envio está temporariamente indisponível.');
}

require_once $autoload;
$config = require $configFile;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_password'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->SMTPSecure = $mail->Port === 465
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('site@ambrozini.com.br', 'Site Ambrozini');
    $mail->addAddress('converse@ambrozini.com.br', 'Equipe Ambrozini');
    $mail->addReplyTo($email, $nome);
    $mail->Subject = 'Contato pelo site - ' . $assunto;
    $mail->isHTML(false);
    $mail->Body = "Nome: {$nome}\nE-mail: {$email}\nAssunto: {$assunto}\n\nMensagem:\n{$mensagem}";
    $mail->send();
    respond(200, true, 'Mensagem enviada com sucesso.');
} catch (Exception $e) {
    error_log('Contato Ambrozini: falha SMTP: ' . $e->getMessage());
    respond(502, false, 'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.');
} catch (Throwable $e) {
    error_log('Contato Ambrozini: erro interno: ' . $e->getMessage());
    respond(500, false, 'Ocorreu um erro no servidor. Tente novamente mais tarde.');
}