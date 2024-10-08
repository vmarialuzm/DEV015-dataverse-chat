export const renderFooter = () => {
    const footer = document.createElement('footer');
    const p = document.createElement('p');

    p.textContent = 'Creado por Luz Vivanco © 2024';

    footer.appendChild(p);
    return footer;
}
