export const renderHeader = () => {
    const header = document.createElement('header');

    const titleHeader = document.createElement('div');
    titleHeader.id = 'headerTitle';

    const logo = document.createElement('img');
    logo.src = 'media/mundo.jpg';
    logo.alt = 'logo';
    logo.id = 'headerLogo';

    const title = document.createElement('h1');
    title.textContent = 'Sitios Turísticos del Mundo';
    
    titleHeader.appendChild(logo);
    titleHeader.appendChild(title);
    header.appendChild(titleHeader);

    // pestañas de navegación
    const opcionesHeader = document.createElement('nav');
    opcionesHeader.classList.add('nav-tabs');

    const aHome = document.createElement('a');
    aHome.textContent = 'Home';
    aHome.href = '#'; 
    aHome.classList.add('nav-link');

    const aApiKey = document.createElement('a');
    aApiKey.textContent = 'API KEY';
    aApiKey.href = '#';
    aApiKey.classList.add('nav-link');

    opcionesHeader.appendChild(aHome);
    opcionesHeader.appendChild(aApiKey);

    header.appendChild(opcionesHeader);

    // Añadir manejadores de eventos para la navegación
    aHome.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/');
    });

    aApiKey.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/apikey');
    });

    return header;
}