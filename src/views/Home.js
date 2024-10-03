import { navigateTo } from "../router.js";
import data from "../data/dataset.js"
import { renderItems } from "../components/Card.js";
import { renderHeader } from "../components/Navbar.js";
import { renderFooter } from "../components/Footer.js";
import { renderFilters } from "../components/Filters.js";

export function Home(props) {
  // Crear el contenedor principal de la vista
  const viewEl = document.createElement('div');

  // Renderiza el encabezado y añádelo al contenedor principal
  viewEl.appendChild(renderHeader());

  const main = document.createElement('main');
  main.appendChild(renderFilters())
  main.appendChild(renderItems(data));
  viewEl.appendChild(main)

  const chatButton = document.createElement('button');
  chatButton.textContent = 'Ir al chat';
  chatButton.addEventListener('click', () => navigateTo("/chat", { name: "Xochitl" }));
  viewEl.appendChild(chatButton);

  viewEl.appendChild(renderFooter())

  return viewEl;
}
  
