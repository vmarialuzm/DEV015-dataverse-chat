import { navigateTo } from "../router.js";

export function Error() {
  const ErrorEl = document.createElement('div');
  ErrorEl.innerHTML = `
    <h1>¡Error 404!</h1>
    <p>Página no encontrada.</p>
  `

  const iconFlecha = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
  `;
  const homeButton = document.createElement('button');
  homeButton.innerHTML = iconFlecha;
  homeButton.innerHTML += 'Ir al home';
  homeButton.addEventListener('click', () => navigateTo("/"))

  ErrorEl.appendChild(homeButton);

  return ErrorEl;
}