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

    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    `;
  
    const buttonCard = document.createElement('button');
    
    buttonCard.innerHTML = svgIcon;
    buttonCard.innerHTML += 'Chat';
    
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