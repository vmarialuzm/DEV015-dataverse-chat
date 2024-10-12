import { navigateTo } from "../router.js";
import data from "../data/dataset.js"
import { renderItems } from "../components/Card.js";
import { renderHeader } from "../components/Navbar.js";
import { renderFooter } from "../components/Footer.js";
import { renderFilters } from "../components/Filters.js";
import { renderStatistics } from "../components/Statistics.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";

export function Home(props) {
  // Crear el contenedor principal de la vista
  const viewEl = document.createElement('div');
  viewEl.id = 'viewEl';

  // Renderiza el encabezado y añádelo al contenedor principal
  viewEl.appendChild(renderHeader());

  const main = document.createElement('main');

  // Renderizar filtros y almacenar la referencia
  const containerFilter = renderFilters();
  main.appendChild(containerFilter);

  // Renderizar estadísticas
  const containerEstadisticas = renderStatistics()
  main.appendChild(containerEstadisticas);

  // Renderizar items
  const contenedorCards = renderItems(data);
  main.appendChild(contenedorCards);

  viewEl.appendChild(main)
  viewEl.appendChild(renderFooter())

  // Integración con las funciones de filtrado
  // Filtrar
  const selectFilter = containerFilter.querySelector("#country-select");

  selectFilter.addEventListener("change", () => {
    const result = filterData(data, 'country', selectFilter.value);
    contenedorCards.replaceChildren(renderItems(result));
  })

  // Ordenar
  const selectSort = containerFilter.querySelector("#nombre-select");

  selectSort.addEventListener("change", () => {
    const resultFilter = selectFilter.value ? filterData(data, 'country', selectFilter.value) : data;
    
    const result = sortData(resultFilter, 'name', selectSort.value);
    contenedorCards.replaceChildren(renderItems(result));
  })

  // Estadísticas
  const selectEstadisticas = containerFilter.querySelector("#unesco-select");

  selectEstadisticas.addEventListener("change", (event) => {
    const newParrafo = document.createElement("p")
    const result = computeStats(data, event.target.value)
    newParrafo.innerHTML = `
      <span>Porcentaje de atractivos turísticos reconocidos por la Unesco como matrimonio mundial en los años
      <strong>${selectEstadisticas.value} : ${result}</strong></span>
      `
  
    containerEstadisticas.replaceChildren(newParrafo);
  })

  // Botón limpiar
  const botonLimpiar = containerFilter.querySelector("button[data-testid='button-clear']");
  botonLimpiar.addEventListener("click", () => {
    selectFilter.value = "";
    selectSort.value = "";
    contenedorCards.replaceChildren(renderItems(data));
  });

  // evento click de una card que me lleve a su chat, aca si necesita props

  return viewEl;
}
  
