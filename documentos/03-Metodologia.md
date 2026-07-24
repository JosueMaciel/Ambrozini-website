
# Metodologia

## Gerenciamento de Projeto

Para o desenvolvimento do website da Ambrozini foi adotada uma abordagem baseada na metodologia ágil Scrum, adaptada para um projeto individual. A escolha dessa metodologia justifica-se pela organização das atividades em etapas, acompanhamento contínuo da evolução do projeto e facilidade para realizar ajustes durante o desenvolvimento.

As funcionalidades foram planejadas e desenvolvidas de forma incremental, permitindo a implementação, testes e validação de cada etapa antes do início da próxima. 

### Divisão de Papéis

Como o projeto é desenvolvido por um único integrante, todas as responsabilidades são desempenhadas pelo próprio desenvolvedor.:
<ul>
  <li>Desenvolvido por: Josué Maciel</li>
</ul>

### Processo

Para organização das atividades foi utilizado o GitHub Projects, seguindo um fluxo baseado na metodologia Kanban.

O quadro foi estruturado com as seguintes etapas: 

<ul>
  <li>Backlog: funcionalidades e melhorias planejadas.</li>
  <li>To Do: tarefas prontas para desenvolvimento.</li>
  <li>In progress: tarefas em desenvolvimento.</li>
  <li>Rewiew: funcionalidades concluídas aguardando revisão.</li>
  <li>Done: funcionalidades finalizadas e validadas.</li>
 </ul>


Essa organização permite acompanhar a evolução do projeto e controlar as entregas durante todo o desenvolvimento.

##Versionamento

O controle de versão é realizado utilizando Git integrado ao GitHub, permitindo registrar todas as alterações do projeto por meio de commits organizados.

O repositório também possibilita o gerenciamento do histórico de desenvolvimento, facilitando futuras manutenções e implementações.

<h3>Etiquetas</h3>
<p>As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:</p>

<ul>
  <li>Bug (Erro no código)</li>
  <li>Desenvolvimento (Development)</li>
  <li>Documentação (Documentation)</li>
  <li>Gerência de Projetos (Project Management)</li>
  <li>Infraestrutura (Infrastructure)</li>
  <li>Testes (Tests)</li>
</ul>

<figure> 
  <img src="https://user-images.githubusercontent.com/100447878/164068979-9eed46e1-9b44-461e-ab88-c2388e6767a1.png"
    <figcaption>Figura 3 - Tela do esquema de cores e categorias</figcaption>
</figure> 
  
## Ferramentas

As principais ferramentas utilizadas durante o desenvolvimento do projeto são apresentadas na tabela a seguir.

| Ferramenta | Finalidade |
|------------|------------|
| Visual Studio Code | Desenvolvimento do código-fonte |
| Git | Controle de versão |
| GitHub | Hospedagem do repositório e versionamento do projeto |
| GitHub Projects | Organização e gerenciamento das tarefas utilizando Kanban |
| Figma | Desenvolvimento do wireframe e prototipação da interface |
| Google Chrome | Testes, inspeção e validação da aplicação |

Os artefatos do projeto são desenvolvidos utilizando as plataformas **GitHub** e **Figma**, responsáveis pelo versionamento do código-fonte, gerenciamento do projeto e elaboração da interface.

---

## Tecnologias Utilizadas

As tecnologias empregadas no desenvolvimento da aplicação são apresentadas na tabela abaixo.

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Estruturação das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript (ES6+) | Interatividade e manipulação da interface |
| Google Maps API | Exibição da localização das unidades da Ambrozini |
| Git | Controle de versão |
| GitHub | Hospedagem e gerenciamento do repositório |

---

## Estratégia de Organização do Código

O projeto foi organizado de forma modular, visando facilitar a manutenção, reutilização de componentes e futuras expansões.

A estrutura de diretórios está organizada da seguinte forma:

```text
ambrozini-website/
│
├── assets/
│   ├── css/
│   │   ├── home.css
│   │   ├── eventos.css
│   │   ├── pedro.css
│   │   ├── menu.css
│   │   └── footer.css
│   │
│   ├── js/
│   │   ├── home.js
│   │   ├── eventos.js
│   │   ├── pedro.js
│   │   └── menu.js
│   │
│   ├── img/
│   ├── videos/
│   └── icons/
│
├── index.html
├── eventos.html
├── pedro.html
└── README.md
```

Cada página possui arquivos próprios de estilização (CSS) e interatividade (JavaScript), permitindo maior organização e facilidade na manutenção do código. Componentes compartilhados, como o menu de navegação e o rodapé, são mantidos em arquivos independentes para promover reutilização e padronização entre as páginas do website.
