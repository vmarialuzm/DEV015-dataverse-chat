import { navigateTo } from "../router.js";

export function Chat(props) {
  const chatEl = document.createElement('div');
  chatEl.id = 'chatEl';

  // chatEl.innerHTML = `
  //   <h1>Bienvenido a la página de Chat personal, ${props.name}!</h1>
  // `;

  // Sección izquierda de mensajes
  const chatSection  = document.createElement('div');
  chatSection.id = 'chatSection';

  const chatTitle = document.createElement('h2');
  chatTitle.textContent = 'Chat';

  const chatMessages = document.createElement('div');
  chatMessages.id = 'chatMessages'; // Contenedor de mensajes

  const chatInput = document.createElement('input');
  chatInput.type = 'text';
  chatInput.placeholder = 'Escribe un mensaje...';
  chatInput.id = 'chatInput';

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';

  sendButton.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
      const newMessage = document.createElement('div');
      newMessage.className = 'chatMessage';
      newMessage.textContent = message;
      chatMessages.appendChild(newMessage);
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
  profilePic.src = 'https://via.placeholder.com/150'; // Imagen de perfil (puedes cambiar la URL)
  profilePic.alt = 'Foto de perfil';
  profilePic.id = 'profilePic';

  const profileName = document.createElement('h3');
  profileName.textContent = 'Nombre de Usuario';

  const profileEmail = document.createElement('p');
  profileEmail.textContent = 'user@example.com'; // Correo de usuario

  profileSection.appendChild(profilePic);
  profileSection.appendChild(profileName);
  profileSection.appendChild(profileEmail);

  // Añadir ambas secciones a la vista principal
  chatEl.appendChild(chatSection);
  chatEl.appendChild(profileSection);

  // const homeButton = document.createElement('button');
  // homeButton.textContent = 'Ir al home';
  // homeButton.addEventListener('click', () => navigateTo("/", { name: "Carlos", id: 100 }))

  // chatEl.appendChild(homeButton);

  return chatEl;
}