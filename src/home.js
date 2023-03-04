
function createHome() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const homeHeaderContainer = document.createElement('div');
    homeHeaderContainer.classList.add('home-header-container');
    homeContainer.appendChild(homeHeaderContainer);

    const homeHeader = document.createElement('h1');
    homeHeader.classList.add('home-header');
    homeHeader.textContent = 'Greetings Tarnished';
    homeHeaderContainer.appendChild(homeHeader);

    const homeP1 = document.createElement('p');
    homeP1.classList.add('home-p');
    homeP1.textContent = 'Welcome to the Elden Ring Compendium. Our goal is to provide the Tarnished of the Lands Between with a referential tool to assist in their journey to become Elden Lords.';
    homeHeader.appendChild(homeP1);

    return homeContainer;
}

function renderHome() {
    const main = document.querySelector('main');
    main.textContent = '';
    // main.style.backgroundImage = 'url(images/eldenringbg.jpg)';
    // main.style.backgroundAttachment = 'fixed';
    // main.style.backgroundSize = 'cover';
    // main.style.backgroundPosition = 'center'

    main.appendChild(createHome());
}

export default renderHome;