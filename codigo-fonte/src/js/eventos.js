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
        description: "Uma pausa pensada para receber, conectar e proporcionar uma experiência gastronômica completa.",
        advantages: [
            "Cardápios personalizados",
            "Montagem e apresentação",
            "Equipe especializada"
        ]
    },

    "happy-hour": {
        description: "Uma experiência descontraída para encontros corporativos, celebrações e momentos de integração.",
        advantages: [
            "Cardápios variados",
            "Serviço completo",
            "Estrutura personalizada"
        ]
    },

    "catering": {
        description: "Gastronomia e estrutura para levar a experiência Ambrozini até o local do seu evento.",
        advantages: [
            "Produção gastronômica",
            "Equipe de atendimento",
            "Estrutura completa"
        ]
    },

    "particulares": {
        description: "Eventos sociais planejados para transformar celebrações em experiências especiais.",
        advantages: [
            "Casamentos e celebrações",
            "Cardápios personalizados",
            "Atendimento completo"
        ]
    },

    "corporativos": {
        description: "Soluções gastronômicas para empresas que buscam praticidade, qualidade e uma experiência marcante.",
        advantages: [
            "Eventos corporativos",
            "Coffee breaks e confraternizações",
            "Estrutura para diferentes formatos"
        ]
    },

    "porte": {
        description: "Estrutura e gastronomia preparadas para eventos de pequeno, médio e grande porte.",
        advantages: [
            "Estrutura dimensionada",
            "Equipe especializada",
            "Operação completa"
        ]
    }
};

eventCards.forEach(card => {

    card.addEventListener("click", () => {

        const eventType = card.dataset.event;
        const eventTitle = card.dataset.title;
        const eventImage = card.dataset.image;

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