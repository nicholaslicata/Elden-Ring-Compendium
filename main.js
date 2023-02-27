/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bosses.js":
/*!***********************!*\
  !*** ./src/bosses.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBossesData\": () => (/* binding */ getBossesData),\n/* harmony export */   \"renderBossesPage\": () => (/* binding */ renderBossesPage)\n/* harmony export */ });\n\r\nasync function getBossesData() {\r\n    const api = 'https://eldenring.fanapis.com/api/bosses?limit20&page=0';\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const bossData = await response.json();\r\n        const allBosses = bossData.data;\r\n        allBosses.map(boss => createBosses(boss));\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nfunction createInputAndButton() {\r\n    const main = document.querySelector('main');\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('bosses-input-container');\r\n    main.appendChild(inputContainer);\r\n\r\n    const bossesInput = document.createElement('input');\r\n    bossesInput.classList.add('bosses-input');\r\n    bossesInput.placeholder = 'Search bosses by name...'\r\n    inputContainer.appendChild(bossesInput);\r\n\r\n    const bossesButton = document.createElement('button');\r\n    bossesButton.classList.add('bosses-button');\r\n    bossesButton.textContent = 'Search';\r\n    bossesButton.addEventListener('click', function() {\r\n        main.textContent = '';\r\n        validateInput(bossesInput, bossesInput);\r\n    })\r\n    inputContainer.appendChild(bossesButton);\r\n}\r\n\r\nfunction validateInput(input, search) {\r\n    const main = document.querySelector('main');\r\n\r\n    if (input.value === '') {\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const bossSearchErrorContainer = document.createElement('div');\r\n        bossSearchErrorContainer.classList.add('boss-search-error-container');\r\n        main.appendChild(bossSearchErrorContainer);\r\n        const bossSearchError = document.createElement('p');\r\n        bossSearchError.classList.add('boss-search-error');\r\n        bossSearchError.textContent = 'Please enter a name so we know what to search for.'\r\n        bossSearchErrorContainer.appendChild(bossSearchError);\r\n      } else {\r\n        searchBosses(search.value);\r\n    }\r\n}\r\n\r\nfunction createPageButtons() {\r\n    const main = document.querySelector('main');\r\n\r\n    const pageButtonsContainer = document.createElement('div');\r\n    pageButtonsContainer.classList.add('page-buttons-container');\r\n    main.appendChild(pageButtonsContainer);\r\n\r\n    for (let i = 0; i < 5; i++) {\r\n        const pageButton = document.createElement('button');\r\n        pageButton.classList.add('boss-page-button');\r\n        pageButton.textContent = [i + 1];\r\n        pageButtonsContainer.appendChild(pageButton);\r\n        pageButton.addEventListener('click', function() {\r\n            pageSelection([i]);\r\n        });\r\n    }\r\n}\r\n\r\nasync function pageSelection(index) {\r\n    const main = document.querySelector('main');\r\n\r\n    const api = `https://eldenring.fanapis.com/api/bosses?limit=20&page=${index}`;\r\n    \r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const bossData = await response.json();\r\n        const pageOfBosses = bossData.data;\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        pageOfBosses.map(page => createBosses(page));\r\n    \r\n    } catch(error) {\r\n        console.log('error');\r\n    }\r\n}\r\n\r\nasync function searchBosses(searchQuery) {\r\n    const api = `https://eldenring.fanapis.com/api/bosses?name=${searchQuery}`;\r\n\r\n    const main = document.querySelector('main');\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const bossData = await response.json();\r\n        const singleBoss = bossData.data[0];\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        createBosses(singleBoss);\r\n    } catch(error) {\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const errorContainer = document.createElement('div');\r\n        errorContainer.classList.add('error-container');\r\n        main.appendChild(errorContainer);\r\n        const errorMessage = document.createElement('p');\r\n        errorMessage.classList.add('error-message');\r\n        errorMessage.textContent = \"We couldn't seem to find that boss. Please try another search.\"\r\n        errorContainer.appendChild(errorMessage);\r\n    }\r\n}\r\n\r\nfunction createBosses(data) {\r\n    const main = document.querySelector('main');\r\n\r\n    const bossContainer = document.createElement('div');\r\n    bossContainer.classList.add('boss-container');\r\n    main.appendChild(bossContainer);\r\n\r\n    const bossImg = document.createElement('img');\r\n    bossImg.src = data.image;\r\n    if (!data.image) {\r\n        bossImg.src = 'images/noimage.jpg';\r\n    }\r\n    bossImg.classList.add('boss-img');\r\n    bossContainer.appendChild(bossImg);\r\n\r\n    const bossName = document.createElement('p');\r\n    bossName.textContent = data.name;\r\n    bossName.classList.add('boss-name');\r\n    bossContainer.appendChild(bossName);\r\n\r\n    const bossLocation = document.createElement('p');\r\n    bossLocation.textContent = data.location;\r\n    bossLocation.classList.add('boss-location');\r\n    bossContainer.appendChild(bossLocation);\r\n\r\n    const bossDesc = document.createElement('p');\r\n    bossDesc.textContent = data.description;\r\n    bossDesc.classList.add('boss-description');\r\n    bossContainer.appendChild(bossDesc);\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderBossesPage() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    createInputAndButton();\r\n    createPageButtons();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://elden-ring-app/./src/bosses.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createHome() {\r\n    const homeContainer = document.createElement('div');\r\n    homeContainer.classList.add('home-container');\r\n\r\n    const homeHeaderContainer = document.createElement('div');\r\n    homeHeaderContainer.classList.add('home-header-container');\r\n    homeContainer.appendChild(homeHeaderContainer);\r\n\r\n    const homeHeader = document.createElement('h1');\r\n    homeHeader.classList.add('home-header');\r\n    homeHeader.textContent = 'Greetings Tarnished';\r\n    homeHeaderContainer.appendChild(homeHeader);\r\n\r\n    const homeP1 = document.createElement('p');\r\n    homeP1.classList.add('home-p');\r\n    homeP1.textContent = 'Welcome to the Elden Ring Compendium. Our goal is to provide the Tarnished of the Lands Between with a referential tool to assist in their journey to become Elden Lords.';\r\n    homeHeader.appendChild(homeP1);\r\n\r\n    return homeContainer;\r\n}\r\n\r\nfunction renderHome() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://elden-ring-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nfunction createMain() {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderApp() {\r\n    const content = document.querySelector('.content');\r\n    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.appendChild(createMain());\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\nrenderApp();\n\n//# sourceURL=webpack://elden-ring-app/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _bosses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bosses */ \"./src/bosses.js\");\n\r\n\r\n\r\nfunction createNavbar() {\r\n    const navHeader = document.createElement('header');\r\n    navHeader.classList.add('nav-header');\r\n\r\n    const logoContainer = document.createElement('div');\r\n    logoContainer.classList.add('logo-container');\r\n    navHeader.appendChild(logoContainer);\r\n\r\n    const logo = document.createElement('button');\r\n    logo.classList.add('logo');\r\n    logo.textContent = 'Elden Ring Compendium';\r\n    logo.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    logoContainer.appendChild(logo);\r\n\r\n    const navBar = document.createElement('nav');\r\n    navBar.classList.add('navbar');\r\n    navHeader.appendChild(navBar);\r\n\r\n    const bossesBtn = document.createElement('button');\r\n    bossesBtn.classList.add('nav-button');\r\n    bossesBtn.textContent = 'Bosses';\r\n    bossesBtn.addEventListener('click', function() {\r\n        (0,_bosses__WEBPACK_IMPORTED_MODULE_1__.getBossesData)();\r\n        (0,_bosses__WEBPACK_IMPORTED_MODULE_1__.renderBossesPage)();\r\n    });\r\n    navBar.appendChild(bossesBtn);\r\n\r\n    const creaturesBtn = document.createElement('button');\r\n    creaturesBtn.classList.add('nav-button');\r\n    creaturesBtn.textContent = 'Creatures';\r\n    navBar.appendChild(creaturesBtn);\r\n\r\n    const weaponsBtn = document.createElement('button');\r\n    weaponsBtn.classList.add('nav-button');\r\n    weaponsBtn.textContent = 'Weapons';\r\n    navBar.appendChild(weaponsBtn);\r\n\r\n    const armorsBtn = document.createElement('button');\r\n    armorsBtn.classList.add('nav-button');\r\n    armorsBtn.textContent = 'Armors';\r\n    navBar.appendChild(armorsBtn);\r\n\r\n    const itemsBtn = document.createElement('button');\r\n    itemsBtn.classList.add('nav-button');\r\n    itemsBtn.textContent = 'Items';\r\n    navBar.appendChild(itemsBtn);\r\n\r\n    const locationsBtn = document.createElement('button');\r\n    locationsBtn.classList.add('nav-button');\r\n    locationsBtn.textContent = 'Locations';\r\n    navBar.appendChild(locationsBtn);\r\n\r\n    const hamburgerBtn = document.createElement('div');\r\n    hamburgerBtn.classList.add('hamburger-btn');\r\n    navHeader.appendChild(hamburgerBtn);\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n        const hamburgerLine = document.createElement('div');\r\n        hamburgerLine.classList.add('hamburger-line');\r\n        hamburgerBtn.appendChild(hamburgerLine);\r\n    }\r\n\r\n    hamburgerBtn.addEventListener('click', function() {\r\n        navBar.classList.toggle('navbar-active');\r\n    })\r\n\r\n    const navButtons = [\r\n        bossesBtn,\r\n        creaturesBtn,\r\n        weaponsBtn,\r\n        armorsBtn,\r\n        itemsBtn,\r\n        locationsBtn,\r\n    ]\r\n    navButtons.forEach(button => button.addEventListener('click', function() {\r\n        if (navBar.classList.contains('navbar-active')) {\r\n            navBar.classList.remove('navbar-active');\r\n        }\r\n    }))\r\n\r\n    return navHeader;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);\n\n//# sourceURL=webpack://elden-ring-app/./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;