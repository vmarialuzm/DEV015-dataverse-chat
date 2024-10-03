export const renderFilters = () => {
    const section = document.createElement('section');
    section.id = 'contenedorFiltrosOrdenamiento';

    // Filtro por País
    const div1 = document.createElement('div');

    const label1 = document.createElement('label');
    label1.htmlFor = 'country-select';
    label1.textContent = 'Fitrar por:';

    const select1 = document.createElement('select');
    select1.setAttribute('data-testid', 'select-filter');
    select1.setAttribute('name', 'country');
    select1.setAttribute('id', 'country-select');

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
        select1.appendChild(option);
    })

    div1.appendChild(label1);
    div1.appendChild(select1);
    section.appendChild(div1)


    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    return section;
}