console.log("eventos.js carregado");

const eventCards = document.querySelectorAll(".event-card");
const eventModal = document.getElementById("event-modal");
const eventModalClose = document.getElementById("event-modal-close");
const eventModalImage = document.getElementById("event-modal-image");
const eventModalTitle = document.getElementById("event-modal-title");
const eventModalDescription = document.getElementById("event-modal-description");
const eventModalAdvantages = document.getElementById("event-modal-advantages");



const eventData = {
    "coffee-break": {
        description: `Uma pausa bem servida para reuniões, treinamentos, palestras e estandes de feira. Montamos uma mesa prática e farta, com sabores mineiros, para o público se servir sem perder tempo, em um intervalo ou ao longo do dia todo.

Ideal para reuniões, cursos, eventos de empresas e estandes em feiras, como os que já atendemos no Expominas.`,
        advantages: [
            "ALGUNS ITENS",
            "Pão de queijo quentinho",
            "Mini sanduíches",
            "Petit fours doces e salgados",
            "Bolos caseiros",
            "Doces mineiros: quadradinho e canudinho de doce de leite",
            "Café coado ou expresso, com açúcar e adoçante",
            "Sucos, água com e sem gás"
        ]
    },

    "happy-hour": {
        description: `O encontro descontraído do fim do expediente, para confraternizar com a equipe, celebrar uma meta ou receber clientes. Serviço volante, com garçons circulando com bebida gelada e petiscos.

Ideal para confraternizações de equipe, lançamentos, encerramento de feiras e eventos de relacionamento.`,
        advantages: [
            "ALGUNS ITENS",
            "Chopp gelado, em barril com chopeira",
            "Cerveja long neck",
            "Bar de drinks: caipirinhas, gin tônica, Moscow Mule e Aperol Spritz",
            "Drinks sem álcool, refrigerantes e água",
            "Salgados fritos volantes: coxinha, pastéis e camarão empanado",
            "Espetinhos, como filé ao molho barbecue e tilápia crocante",
            "Petit fours e canapés",
            "Petiscos mineiros, como mandioca frita e tábua de frios"
        ]
    },

    "catering": {
        description: `Café e lanches entregues na sua empresa, prontos para servir. Um serviço simples e prático para reuniões, treinamentos e o dia a dia do escritório, com pedido avulso ou entregas fixas na semana.

Como funciona: entregamos tudo embalado, com descartáveis e guardanapos, e deixamos a mesa montada. Quando há garrafas térmicas ou bandejas da casa, buscamos depois.

Ideal para reuniões, treinamentos, recepção de clientes e empresas que querem café e lanche com frequência, em dias fixos da semana ou do mês.`,
        advantages: [
            "ALGUNS ITENS",
            "Café em garrafa térmica, com leite, açúcar e adoçante",
            "Pão de queijo",
            "Mini sanduíches e mini croissants recheados",
            "Bolos caseiros em fatias",
            "Quitandas mineiras, biscoitos e cookies",
            "Frutas da estação",
            "Sucos, água e refrigerantes",
            "Kits individuais de lanche e bebida, para treinamentos e equipes externas"
        ]
    },

    "particulares": {
        description: `Festas de 15 anos, casamentos, aniversários, formaturas e celebrações em família. Criamos um cardápio sob medida, do coquetel de boas-vindas ao café do fim da noite, com serviço atencioso para convidados de todas as idades.

Ideal para debutantes, casamentos, aniversários, bodas, formaturas e festas de família.

Degustação: para eventos particulares, oferecemos uma degustação do cardápio antes da festa, para você provar e escolher os pratos com calma.`,
        advantages: [
            "ALGUNS ITENS",
            "Frios e canapés finos: canapé de salmão, tâmaras com cream cheese e Parma, ceviche",
            "Salgados assados, folhados e fritos finos",
            "Espetinhos e Petit Gourmet, como o bobó de camarão em mini porções",
            "Jantar completo: saladas, nhoque com fonduta, salmão ao molho de maracujá e filé ao molho madeira",
            "Estação Japonesa com sushiman: nigiri, uramaki, hot roll e sunomono",
            "Espaço Teen: mini hambúrguer Ambrozini, batata frita, mini pizza, pastéis e milk shake",
            "Bombons finos e mesa de café com expresso, bolos e petit fours",
            "Bar de drinks com e sem álcool, cerveja, vinho, whisky e espumante para o brinde"
        ]
    },

    "corporativos": {
        description: `Soluções completas para empresas, do estande de feira com vários dias de duração à confraternização de fim de ano. Planejamos o serviço com a sua equipe, respeitamos a agenda do evento e cuidamos de tudo para que você só se preocupe com seus convidados.

Ideal para feiras, convenções, lançamentos de produto, treinamentos, premiações e confraternizações de fim de ano.`,
        advantages: [
            "ALGUNS ITENS",
            "Coffee break para abertura e intervalos",
            "Atendimento a estandes em feiras e exposições, com reposição diária",
            "Almoço ou jantar executivo",
            "Coquetel com canapés, salgados volantes e espetinhos",
            "Happy hour com chopp, cerveja e bar de drinks",
            "Estações especiais, como a Estação Japonesa",
            "Mesa de café com expresso, bolos e petit fours",
            "Equipe uniformizada: garçons, garçonetes, bartenders e maître"
        ]
    },

    "porte": {
        description: `De encontros mais reservados a grandes celebrações, o Ambrozini oferece soluções gastronômicas para diferentes formatos e dimensões de eventos em Belo Horizonte.

Cuidamos da comida, da bebida e do serviço, considerando o público, o horário e o local de cada ocasião. Nossa equipe de garçons, bartenders e cozinha trabalha para proporcionar uma experiência organizada e acolhedora.

Cada cardápio pode ser personalizado de acordo com a proposta do evento, seja uma celebração particular, um encontro empresarial ou uma programação com grande número de convidados.`,
        advantages: [
            "ALGUMAS SOLUÇÕES",
            "Eventos de pequeno, médio e grande porte",
            "Cardápios personalizados para diferentes públicos",
            "Serviços de buffet e gastronomia para eventos",
            "Coffee break, coquetéis, almoços e jantares",
            "Equipe de garçons, bartenders e cozinha",
            "Atendimento a eventos corporativos e particulares"
        ]
    }
};

eventCards.forEach(card => {

    card.addEventListener("click", () => {

        const eventType = card.dataset.event;
        const eventTitle = card.dataset.title;
        const eventImage = card.querySelector(".event-card-image").src;

        const data = eventData[eventType];

        eventModalImage.src = eventImage;
        eventModalImage.alt = eventTitle;
        eventModalTitle.textContent = eventTitle;
        eventModalDescription.textContent = data.description;

        eventModalAdvantages.innerHTML = "";

        data.advantages.forEach(advantage => {

            const item = document.createElement("p");

            item.textContent = advantage;

            eventModalAdvantages.appendChild(item);

        });

        eventModal.classList.add("event-modal-active");

    });

});

eventModalClose.addEventListener("click", () => {
    eventModal.classList.remove("event-modal-active");
});

eventModal.addEventListener("click", event => {

    if(event.target === eventModal){
        eventModal.classList.remove("event-modal-active");
    }

});


/* GALERIA DE EVENTOS */

const gallerySlider = document.querySelector(".gallery-slider");
const galleryButtonPrev = document.querySelector(".gallery-button-prev");
const galleryButtonNext = document.querySelector(".gallery-button-next");

function galleryNext(){

    const firstImage = gallerySlider.firstElementChild;

    gallerySlider.appendChild(firstImage);
}

function galleryPrev(){

    const lastImage = gallerySlider.lastElementChild;

    gallerySlider.insertBefore(
        lastImage,
        gallerySlider.firstElementChild
    );
}

// Imagem inicial aleatória no mobile
const galleryMobileScreen = window.matchMedia("(max-width: 768px)");

if(galleryMobileScreen.matches){

    const galleryImages = gallerySlider.querySelectorAll(".gallery-image");

    if(galleryImages.length > 0){

        const randomIndex = Math.floor(Math.random() * galleryImages.length);

        for(let i = 0; i < randomIndex; i++){

            const firstImage = gallerySlider.firstElementChild;

            gallerySlider.appendChild(firstImage);
        }
    }
}

// Botões de navegação
galleryButtonNext.addEventListener("click", galleryNext);
galleryButtonPrev.addEventListener("click", galleryPrev);


document.addEventListener("DOMContentLoaded", () => {

    const faqModal = document.getElementById("events-faq-modal");
    const faqOpenButton = document.getElementById("open-events-faq");
    const faqCloseButton = document.getElementById("close-events-faq");
    const faqOverlay = faqModal?.querySelector(".events-faq-overlay");
    const faqContainer = faqModal?.querySelector(".events-faq-container");

    if (!faqModal || !faqOpenButton || !faqCloseButton || !faqContainer) {
        return;
    }

    const faqCategories = faqModal.querySelectorAll(".events-faq-category");
    const faqPanels = faqModal.querySelectorAll(".events-faq-panel");

    let previousFocus = null;
    let previousBodyOverflow = "";

    // ABRIR MODAL
    function openFaqModal() {

        previousFocus = document.activeElement;
        previousBodyOverflow = document.body.style.overflow;

        faqModal.hidden = false;
        document.body.style.overflow = "hidden";

        faqContainer.scrollTop = 0;
        faqCloseButton.focus();
    }

    // FECHAR MODAL
    function closeFaqModal() {

        faqModal.hidden = true;
        document.body.style.overflow = previousBodyOverflow;

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    }

    // BOTÃO DE ABERTURA
    faqOpenButton.addEventListener("click", openFaqModal);

    // BOTÃO DE FECHAMENTO
    faqCloseButton.addEventListener("click", closeFaqModal);

    // FECHAR AO CLICAR FORA
    faqOverlay?.addEventListener("click", closeFaqModal);

    // FECHAR COM ESC E MANTER FOCO DENTRO DA MODAL
    faqModal.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            event.preventDefault();
            closeFaqModal();
            return;
        }

        if (event.key !== "Tab") {
            return;
        }

        const focusableElements = Array.from(
            faqModal.querySelectorAll(
                'button:not([disabled]), a[href], summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter(element => element.getClientRects().length > 0);

        if (!focusableElements.length) {
            event.preventDefault();
            faqCloseButton.focus();
            return;
        }

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    // ALTERNAR CATEGORIAS
    faqCategories.forEach(categoryButton => {

        categoryButton.addEventListener("click", () => {

            const selectedCategory = categoryButton.dataset.faqCategory;

            faqCategories.forEach(button => {

                const isActive = button === categoryButton;

                button.classList.toggle("active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
            });

            faqPanels.forEach(panel => {

                const isActive = panel.dataset.faqPanel === selectedCategory;

                panel.classList.toggle("active", isActive);
                panel.hidden = !isActive;
            });

        });

    });

});
