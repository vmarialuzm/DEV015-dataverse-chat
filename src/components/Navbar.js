export const renderHeader = () => {
    const header = document.createElement('header');
    header.id = 'headerTitle';
    header.innerHTML = `<h1>Sitios Turísticos del Mundo</h1>`;
    return header;
}