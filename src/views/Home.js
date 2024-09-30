import { navigateTo } from "../router.js";

export function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Bienvenido a la página de Home, ${props.name}!</h1>
  `;
  console.log(props.id);

  const chatButton = document.createElement('button');
  chatButton.textContent = 'Ir al chat';
  chatButton.addEventListener('click', () => navigateTo("/chat", { name: "Xochitl" }));

  viewEl.appendChild(chatButton);

  return viewEl;
}
  
