import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export function Chat(props) {
  const chatEl = document.createElement('div');
  chatEl.id = 'chatEl';

  // Sección izquierda de mensajes
  const chatSection  = document.createElement('div');
  chatSection.id = 'chatSection';

  const chatTitle = document.createElement('h2');
  chatTitle.textContent = `Chat ${props.name}`;

  const chatMessages = document.createElement('div');
  chatMessages.id = 'chatMessages'; // Contenedor de mensajes

  const chatInput = document.createElement('input');
  chatInput.type = 'text';
  chatInput.placeholder = 'Escribe un mensaje...';
  chatInput.id = 'chatInput';

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';

  sendButton.addEventListener('click', async() => {
    const message = chatInput.value;
    if (message.trim() !== '') {
      const newMessage = document.createElement('p');
      newMessage.className = 'chatMessage';
      newMessage.textContent = message;

      chatMessages.appendChild(newMessage);

      //usar aqui la funcion de openai
      const messageOpenAi = document.createElement('p');
      messageOpenAi.className = 'chatOpenAi';
      messageOpenAi.textContent = 'Escribiendo...'

      chatMessages.appendChild(messageOpenAi);

      messageOpenAi.textContent = await communicateWithOpenAI(message, props);

      chatInput.value = '';
    }
  });
  chatSection.appendChild(chatTitle);
  chatSection.appendChild(chatMessages);
  chatSection.appendChild(chatInput);
  chatSection.appendChild(sendButton);

  // Sección derecha de perfil
  const profileSection = document.createElement('div');
  profileSection.id = 'profileSection';

  const profilePic = document.createElement('img');
  profilePic.src = props.imagen
  profilePic.alt = 'Foto de perfil';
  profilePic.id = 'profilePic';

  const profileName = document.createElement('h3');
  profileName.textContent = props.name;

  const profilePais = document.createElement('h4');
  profilePais.textContent = props.pais; 

  const profileShortDescription = document.createElement('p');
  profileShortDescription.textContent = props.description;

  const profileUnesco = document.createElement('p');
  profileUnesco.textContent = `Fue declarada como patrimonio mundial por la Unesco en el año ${props.unesco}.`;

  profileSection.appendChild(profilePic);
  profileSection.appendChild(profileName);
  profileSection.appendChild(profilePais);
  profileSection.appendChild(profileShortDescription);
  profileSection.appendChild(profileUnesco);

  // Botton de regresar al home
  const iconFlecha = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
  `;

  const homeButton = document.createElement('button');
  homeButton.innerHTML = iconFlecha;
  homeButton.innerHTML += 'Ir al home';
  homeButton.addEventListener('click', () => navigateTo("/"));

  profileSection.appendChild(homeButton);

  // Añadir ambas secciones a la vista principal
  chatEl.appendChild(chatSection);
  chatEl.appendChild(profileSection);

  return chatEl;
}