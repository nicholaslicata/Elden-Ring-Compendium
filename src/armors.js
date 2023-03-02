
async function getArmorsData() {
    const api = 'https://eldenring.fanapis.com/api/armors';

    try {
        const response = await fetch(api, {mode: 'cors'});
        const armorData = await response.json();
        const allArmors = armorData.data;
        allArmors.map(armor => createArmors(armor));
        console.log(armorData);
        console.log(allArmors);
    } catch (error) {
        console.log(error);
    }
}

function createInputAndButton() {
    const main = document.querySelector('main');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('armors-input-container');
    main.appendChild(inputContainer);

    const armorsInput = document.createElement('input');
    armorsInput.classList.add('armors-input');
    armorsInput.placeholder = 'Search armors by name...'
    inputContainer.appendChild(armorsInput);

    const armorsButton = document.createElement('button');
    armorsButton.classList.add('armors-button');
    armorsButton.textContent = 'Search';
    armorsButton.addEventListener('click', function() {
        main.textContent = '';
        validateInput(armorsInput, armorsInput);
    })
    inputContainer.appendChild(armorsButton);

    armorsInput.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            main.textContent = '';
            validateInput(armorsInput, armorsInput)
        }
    })
}

function validateInput(input, search) {
    const main = document.querySelector('main');

    if (input.value === '') {
        createInputAndButton();
        createPageButtons();
        const armorSearchErrorContainer = document.createElement('div');
        armorSearchErrorContainer.classList.add('armor-search-error-container');
        main.appendChild(armorSearchErrorContainer);
        const armorSearchError = document.createElement('p');
        armorSearchError.classList.add('armor-search-error');
        armorSearchError.textContent = 'Please enter a name so we know what to search for.'
        armorSearchErrorContainer.appendChild(armorSearchError);
      } else {
        searchArmors(search.value);
    }
}

function createPageButtons() {
    const main = document.querySelector('main');

    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.classList.add('page-buttons-container');
    main.appendChild(pageButtonsContainer);

    for (let i = 0; i < 10; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('armor-page-button');
        pageButton.textContent = [i + 1];
        pageButtonsContainer.appendChild(pageButton);
        pageButton.addEventListener('click', function() {
            pageSelection([i]);
        });
    }
}

async function pageSelection(index) {
    const main = document.querySelector('main');

    const api = `https://eldenring.fanapis.com/api/armors?limit=60&page=${index}`;
    
    try {
        const response = await fetch(api, {mode: 'cors'});
        const armorData = await response.json();
        const pageOfArmors = armorData.data;
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        pageOfArmors.map(page => createArmors(page));
    
    } catch(error) {
        console.log('error');
    }
}

async function searchArmors(searchQuery) {
    const api = `https://eldenring.fanapis.com/api/armors?name=${searchQuery}`;

    const main = document.querySelector('main');

    try {
        const response = await fetch(api, {mode: 'cors'});
        const armorData = await response.json();
        const singleArmor = armorData.data[0];
        createInputAndButton();
        createPageButtons();
        createArmors(singleArmor);
    } catch(error) {
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        main.appendChild(errorContainer);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = "We couldn't seem to find that armor. Please try another search."
        errorContainer.appendChild(errorMessage);
    }
}

function createArmors(data) {
    const main = document.querySelector('main');

    const armorContainer = document.createElement('div');
    armorContainer.classList.add('boss-container');
    main.appendChild(armorContainer);

    const armorImg = document.createElement('img');
    armorImg.src = data.image;
    if (!data.image) {
        armorImg.src = 'images/noimage.jpg';
    }
    armorImg.classList.add('armor-img');
    armorContainer.appendChild(armorImg);

    const armorName = document.createElement('p');
    armorName.textContent = data.name;
    armorName.classList.add('armor-name');
    armorContainer.appendChild(armorName);

    const armorLocation = document.createElement('p');
    armorLocation.textContent = data.location;
    armorLocation.classList.add('armor-location');
    armorContainer.appendChild(armorLocation);

    const armorDesc = document.createElement('p');
    armorDesc.textContent = data.description;
    armorDesc.classList.add('armor-description');
    armorContainer.appendChild(armorDesc);

    return main;
}

function renderArmorsPage() {
    const main = document.querySelector('main');
    main.textContent = '';

    createInputAndButton();
    createPageButtons();
}

export { renderArmorsPage, getArmorsData }