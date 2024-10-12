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

      messageOpenAi.textContent = await communicateWithOpenAI(message, props.name);

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
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Ir al home';
  homeButton.addEventListener('click', () => navigateTo("/"));

  profileSection.appendChild(homeButton);

  // Añadir ambas secciones a la vista principal
  chatEl.appendChild(chatSection);
  chatEl.appendChild(profileSection);

  return chatEl;
}