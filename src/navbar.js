
function createNavbar() {
    
    const navHeader = document.createElement('header');
    navHeader.classList.add('nav-header');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    navHeader.appendChild(logoContainer);

    const logo = document.createElement('button');
    logo.classList.add('logo');
    logo.textContent = 'Elden Ring Compendium';
    logoContainer.appendChild(logo);

    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');
    navHeader.appendChild(navBar);

    const bossesBtn = document.createElement('button');
    bossesBtn.classList.add('nav-button');
    bossesBtn.textContent = 'Bosses';
    navBar.appendChild(bossesBtn);

    const creaturesBtn = document.createElement('button');
    creaturesBtn.classList.add('nav-button');
    creaturesBtn.textContent = 'Creatures';
    navBar.appendChild(creaturesBtn);

    const weaponsBtn = document.createElement('button');
    weaponsBtn.classList.add('nav-button');
    weaponsBtn.textContent = 'Weapons';
    navBar.appendChild(weaponsBtn);

    const armorsBtn = document.createElement('button');
    armorsBtn.classList.add('nav-button');
    armorsBtn.textContent = 'Armors';
    navBar.appendChild(armorsBtn);

    const itemsBtn = document.createElement('button');
    itemsBtn.classList.add('nav-button');
    itemsBtn.textContent = 'Items';
    navBar.appendChild(itemsBtn);

    const locationsBtn = document.createElement('button');
    locationsBtn.classList.add('nav-button');
    locationsBtn.textContent = 'Locations';
    navBar.appendChild(locationsBtn);

    const hamburgerBtn = document.createElement('div');
    hamburgerBtn.classList.add('hamburger-btn');
    navHeader.appendChild(hamburgerBtn);

    for (let i = 0; i < 3; i++) {
        const hamburgerLine = document.createElement('div');
        hamburgerLine.classList.add('hamburger-line');
        hamburgerBtn.appendChild(hamburgerLine);
    }

    hamburgerBtn.addEventListener('click', function() {
        navBar.classList.toggle('navbar-active');
    })

    const navButtons = [
        bossesBtn,
        creaturesBtn,
        weaponsBtn,
        armorsBtn,
        itemsBtn,
        locationsBtn,
    ]
    navButtons.forEach(button => button.addEventListener('click', function() {
        if (navBar.classList.contains('navbar-active')) {
            navBar.classList.remove('navbar-active');
        }
    }))

    return navHeader;
}


export default createNavbar;