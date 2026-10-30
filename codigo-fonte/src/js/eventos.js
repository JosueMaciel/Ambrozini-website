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
        description: `Uma pausa pode ser muito mais do que um intervalo. Na Ambrozini, acreditamos que os momentos entre reuniões, palestras, treinamentos e encontros profissionais também fazem parte da experiência de um evento. Por isso, desenvolvemos soluções gastronômicas que valorizam o acolhimento, a qualidade e a apresentação, proporcionando aos participantes uma pausa agradável e cheia de sabor.

Nosso Coffee Break pode ser pensado para diferentes formatos e necessidades, desde pequenas reuniões empresariais até encontros com um número maior de participantes. A proposta é oferecer uma experiência alinhada ao perfil do público, à programação e aos objetivos do evento, considerando a variedade gastronômica e os detalhes que tornam cada ocasião especial.

Mais do que servir alimentos e bebidas, queremos contribuir para um ambiente que estimule boas conversas, conexões e momentos de descontração. Com a experiência Ambrozini, cada pausa se transforma em uma oportunidade de receber bem e demonstrar cuidado com seus convidados.`,
        advantages: [
            "Opções gastronômicas personalizadas",
            "Apresentação cuidadosa",
            "Ideal para reuniões, palestras e treinamentos"
        ]
    },

    "happy-hour": {
        description: `Alguns dos melhores momentos acontecem quando as pessoas se reúnem para celebrar, conversar e compartilhar experiências. O Happy Hour Ambrozini foi pensado para transformar esses encontros em ocasiões agradáveis, combinando gastronomia, descontração e um atendimento que valoriza cada convidado.

Seja para comemorar conquistas profissionais, promover a integração entre equipes, receber parceiros comerciais ou reunir amigos em uma celebração especial, buscamos desenvolver soluções gastronômicas adequadas ao estilo de cada encontro. A proposta é proporcionar uma experiência leve, acolhedora e organizada, em que os participantes possam aproveitar o momento.

Acreditamos que um bom Happy Hour vai além do cardápio. Ele cria oportunidades para fortalecer relacionamentos, aproximar pessoas e construir boas lembranças. Na Ambrozini, a gastronomia faz parte dessa conexão, contribuindo para que cada encontro tenha sua própria identidade e seja lembrado pela experiência proporcionada.`,
        advantages: [
            "Experiências gastronômicas variadas",
            "Ideal para confraternizações e celebrações",
            "Soluções adaptadas ao seu evento"
        ]
    },

    "catering": {
        description: `Cada evento possui sua própria dinâmica, seu público e suas necessidades. Pensando nisso, a Ambrozini oferece soluções de Catering que levam nossa experiência gastronômica para diferentes ambientes, formatos e ocasiões. Nosso objetivo é contribuir para que a alimentação seja uma parte especial da experiência, independentemente de onde o encontro aconteça.

O serviço pode ser planejado de acordo com as características do evento, considerando o perfil dos convidados, o espaço disponível, a proposta gastronômica e as necessidades de atendimento. De encontros corporativos a celebrações particulares, buscamos unir sabor, apresentação e organização para criar soluções que se integrem à programação.

Entendemos que uma boa experiência gastronômica envolve muito mais do que o preparo dos alimentos. Ela também está relacionada ao cuidado com a apresentação, ao planejamento e à atenção aos detalhes. É dessa forma que a Ambrozini busca contribuir para eventos bem organizados, acolhedores e capazes de proporcionar momentos memoráveis aos participantes.`,
        advantages: [
            "Soluções gastronômicas personalizadas",
            "Atendimento para diferentes ocasiões",
            "Organização e apresentação"
        ]
    },

    "particulares": {
        description: `Existem momentos que merecem ser celebrados de maneira especial. Aniversários, casamentos, encontros familiares, comemorações e outras ocasiões importantes carregam histórias, sentimentos e expectativas. Na Ambrozini, entendemos que a gastronomia faz parte dessas memórias e pode tornar cada celebração ainda mais significativa.

Nossa proposta é oferecer experiências gastronômicas que respeitem o estilo de cada evento e valorizem a personalidade de quem está celebrando. Seja uma reunião mais intimista ou uma comemoração com muitos convidados, buscamos desenvolver soluções adequadas às necessidades da ocasião, com atenção à qualidade, à apresentação e aos detalhes que fazem a diferença.

Queremos que anfitriões e convidados possam aproveitar os momentos de encontro, compartilhar boas conversas e celebrar aquilo que realmente importa. Com a experiência Ambrozini, a gastronomia se torna parte da história de cada comemoração, contribuindo para criar lembranças especiais ao lado de pessoas queridas.`,
        advantages: [
            "Casamentos, aniversários e celebrações",
            "Experiências personalizadas",
            "Gastronomia para momentos especiais"
        ]
    },

    "corporativos": {
        description: `Eventos corporativos representam oportunidades importantes para fortalecer relacionamentos, compartilhar conhecimento, celebrar resultados e aproximar pessoas. Na Ambrozini, compreendemos que cada encontro empresarial possui objetivos específicos e que a experiência gastronômica pode contribuir diretamente para a percepção de qualidade e cuidado com os participantes.

Atendemos propostas gastronômicas para diferentes ocasiões do ambiente empresarial, como reuniões, convenções, palestras, treinamentos, confraternizações e encontros institucionais. Buscamos compreender as características de cada evento para oferecer soluções alinhadas ao perfil da empresa, ao público e à programação, valorizando a organização e a apresentação.

Nosso propósito é contribuir para experiências que transmitam profissionalismo, acolhimento e atenção aos detalhes. Acreditamos que receber bem também é uma forma de valorizar colaboradores, clientes e parceiros. Por isso, trabalhamos para que a gastronomia seja um elemento positivo na realização de encontros corporativos, fortalecendo conexões e deixando boas impressões.`,
        advantages: [
            "Convenções e encontros empresariais",
            "Confraternizações e eventos institucionais",
            "Soluções para diferentes formatos"
        ]
    },

    "porte": {
        description: `Cada evento possui uma dimensão, mas todos compartilham algo essencial: a importância de proporcionar uma boa experiência às pessoas presentes. Na Ambrozini, acreditamos que a qualidade da gastronomia, o planejamento e a atenção aos detalhes devem estar presentes em celebrações de pequeno, médio e grande porte.

Desenvolvemos propostas gastronômicas considerando as características de cada ocasião, desde encontros mais reservados até eventos com um público numeroso. Avaliamos as necessidades relacionadas ao formato, ao perfil dos convidados e à dinâmica da programação, buscando soluções que se adaptem à dimensão e aos objetivos de cada projeto.

Sabemos que eventos maiores exigem atenção especial à organização e à coordenação dos serviços, enquanto encontros menores valorizam a proximidade e a personalização. Independentemente do porte, nosso compromisso é contribuir para uma experiência gastronômica marcante, combinando sabor, cuidado e soluções pensadas para cada necessidade. Afinal, o que torna um evento especial não é apenas o seu tamanho, mas a experiência que ele proporciona.`,
        advantages: [
            "Eventos de pequeno, médio e grande porte",
            "Soluções adaptadas à dimensão do evento",
            "Planejamento gastronômico personalizado"
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
