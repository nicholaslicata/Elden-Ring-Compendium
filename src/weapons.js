
async function getWeaponsData() {
    const api = 'https://eldenring.fanapis.com/api/weapons';

    try {
        const response = await fetch(api, {mode: 'cors'});
        const weaponData = await response.json();
        const allWeapons = weaponData.data;
        allWeapons.map(weapon  => createWeapons(weapon));
        console.log(weaponData);
        console.log(allWeapons);
    } catch (error) {
        console.log(error);
    }
}

function createInputAndButton() {
    const main = document.querySelector('main');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('weapons-input-container');
    main.appendChild(inputContainer);

    const weaponsInput = document.createElement('input');
    weaponsInput.classList.add('weapons-input');
    weaponsInput.placeholder = 'Search weapons by name...'
    inputContainer.appendChild(weaponsInput);

    const weaponsButton = document.createElement('button');
    weaponsButton.classList.add('weapons-button');
    weaponsButton.textContent = 'Search';
    weaponsButton.addEventListener('click', function() {
        main.textContent = '';
        validateInput(weaponsInput, weaponsInput);
    })
    inputContainer.appendChild(weaponsButton);

    weaponsInput.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            main.textContent = '';
            validateInput(weaponsInput, weaponsInput)
        }
    })
}

function validateInput(input, search) {
    const main = document.querySelector('main');

    if (input.value === '') {
        createInputAndButton();
        createPageButtons();
        const weaponSearchErrorContainer = document.createElement('div');
        weaponSearchErrorContainer.classList.add('weapon-search-error-container');
        main.appendChild(weaponSearchErrorContainer);
        const weaponSearchError = document.createElement('p');
        weaponSearchError.classList.add('weapon-search-error');
        weaponSearchError.textContent = 'Please enter a name so we know what to search for.'
        weaponSearchErrorContainer.appendChild(weaponSearchError);
      } else {
        searchWeapons(search.value);
    }
}

function createPageButtons() {
    const main = document.querySelector('main');

    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.classList.add('page-buttons-container');
    main.appendChild(pageButtonsContainer);

    for (let i = 0; i < 8; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('weapon-page-button');
        pageButton.textContent = [i + 1];
        pageButtonsContainer.appendChild(pageButton);
        pageButton.addEventListener('click', function() {
            pageSelection([i]);
        });
    }
}

async function pageSelection(index) {
    const main = document.querySelector('main');

    const api = `https://eldenring.fanapis.com/api/weapons?limit=40&page=${index}`;
    
    try {
        const response = await fetch(api, {mode: 'cors'});
        const weaponData = await response.json();
        const pageOfWeapons = weaponData.data;
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        pageOfWeapons.map(page => createWeapons(page));
    
    } catch(error) {
        console.log('error');
    }
}

async function searchWeapons(searchQuery) {
    const api = `https://eldenring.fanapis.com/api/weapons?name=${searchQuery}`;

    const main = document.querySelector('main');

    try {
        const response = await fetch(api, {mode: 'cors'});
        const weaponData = await response.json();
        const singleWeapon = weaponData.data[0];
        createInputAndButton();
        createPageButtons();
        createWeapons(singleWeapon);
    } catch(error) {
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        main.appendChild(errorContainer);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = "We couldn't seem to find that weapon. Please try another search."
        errorContainer.appendChild(errorMessage);
    }
}

function createWeapons(data) {
    const main = document.querySelector('main');

    const weaponContainer = document.createElement('div');
    weaponContainer.classList.add('weapon-container');
    main.appendChild(weaponContainer);

    const weaponImg = document.createElement('img');
    weaponImg.src = data.image;
    if (!data.image) {
        weaponImg.src = 'images/noimage.jpg';
    }
    weaponImg.classList.add('weapon-img');
    weaponContainer.appendChild(weaponImg);

    const weaponName = document.createElement('p');
    weaponName.textContent = data.name;
    weaponName.classList.add('weapon-name');
    weaponContainer.appendChild(weaponName);

    const weaponLocation = document.createElement('p');
    weaponLocation.textContent = data.location;
    weaponLocation.classList.add('weapon-location');
    weaponContainer.appendChild(weaponLocation);

    const weaponDesc = document.createElement('p');
    weaponDesc.textContent = data.description;
    weaponDesc.classList.add('weapon-description');
    weaponContainer.appendChild(weaponDesc);

    return main;
}

function renderWeaponsPage() {
    const main = document.querySelector('main');
    main.textContent = '';

    createInputAndButton();
    createPageButtons();
}

export { renderWeaponsPage, getWeaponsData };