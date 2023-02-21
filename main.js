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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\r\n\r\nfunction createMain() {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderApp() {\r\n    const content = document.querySelector('.content');\r\n    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.appendChild(createMain());\r\n}\r\n\r\nrenderApp();\n\n//# sourceURL=webpack://elden-ring-app/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createNavbar() {\r\n    const navHeader = document.createElement('header');\r\n    navHeader.classList.add('nav-header');\r\n\r\n    const logoContainer = document.createElement('div');\r\n    logoContainer.classList.add('logo-container');\r\n    navHeader.appendChild(logoContainer);\r\n\r\n    const logo = document.createElement('h1');\r\n    logo.classList.add('logo');\r\n    logo.textContent = 'The Elden Ring Compendium';\r\n    logoContainer.appendChild(logo);\r\n\r\n    const navBar = document.createElement('nav');\r\n    navBar.classList.add('navbar');\r\n    navHeader.appendChild(navBar);\r\n\r\n    const bossesBtn = document.createElement('button');\r\n    bossesBtn.classList.add('nav-button');\r\n    bossesBtn.textContent = 'Bosses';\r\n    navBar.appendChild(bossesBtn);\r\n\r\n    const creaturesBtn = document.createElement('button');\r\n    creaturesBtn.classList.add('nav-button');\r\n    creaturesBtn.textContent = 'Creatures';\r\n    navBar.appendChild(creaturesBtn);\r\n\r\n    const weaponsBtn = document.createElement('button');\r\n    weaponsBtn.classList.add('nav-button');\r\n    weaponsBtn.textContent = 'Weapons';\r\n    navBar.appendChild(weaponsBtn);\r\n\r\n    const armorsBtn = document.createElement('button');\r\n    armorsBtn.classList.add('nav-button');\r\n    armorsBtn.textContent = 'Armors';\r\n    navBar.appendChild(armorsBtn);\r\n\r\n    const itemsBtn = document.createElement('button');\r\n    itemsBtn.classList.add('nav-button');\r\n    itemsBtn.textContent = 'Items';\r\n    navBar.appendChild(itemsBtn);\r\n\r\n    const locationsBtn = document.createElement('button');\r\n    locationsBtn.classList.add('nav-button');\r\n    locationsBtn.textContent = 'Locations';\r\n    navBar.appendChild(locationsBtn);\r\n\r\n    const hamburgerBtn = document.createElement('div');\r\n    hamburgerBtn.classList.add('hamburger-btn');\r\n    navHeader.appendChild(hamburgerBtn);\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n        const hamburgerLine = document.createElement('div');\r\n        hamburgerLine.classList.add('hamburger-line');\r\n        hamburgerBtn.appendChild(hamburgerLine);\r\n    }\r\n\r\n    hamburgerBtn.addEventListener('click', function() {\r\n        navBar.classList.toggle('navbar-active');\r\n    })\r\n\r\n\r\n    return navHeader;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);\n\n//# sourceURL=webpack://elden-ring-app/./src/navbar.js?");

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