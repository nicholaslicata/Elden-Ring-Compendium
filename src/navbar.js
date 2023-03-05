import renderHome from './home';
import { renderBossesPage, getBossesData } from './bosses';
import { renderCreaturesPage, getCreaturesData } from './creatures';
import { renderWeaponsPage, getWeaponsData } from './weapons';
import { renderArmorsPage, getArmorsData } from './armors';
import { renderItemsPage, getItemsData } from './items';
import { renderLocationsPage, getLocationsData } from './locations';

function createNavbar() {

    const navHeader = document.createElement('header');
    navHeader.classList.add('nav-header');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    navHeader.appendChild(logoContainer);

    const logo = document.createElement('button');
    logo.classList.add('logo');
    logo.textContent = 'Elden Ring Compendium';
    logo.addEventListener('click', renderHome);
    logoContainer.appendChild(logo);

    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');
    navHeader.appendChild(navBar);

    const bossesBtn = document.createElement('button');
    bossesBtn.classList.add('nav-button');
    bossesBtn.textContent = 'Bosses';
    bossesBtn.addEventListener('click', function() {
        getBossesData();
        renderBossesPage();
    });
    navBar.appendChild(bossesBtn);

    const creaturesBtn = document.createElement('button');
    creaturesBtn.classList.add('nav-button');
    creaturesBtn.textContent = 'Creatures';
    creaturesBtn.addEventListener('click', function() {
        getCreaturesData();
        renderCreaturesPage();
    })
    navBar.appendChild(creaturesBtn);

    const weaponsBtn = document.createElement('button');
    weaponsBtn.classList.add('nav-button');
    weaponsBtn.textContent = 'Weapons';
    weaponsBtn.addEventListener('click', function() {
        getWeaponsData();
        renderWeaponsPage();
    })
    navBar.appendChild(weaponsBtn);

    const armorsBtn = document.createElement('button');
    armorsBtn.classList.add('nav-button');
    armorsBtn.textContent = 'Armors';
    armorsBtn.addEventListener('click', function() {
        getArmorsData();
        renderArmorsPage();
    })
    navBar.appendChild(armorsBtn);

    const itemsBtn = document.createElement('button');
    itemsBtn.classList.add('nav-button');
    itemsBtn.textContent = 'Items';
    itemsBtn.addEventListener('click', function() {
        getItemsData();
        renderItemsPage();
    })
    navBar.appendChild(itemsBtn);

    const locationsBtn = document.createElement('button');
    locationsBtn.classList.add('nav-button');
    locationsBtn.textContent = 'Locations';
    locationsBtn.addEventListener('click', function() {
        getLocationsData();
        renderLocationsPage();
    })
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
            preventScroll(navBar, 'navbar-active');
    })

   const navButtons = [
        bossesBtn,
        creaturesBtn,
        weaponsBtn,
        armorsBtn,
        itemsBtn,
        locationsBtn,
        logo,
    ]
    navButtons.forEach(button => button.addEventListener('click', function() {
        if (navBar.classList.contains('navbar-active')) {
            navBar.classList.remove('navbar-active');
            preventScroll(navBar, 'navbar-active');
        }
    }))

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768){
            navBar.classList.remove('navbar-active');
            document.body.classList.remove('body-no-scroll');
        }
    })

    return navHeader;
}

function preventScroll(element, className) {
    if (element.classList.contains(className) && window.innerWidth < 768) {
        document.body.classList.add('body-no-scroll')
    } else {
        document.body.classList.remove('body-no-scroll');
    }
}


export default createNavbar;