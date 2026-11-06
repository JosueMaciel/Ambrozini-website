
const contato = `
<footer class="contact" id="contato">

    <div class="contact-container">

        <!-- REDES SOCIAIS -->
        <div class="contact-social">

            <h2>Nos acompanhe nas<br>redes sociais.</h2>
   
                <div class="contact-social-list">

                    <div class="contact-social-item">
                        <span>@ambrozini.oficial</span>

                        <a href="https://www.instagram.com/ambrozini.oficial/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Instagram Ambrozini">
                            <img src="/codigo-fonte/assets/img/instagram.svg" alt="">
                        </a>
                    </div>

                    <div class="contact-social-item">
                        <span>@ambrozinimix</span>

                        <a href="https://www.facebook.com/ambrozinimix/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Facebook Ambrozini Mix">
                            <img src="/codigo-fonte/assets/img/facebook.svg" alt="">
                        </a>
                    </div>

                    <div class="contact-social-item">
                        <span>@grupoambrozini</span>

                        <a href="https://www.tiktok.com/@grupoambrozini"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="TikTok Grupo Ambrozini">
                            <img src="/codigo-fonte/assets/img/tiktok.svg" alt="">
                        </a>
                    </div>

                    <div class="contact-social-item">
                        <span>@pedro.ambrozini</span>

                        <a href="https://www.instagram.com/pedro.ambrozini/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Instagram Pedro Ambrozini">
                            <img src="/codigo-fonte/assets/img/instagram.svg" alt="">
                        </a>
                    </div>

                    <div class="contact-social-item">
                        <span>@ambrozini</span>

                        <a href="https://www.linkedin.com/company/ambrozini/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn Ambrozini">
                            <img src="/codigo-fonte/assets/img/linkedin.svg" alt="">
                        </a>
                    </div>

                    <div class="contact-social-item">
                        <span>@pedroambrozini</span>

                        <a href="https://www.linkedin.com/in/pedro-ambrozini-6b3754238/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn Pedro Ambrozini">
                            <img src="/codigo-fonte/assets/img/linkedin.svg" alt="">
                        </a>
                    </div>

                </div>

            <img
                src="../../assets/img/Logo Ambrozini sem fundo.png"
                alt="Ambrozini"
                class="contact-logo"
            >

        </div>

        <!-- FORMULÁRIO -->
        <div class="contact-form-area">

            <h2>Fale Conosco</h2>

            <form class="contact-form" id="contact-form">

                <div class="contact-fields">

                    <div class="contact-inputs">

                        <label for="contact-name">Nome</label>
                        <input
                            type="text"
                            id="contact-name"
                            name="nome"
                            autocomplete="name"
                            required
                        >

                        <label for="contact-email">E-mail</label>
                        <input
                            type="email"
                            id="contact-email"
                            name="email"
                            autocomplete="email"
                            required
                        >

                        <label for="contact-subject">Assunto</label>
                        <select
                            id="contact-subject"
                            name="assunto"
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="Eventos">Eventos</option>
                            <option value="Restaurantes">Restaurantes</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Parcerias">Parcerias</option>
                            <option value="Outros">Outros</option>
                        </select>

                    </div>

                    <div class="contact-message">

                        <label for="contact-message">Mensagem</label>
                        <textarea
                            id="contact-message"
                            name="mensagem"
                            placeholder="Escreva sua mensagem..."
                            required
                        ></textarea>

                    </div>

                </div>

                <button type="submit" class="contact-submit">
                    Enviar
                </button>

                <p class="contact-feedback" role="status" aria-live="polite"></p>

            </form>

        </div>

    </div>

    <div class="contact-bottom">
        <p>Copyright © Ambrozini</p>
    </div>

</footer>
`;

document.body.insertAdjacentHTML("beforeend", contato);

// O envio real será implementado na etapa do PHP/SMTP.
document.getElementById("contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const feedback = document.querySelector(".contact-feedback");
    feedback.textContent = "O envio de mensagens estará disponível em breve.";
});
