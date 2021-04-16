/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breeds.js":
/*!***********************!*\
  !*** ./src/breeds.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBreeds\": () => (/* binding */ renderBreeds),\n/* harmony export */   \"renderBreed\": () => (/* binding */ renderBreed),\n/* harmony export */   \"selectBreed\": () => (/* binding */ selectBreed),\n/* harmony export */   \"renderImage\": () => (/* binding */ renderImage),\n/* harmony export */   \"showPreviousImage\": () => (/* binding */ showPreviousImage),\n/* harmony export */   \"showNextImage\": () => (/* binding */ showNextImage)\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n\n\nlet currentBreedPictures = [];\n\nfunction renderBreeds(breedList) {\n    for (const breed of Object.keys(breedList.message)) {\n        renderBreed(breed);\n        }\n    if(localStorage.breed && localStorage.index) {\n        document.getElementById(localStorage.breed).classList.add(\"breed--selected\");\n        document.getElementById(\"page-number\").innerText = \"\";\n        document.getElementById(\"page-number\").innerText = parseInt(localStorage.index)+1;\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getBreedImagesFromServer)(renderImage);\n    }\n  }\n  \nfunction renderBreed(dogBreed){\n    const breedName = document.createElement(\"p\");\n    breedName.innerText = dogBreed;\n    breedName.setAttribute(\"id\",dogBreed);\n    document.getElementById(\"breeds\").appendChild(breedName);\n    breedName.addEventListener(\"click\",selectBreed);\n  }\n  \nfunction selectBreed(){\n    if(document.querySelector(\".breed--selected\")) {\n        document.querySelector(\".breed--selected\").classList.remove(\"breed--selected\");\n        } \n    localStorage.setItem(\"index\",0);\n    modifyPageNumber();\n    localStorage.setItem(\"breed\",this.id);\n    this.classList.add(\"breed--selected\");\n    (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getBreedImagesFromServer)(renderImage);\n  }\n  \n  \nfunction renderImage(imageResponseMessage) {\n    currentBreedPictures = imageResponseMessage.message;\n    if(localStorage.index) {\n      document.getElementById(\"breed-image\").setAttribute(\"src\",currentBreedPictures[localStorage.index]);\n      }\n      else {\n        document.getElementById(\"breed-image\").setAttribute(\"src\",currentBreedPictures[0]);\n      } \n  }\n  \nfunction showPreviousImage(){\n    if(document.querySelector(\".breed--selected\")){\n        if(localStorage.index>=1) {\n            localStorage.index--;\n            }\n        modifyPageNumber();\n    }\n  }\n  \nfunction showNextImage(){\n    if(document.querySelector(\".breed--selected\")){\n        if(localStorage.index<currentBreedPictures.length-1) {\n            localStorage.index++;\n            }\n        modifyPageNumber();\n    }\n}\n\nfunction modifyPageNumber(){\n    document.getElementById(\"page-number\").innerText = \"\";\n    document.getElementById(\"page-number\").innerText = parseInt(localStorage.index)+1;\n    document.getElementById(\"breed-image\").setAttribute(\"src\",currentBreedPictures[localStorage.index]);\n}\n\n//# sourceURL=webpack://nat6-corsau-dog-app-m-version/./src/breeds.js?");

/***/ }),

/***/ "./src/handleLogin.js":
/*!****************************!*\
  !*** ./src/handleLogin.js ***!
  \****************************/
/***/ (() => {

eval("console.log(\"this is the login.js file\");\n\nconst inputName = document.getElementById(\"name\");\nconst inputPassword = document.getElementById(\"password\");\n\nconst PASSWORD_CHECK = \"123\";\n\ndocument.getElementById(\"login\").addEventListener(\"click\", () => {\n  const name = inputName.value;\n  const password = inputPassword.value;\n\n  if (name && password === PASSWORD_CHECK) {\n    localStorage.setItem(\"name\", name);\n    localStorage.setItem(\"password\", password);\n    window.location = \"/\";\n  }\n});\n\n\n//# sourceURL=webpack://nat6-corsau-dog-app-m-version/./src/handleLogin.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _breeds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breeds */ \"./src/breeds.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/storage */ \"./src/utils/storage.js\");\n\n\n\n\nconsole.log(\"JavaScript - Dogs App\");\n\n\nif (!localStorage.getItem(\"name\") || !localStorage.getItem(\"password\")) {\n  window.location = \"/login.html\";\n}\n\ndocument.getElementById(\"logout\").addEventListener(\"click\",_utils_storage__WEBPACK_IMPORTED_MODULE_2__.logOut);\ndocument.getElementById(\"backward\").addEventListener(\"click\",_breeds__WEBPACK_IMPORTED_MODULE_0__.showPreviousImage);\ndocument.getElementById(\"forward\").addEventListener(\"click\",_breeds__WEBPACK_IMPORTED_MODULE_0__.showNextImage);\n\n(0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getBreedListFromServer)(_breeds__WEBPACK_IMPORTED_MODULE_0__.renderBreeds);\n\n\n//# sourceURL=webpack://nat6-corsau-dog-app-m-version/./src/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBreedListFromServer\": () => (/* binding */ getBreedListFromServer),\n/* harmony export */   \"getBreedImagesFromServer\": () => (/* binding */ getBreedImagesFromServer)\n/* harmony export */ });\nconsole.log(\"this is the API.JS file\");\n\nfunction getDataFromServer(url,callback) {\n    fetch(url)\n        .then((r)=>r.json())\n        .then(callback)\n}\n\nfunction getBreedListFromServer(callback) {\n    getDataFromServer(\"https://dog.ceo/api/breeds/list/all\",callback)\n}\n\nfunction getBreedImagesFromServer(callback){\n    getDataFromServer(`https://dog.ceo/api/breed/${localStorage.breed}/images`,callback)\n}\n\n\n//# sourceURL=webpack://nat6-corsau-dog-app-m-version/./src/utils/api.js?");

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logOut\": () => (/* binding */ logOut)\n/* harmony export */ });\nfunction logOut(){\n    localStorage.removeItem(\"name\");\n    localStorage.removeItem(\"password\");\n    localStorage.removeItem(\"breed\");\n    localStorage.removeItem(\"index\");\n    redirectHome();\n}\n\nfunction redirectHome(){\n    window.location = \"/\";\n}\n\n//# sourceURL=webpack://nat6-corsau-dog-app-m-version/./src/utils/storage.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handleLogin.js");
/******/ 	
/******/ })()
;