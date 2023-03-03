
async function getItemsData() {
    const api = 'https://eldenring.fanapis.com/api/items';

    try {
        const response = await fetch(api, {mode: 'cors'});
        const itemData = await response.json();
        const allItems = itemData.data;
        allItems.map(item => createItems(item));
    } catch (error) {
        console.log(error);
    }
}

function createInputAndButton() {
    const main = document.querySelector('main');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('items-input-container');
    main.appendChild(inputContainer);

    const itemsInput = document.createElement('input');
    itemsInput.classList.add('items-input');
    itemsInput.placeholder = 'Search items by name...'
    inputContainer.appendChild(itemsInput);

    const itemsButton = document.createElement('button');
    itemsButton.classList.add('items-button');
    itemsButton.textContent = 'Search';
    itemsButton.addEventListener('click', function() {
        main.textContent = '';
        validateInput(itemsInput, itemsInput);
    })
    inputContainer.appendChild(itemsButton);

    itemsInput.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            main.textContent = '';
            validateInput(itemsInput, itemsInput)
        }
    })
}

function validateInput(input, search) {
    const main = document.querySelector('main');

    if (input.value === '') {
        createInputAndButton();
        createPageButtons();
        const itemSearchErrorContainer = document.createElement('div');
        itemSearchErrorContainer.classList.add('item-search-error-container');
        main.appendChild(itemSearchErrorContainer);
        const itemSearchError = document.createElement('p');
        itemSearchError.classList.add('item-search-error');
        itemSearchError.textContent = 'Please enter a name so we know what to search for.'
        itemSearchErrorContainer.appendChild(itemSearchError);
      } else {
        searchItems(search.value);
    }
}

function createPageButtons() {
    const main = document.querySelector('main');

    const pageButtonsContainer = document.createElement('div');
    pageButtonsContainer.classList.add('page-buttons-container');
    main.appendChild(pageButtonsContainer);

    for (let i = 0; i < 10; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('item-page-button');
        pageButton.textContent = [i + 1];
        pageButtonsContainer.appendChild(pageButton);
        pageButton.addEventListener('click', function() {
            pageSelection([i]);
        });
    }
}

async function pageSelection(index) {
    const main = document.querySelector('main');

    const api = `https://eldenring.fanapis.com/api/items?limit=50&page=${index}`;
    
    try {
        const response = await fetch(api, {mode: 'cors'});
        const itemData = await response.json();
        const pageOfItems = itemData.data;
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        pageOfItems.map(page => createItems(page));
    
    } catch(error) {
        console.log('error');
    }
}

async function searchItems(searchQuery) {
    const api = `https://eldenring.fanapis.com/api/items?name=${searchQuery}`;

    const main = document.querySelector('main');

    try {
        const response = await fetch(api, {mode: 'cors'});
        const itemData = await response.json();
        const singleItem = itemData.data[0];
        createInputAndButton();
        createPageButtons();
        createItems(singleItem);
    } catch(error) {
        main.textContent = '';
        createInputAndButton();
        createPageButtons();
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        main.appendChild(errorContainer);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = "We couldn't seem to find that item. Please try another search."
        errorContainer.appendChild(errorMessage);
    }
}

function createItems(data) {
    const main = document.querySelector('main');

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    main.appendChild(itemContainer);

    const itemImg = document.createElement('img');
    itemImg.src = data.image;
    if (!data.image) {
        itemImg.src = 'images/noimage.jpg';
    }
    itemImg.classList.add('item-img');
    itemContainer.appendChild(itemImg);

    const itemName = document.createElement('p');
    itemName.textContent = data.name;
    itemName.classList.add('item-name');
    itemContainer.appendChild(itemName);

    const itemLocation = document.createElement('p');
    itemLocation.textContent = data.location;
    itemLocation.classList.add('item-location');
    itemContainer.appendChild(itemLocation);

    const itemDesc = document.createElement('p');
    itemDesc.textContent = data.description;
    itemDesc.classList.add('item-description');
    itemContainer.appendChild(itemDesc);

    return main;
}

function renderItemsPage() {
    const main = document.querySelector('main');
    main.textContent = '';

    createInputAndButton();
    createPageButtons();
}

export { renderItemsPage, getItemsData }