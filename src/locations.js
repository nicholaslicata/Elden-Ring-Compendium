
async function getLocationsData() {
    const api = 'https://eldenring.fanapis.com/api/locations';

    try {
        const response = await fetch(api, {mode: 'cors'});
        const locationData = await response.json();
        const allLocations = locationData.data;
        allLocations.map(location => createLocations(location));
    } catch (error) {
        console.log(error);
    }
}

function createInputAndButton() {
    const main = document.querySelector('main');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('locations-input-container');
    main.appendChild(inputContainer);

    const locationsInput = document.createElement('input');
    locationsInput.classList.add('locations-input');
    locationsInput.placeholder = 'Search locations by name...'
    inputContainer.appendChild(locationsInput);

    const locationsButton = document.createElement('button');
    locationsButton.classList.add('locations-button');
    locationsButton.textContent = 'Search';
    locationsButton.addEventListener('click', function() {
        main.textContent = '';
        validateInput(locationsInput, locationsInput);
    })
    inputContainer.appendChild(locationsButton);

    locationsInput.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            main.textContent = '';
            validateInput(locationsInput, locationsInput)
        }
    })
}

function validateInput(input, search) {
    const main = document.querySelector('main');

    if (input.value === '') {
        createInputAndButton();
        createPageButtons();
        const locationSearchErrorContainer = document.createElement('div');
        locationSearchErrorContainer.classList.add('location-search-error-container');
        main.appendChild(locationSearchErrorContainer);
        const locationSearchError = document.createElement('p');
        locationSearchError.classList.add('location-search-error');
        locationSearchError.textContent = 'Please enter a name so we know what to search for.'
        locationSearchErrorContainer.appendChild(locationSearchError);
      } else {
        searchLocations(search.value);
    }
}


function createPageButtons() {
    const main = document.querySelector('main');

    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.classList.add('page-buttons-container');
    main.appendChild(pageButtonsContainer);

    for (let i = 0; i < 6; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('location-page-button');
        pageButton.textContent = [i + 1];
        pageButtonsContainer.appendChild(pageButton);
        pageButton.addEventListener('click', function() {
            pageSelection([i]);
        });
    }
}

async function pageSelection(index) {
    const main = document.querySelector('main');

    const api = `https://eldenring.fanapis.com/api/locations?limit=20&page=${index}`;
    
    try {
        const response = await fetch(api, {mode: 'cors'});
        const locationData = await response.json();
        const pageOfLocations = locationData.data;
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        pageOfLocations.map(page => createLocations(page));
    
    } catch(error) {
        console.log('error');
    }
}

async function searchLocations(searchQuery) {
    const api = `https://eldenring.fanapis.com/api/locations?name=${searchQuery}`;

    const main = document.querySelector('main');

    try {
        const response = await fetch(api, {mode: 'cors'});
        const locationData = await response.json();
        const singleLocation = locationData.data[0];
        createInputAndButton();
        createPageButtons();
        createLocations(singleLocation);
    } catch(error) {
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        main.appendChild(errorContainer);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = "We couldn't seem to find that location. Please try another search."
        errorContainer.appendChild(errorMessage);
    }
}

function createLocations(data) {
    const main = document.querySelector('main');

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    main.appendChild(locationContainer);

    const locationImg = document.createElement('img');
    locationImg.src = data.image;
    if (!data.image) {
        locationImg.src = 'images/noimage.jpg';
    }
    locationImg.classList.add('armor-img');
    locationContainer.appendChild(locationImg);

    const locationName = document.createElement('p');
    locationName.textContent = data.name;
    locationName.classList.add('location-name');
    locationContainer.appendChild(locationName);

    const locationLocation = document.createElement('p');
    locationLocation.textContent = data.location;
    locationLocation.classList.add('location-location');
    locationContainer.appendChild(locationLocation);

    const locationDesc = document.createElement('p');
    locationDesc.textContent = data.description;
    locationDesc.classList.add('location-description');
    locationContainer.appendChild(locationDesc);

    return main;
}

function renderLocationsPage() {
    const main = document.querySelector('main');
    main.textContent = '';

    createInputAndButton();
    createPageButtons();
}

export { renderLocationsPage, getLocationsData }


