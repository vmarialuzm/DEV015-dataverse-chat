import { navigateTo } from "../router.js";

export function Chat(props) {
  const chatEl = document.createElement('div');
  chatEl.innerHTML = `
    <h1>Bienvenido a la página de Chat personal, ${props.name}!</h1>
  `;

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Ir al home';
  homeButton.addEventListener('click', () => navigateTo("/", { name: "Carlos", id: 100 }))

  chatEl.appendChild(homeButton);

  return chatEl;
}