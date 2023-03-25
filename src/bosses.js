
async function getBossesData() {
    const api = 'https://eldenring.fanapis.com/api/bosses?limit20&page=0';

    try {
        const response = await fetch(api, {mode: 'cors'});
        const bossData = await response.json();
        const allBosses = bossData.data;
        // Render bosses
        allBosses.map(boss => createBosses(boss));
    } catch (error) {
        console.log(error);
    }
}

function createInputAndButton() {
    const main = document.querySelector('main');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('bosses-input-container');
    main.appendChild(inputContainer);

    const bossesInput = document.createElement('input');
    bossesInput.classList.add('bosses-input');
    bossesInput.placeholder = 'Search bosses by name...'
    inputContainer.appendChild(bossesInput);

    const bossesButton = document.createElement('button');
    bossesButton.classList.add('bosses-button');
    bossesButton.textContent = 'Search';
    bossesButton.addEventListener('click', function() {
        main.textContent = '';
        validateInput(bossesInput, bossesInput);
    })
    inputContainer.appendChild(bossesButton);

    bossesInput.addEventListener('keyup', function(e) {
        // Run input validation when enter button pressed
        if (e.keyCode === 13) {
            main.textContent = '';
            validateInput(bossesInput, bossesInput)
        }
    })
}

function validateInput(input, search) {
    const main = document.querySelector('main');

    // Render error message if input empty
    if (input.value === '') {
        createInputAndButton();
        createPageButtons();
        const bossSearchErrorContainer = document.createElement('div');
        bossSearchErrorContainer.classList.add('boss-search-error-container');
        main.appendChild(bossSearchErrorContainer);
        const bossSearchError = document.createElement('p');
        bossSearchError.classList.add('boss-search-error');
        bossSearchError.textContent = 'Please enter a name so we know what to search for.'
        bossSearchErrorContainer.appendChild(bossSearchError);
        // Run search if input valid
      } else {
        searchBosses(search.value);
    }
}

function createPageButtons() {
    const main = document.querySelector('main');

    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.classList.add('page-buttons-container');
    main.appendChild(pageButtonsContainer);

    // Handle pagination for boss data
    for (let i = 0; i < 5; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('boss-page-button');
        pageButton.textContent = [i + 1];
        pageButtonsContainer.appendChild(pageButton);
        pageButton.addEventListener('click', function() {
            pageSelection([i]);
        });
    }
}

async function pageSelection(index) {
    const main = document.querySelector('main');

    const api = `https://eldenring.fanapis.com/api/bosses?limit=20&page=${index}`;
    
    try {
        const response = await fetch(api, {mode: 'cors'});
        const bossData = await response.json();
        const pageOfBosses = bossData.data;
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        // Render bosses per page number selection
        pageOfBosses.map(page => createBosses(page));
    
    } catch(error) {
        console.log('error');
    }
}

async function searchBosses(searchQuery) {
    const api = `https://eldenring.fanapis.com/api/bosses?name=${searchQuery}`;

    const main = document.querySelector('main');

    // Render single boss if user query valid
    try {
        const response = await fetch(api, {mode: 'cors'});
        const bossData = await response.json();
        const singleBoss = bossData.data[0];
        createInputAndButton();
        createPageButtons();
        createBosses(singleBoss);
        // Render error message if no match for user query
    } catch(error) {
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        main.appendChild(errorContainer);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = "We couldn't seem to find that boss. Please try another search."
        errorContainer.appendChild(errorMessage);
    }
}

function createBosses(data) {
    const main = document.querySelector('main');

    const bossContainer = document.createElement('div');
    bossContainer.classList.add('boss-container');
    main.appendChild(bossContainer);

    const bossImg = document.createElement('img');
    bossImg.src = data.image;
    // If no image for boss render this image
    if (!data.image) {
        bossImg.src = 'images/noimage.jpg';
    }
    bossImg.classList.add('boss-img');
    bossContainer.appendChild(bossImg);

    const bossName = document.createElement('p');
    bossName.textContent = data.name;
    bossName.classList.add('boss-name');
    bossContainer.appendChild(bossName);

    const bossLocation = document.createElement('p');
    bossLocation.textContent = data.location;
    bossLocation.classList.add('boss-location');
    bossContainer.appendChild(bossLocation);

    const bossDesc = document.createElement('p');
    bossDesc.textContent = data.description;
    bossDesc.classList.add('boss-description');
    bossContainer.appendChild(bossDesc);

    return main;
}

function renderBossesPage() {
    const main = document.querySelector('main');
    main.textContent = '';

    createInputAndButton();
    createPageButtons();
}


export {renderBossesPage, getBossesData};