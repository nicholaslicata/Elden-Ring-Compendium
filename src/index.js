import createNavbar from './navbar';
import renderHome from './home';

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function renderApp() {
    const content = document.querySelector('.content');
    content.appendChild(createNavbar());
    content.appendChild(createMain());

    renderHome();
}

renderApp();