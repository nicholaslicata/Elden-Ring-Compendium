
async function getCreaturesData() {
    const api = 'https://eldenring.fanapis.com/api/creatures';

    try {
        const response = await fetch(api, {mode: 'cors'});
        const creatureData = await response.json();
        const allCreatures = creatureData.data;
        allCreatures.map(creature => createCreatures(creature));
    } catch (error) {
        console.log(error);
    }
}

function createInputAndButton() {
    const main = document.querySelector('main');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('creatures-input-container');
    main.appendChild(inputContainer);

    const creaturesInput = document.createElement('input');
    creaturesInput.classList.add('creatures-input');
    creaturesInput.placeholder = 'Search creatures by name...'
    inputContainer.appendChild(creaturesInput);

    const creaturesButton = document.createElement('button');
    creaturesButton.classList.add('creatures-button');
    creaturesButton.textContent = 'Search';
    creaturesButton.addEventListener('click', function() {
        main.textContent = '';
        validateInput(creaturesInput, creaturesInput);
    })
    inputContainer.appendChild(creaturesButton);

    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            main.textContent = '';
            validateInput(creaturesInput, creaturesInput)
        }
    })
}

function validateInput(input, search) {
    const main = document.querySelector('main');

    if (input.value === '') {
        createInputAndButton();
        createPageButtons();
        const creatureSearchErrorContainer = document.createElement('div');
        creatureSearchErrorContainer.classList.add('creature-search-error-container');
        main.appendChild(creatureSearchErrorContainer);
        const creatureSearchError = document.createElement('p');
        creatureSearchError.classList.add('creature-search-error');
        creatureSearchError.textContent = 'Please enter a name so we know what to search for.'
        creatureSearchErrorContainer.appendChild(creatureSearchError);
      } else {
        searchCreatures(search.value);
    }
}

function createPageButtons() {
    const main = document.querySelector('main');

    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.classList.add('page-buttons-container');
    main.appendChild(pageButtonsContainer);

    for (let i = 0; i < 6; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('creature-page-button');
        pageButton.textContent = [i + 1];
        pageButtonsContainer.appendChild(pageButton);
        pageButton.addEventListener('click', function() {
            pageSelection([i]);
        });
    }
}

async function pageSelection(index) {
    const main = document.querySelector('main');

    const api = `https://eldenring.fanapis.com/api/creatures?limit=20&page=${index}`;
    
    try {
        const response = await fetch(api, {mode: 'cors'});
        const creatureData = await response.json();
        const pageOfCreatures = creatureData.data;
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        pageOfCreatures.map(page => createCreatures(page));
    
    } catch(error) {
        console.log('error');
    }
}

async function searchCreatures(searchQuery) {
    const api = `https://eldenring.fanapis.com/api/creatures?name=${searchQuery}`;

    const main = document.querySelector('main');

    try {
        const response = await fetch(api, {mode: 'cors'});
        const creatureData = await response.json();
        const singleCreature = creatureData.data[0];
        createInputAndButton();
        createPageButtons();
        createCreatures(singleCreature);
    } catch(error) {
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        main.appendChild(errorContainer);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = "We couldn't seem to find that creature. Please try another search."
        errorContainer.appendChild(errorMessage);
    }
}

function createCreatures(data) {
    const main = document.querySelector('main');

    const creatureContainer = document.createElement('div');
    creatureContainer.classList.add('creature-container');
    main.appendChild(creatureContainer);

    const creatureImg = document.createElement('img');
    creatureImg.src = data.image;
    if (!data.image) {
        creatureImg.src = 'images/noimage.jpg';
    }
    creatureImg.classList.add('creature-img');
    creatureContainer.appendChild(creatureImg);

    const creatureName = document.createElement('p');
    creatureName.textContent = data.name;
    creatureName.classList.add('creature-name');
    creatureContainer.appendChild(creatureName);

    const creatureLocation = document.createElement('p');
    creatureLocation.textContent = data.location;
    creatureLocation.classList.add('creature-location');
    creatureContainer.appendChild(creatureLocation);

    const creatureDesc = document.createElement('p');
    creatureDesc.textContent = data.description;
    creatureDesc.classList.add('creature-description');
    creatureContainer.appendChild(creatureDesc);

    return main;
}

function renderCreaturesPage() {
    const main = document.querySelector('main');
    main.textContent = '';

    createInputAndButton();
    createPageButtons();
}

export {renderCreaturesPage, getCreaturesData};