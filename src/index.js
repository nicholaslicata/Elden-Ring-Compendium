import createNavbar from './navbar';

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function renderApp() {
    const content = document.querySelector('.content');
    content.appendChild(createNavbar());
    content.appendChild(createMain());
}

renderApp();