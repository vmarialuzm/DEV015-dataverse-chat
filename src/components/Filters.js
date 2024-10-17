export const renderFilters = () => {
  const sectionFilters = document.createElement('section');
  sectionFilters.id = 'contenedorFiltrosOrdenamiento';

  // Filtro por País
  const divFilter = document.createElement('div');

  const labelFilter = document.createElement('label');
  labelFilter.htmlFor = 'country-select';
  labelFilter.textContent = 'Fitrar por:';

  const selectFilter = document.createElement('select');
  selectFilter.setAttribute('data-testid', 'select-filter');
  selectFilter.setAttribute('name', 'country');
  selectFilter.setAttribute('id', 'country-select');

  // Opciones de países
  const countries = [
    "", "Perú", "Francia", "China", "India", "Estados Unidos", "Brasil",
    "Italia", "Egipto", "Jordania", "Australia", "Camboya", "Grecia",
    "España", "Reino Unido", "Nepal", "Canadá", "Emiratos Árabes Unidos",
    "Japón", "Chile"
  ];

  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country || 'País';
    selectFilter.appendChild(option);
  })

  divFilter.appendChild(labelFilter);
  divFilter.appendChild(selectFilter);
  sectionFilters.appendChild(divFilter)

  // Ordenar por nombre
  const divSort = document.createElement('div');

  const labelSort = document.createElement('label');
  labelSort.htmlFor = 'nombre-select';
  labelSort.textContent = 'Ordenar por:';

  const selectSort = document.createElement('select');
  selectSort.setAttribute('data-testid', 'select-sort');
  selectSort.setAttribute('name', 'nombre');
  selectSort.setAttribute('id', 'nombre-select');

  const sorts = [
    {value:"", text:"Nombre"},
    {value:"asc", text:"A - Z"},
    {value:"desc", text:"Z - A"}
  ]

  sorts.forEach((sort) => {
    const optionSort = document.createElement('option');
    optionSort.value = sort.value;
    optionSort.textContent = sort.text
    selectSort.appendChild(optionSort)
  })

  divSort.appendChild(labelSort);
  divSort.appendChild(selectSort);
  sectionFilters.appendChild(divSort)

  // Estadísticas
  const divStatistics = document.createElement('div');

  const labelStatistics = document.createElement('label');
  labelStatistics.htmlFor = 'unesco-select';
  labelStatistics.textContent = 'Estadísticas por:';

  const selectStatistics = document.createElement('select');
  selectStatistics.setAttribute('data-testid', 'select-estadisticas');
  selectStatistics.setAttribute('name', 'unesco');
  selectStatistics.setAttribute('id', 'unesco-select');

  const years = ["", "1970", "1980", "1990", "2000", "2010"]

  years.forEach((year) => {
    const optionStatistics = document.createElement('option');
    optionStatistics.value = year;
    optionStatistics.textContent = year || 'Unesco';
    selectStatistics.appendChild(optionStatistics);
  })

  divStatistics.appendChild(labelStatistics);
  divStatistics.appendChild(selectStatistics);
  sectionFilters.appendChild(divStatistics);

  // Botón borrar
  const divBorrar = document.createElement('div');
  const buttonBorrar = document.createElement('button');
  buttonBorrar.setAttribute('data-testid', 'button-clear');
  buttonBorrar.textContent = 'LIMPIAR';
  divBorrar.appendChild(buttonBorrar);

  sectionFilters.appendChild(divBorrar);

  return sectionFilters;
}