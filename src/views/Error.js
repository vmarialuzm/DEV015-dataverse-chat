import { navigateTo } from "../router.js";

export function Error(props) {
  const ErrorEl = document.createElement('div');
  ErrorEl.innerHTML = `
    <h1>¡Error 404!</h1>
    <p>Página no encontrada.</p>
  `
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Ir al home';
  homeButton.addEventListener('click', () => navigateTo("/", { name: "Carlos", id: 100 }))

  ErrorEl.appendChild(homeButton);

  return ErrorEl;
}