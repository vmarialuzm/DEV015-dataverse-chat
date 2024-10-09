import { navigateTo } from "../router.js";

export const renderItems = (data) => {
    const sectionCards = document.createElement('section');
    sectionCards.id = 'contenedorCards';

    const newUl = document.createElement("ul");

    data.forEach((element) => {
        const newLi = document.createElement("li");
        newLi.setAttribute('itemscope', '');
        newLi.setAttribute('itemtype', 'TouristSites')

        newLi.classList.add('tourist-site-item');

        newLi.innerHTML = `
        <img src="${element.imageUrl}" alt="">
        <p itemprop="name"><strong>Nombre:</strong> ${element.name}</p>
        <p itemprop="country"><strong>País:</strong> ${element.facts.country}</p>
        <p itemprop="shortDescription"><strong>Descripción Corta:</strong> ${element.shortDescription}</p>
        `
        newUl.appendChild(newLi);

        const buttonCard = document.createElement('button');
        buttonCard.textContent = 'Chat';
        
        buttonCard.addEventListener('click', () => {
            navigateTo('/chat', 
            { 
              id: element.id,
              name: element.name, 
              imagen: element.imageUrl,
              pais: element.facts.country,
              description: element.description,
              unesco: element.facts.unescoWorldHeritage
            });
        });

        newLi.appendChild(buttonCard);
    });

    sectionCards.appendChild(newUl);
    return sectionCards;
};