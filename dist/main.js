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

/***/ "./src/displayHome.js":
/*!****************************!*\
  !*** ./src/displayHome.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayHome)\n/* harmony export */ });\nasync function displayHome() {\n  const nextButton = document.querySelector('.button__random');\n  const rand = document.querySelector('.random');\n  const gif = document.createElement('img');\n  gif.classList.add(\"gif\");\n  gif.src = await getRandomGif();\n  rand.insertBefore(gif, nextButton);\n\n  //when I press next, immediately display the loading svg!!!\n\n  function errorHandler() {\n    if (document.querySelector('.home__error-message') == null) {\n      const errorMsg = document.createElement('div');\n      errorMsg.classList.add('home__error-message');\n      errorMsg.innerHTML = 'Oh no, something went snap!';\n      rand.insertBefore(errorMsg, nextButton);\n    }\n  }\n  async function getRandomGif() {\n    try {\n      const res = await fetch(\"https://api.giphy.com/v1/gifs/random?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&tag=&rating=g\");\n      const data = await res.json();\n      const imgUrl = data.data.images.original.url;\n      return imgUrl;\n    } catch {\n      errorHandler();\n      gif.classList.remove('gif');\n      gif.classList.add('home-error-gif');\n      return 'error-svgrepo-com.svg';\n    }\n  }\n  nextButton.addEventListener('click', async () => {\n    gif.src = \"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif\";\n    gif.src = await getRandomGif();\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/displayHome.js?");

/***/ }),

/***/ "./src/displayRandom.js":
/*!******************************!*\
  !*** ./src/displayRandom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnDisplayrandom)\n/* harmony export */ });\nfunction returnDisplayrandom() {\n  const searchSection = document.querySelector('.search');\n  searchSection.classList.add('inactive');\n  const trendingSection = document.querySelector('.trending');\n  trendingSection.classList.add('inactive');\n  const randomSection = document.querySelector('.random');\n  const random_li = document.querySelector('.navigation__random-li');\n  const search_li = document.querySelector('.navigation__search-li');\n  const trending_li = document.querySelector('.navigation__trending-li');\n  if (!random_li.classList.contains('--active')) {\n    random_li.classList.add('--active');\n  }\n  if (search_li.classList.contains('--active')) {\n    search_li.classList.remove('--active');\n    searchSection.classList.add('inactive');\n    randomSection.classList.remove('inactive');\n  }\n  if (trending_li.classList.contains('--active')) {\n    trending_li.classList.remove('--active');\n    trendingSection.classList.add('inactive');\n    randomSection.classList.remove('inactive');\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/displayRandom.js?");

/***/ }),

/***/ "./src/displaySearch.js":
/*!******************************!*\
  !*** ./src/displaySearch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displaySearch)\n/* harmony export */ });\nasync function displaySearch() {\n  const searchSection = document.querySelector('.search');\n  const trendingSection = document.querySelector('.trending');\n  const randomSection = document.querySelector('.random');\n  const random_li = document.querySelector('.navigation__random-li');\n  const search_li = document.querySelector('.navigation__search-li');\n  const trending_li = document.querySelector('.navigation__trending-li');\n  if (search_li.classList.contains('--active')) {} else if (random_li.classList.contains('--active')) {\n    random_li.classList.remove('--active');\n    randomSection.classList.add('inactive');\n    search_li.classList.add('--active');\n    searchSection.classList.remove('inactive');\n  } else if (trending_li.classList.contains('--active')) {\n    trending_li.classList.remove('--active');\n    trendingSection.classList.add('inactive');\n    search_li.classList.add('--active');\n    searchSection.classList.remove('inactive');\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/displaySearch.js?");

/***/ }),

/***/ "./src/displayTrending.js":
/*!********************************!*\
  !*** ./src/displayTrending.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnTrendingGif)\n/* harmony export */ });\nfunction returnTrendingGif() {\n  const searchSection = document.querySelector('.search');\n  const trendingSection = document.querySelector('.trending');\n  const randomSection = document.querySelector('.random');\n  const random_li = document.querySelector('.navigation__random-li');\n  const search_li = document.querySelector('.navigation__search-li');\n  const trending_li = document.querySelector('.navigation__trending-li');\n  if (!trending_li.classList.contains('--active')) {\n    trending_li.classList.add('--active');\n  }\n  if (search_li.classList.contains('--active')) {\n    search_li.classList.remove('--active');\n    searchSection.classList.add('inactive');\n    trendingSection.classList.remove('inactive');\n  }\n  if (random_li.classList.contains('--active')) {\n    random_li.classList.remove('--active');\n    randomSection.classList.add('inactive');\n    trendingSection.classList.remove('inactive');\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/displayTrending.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHome */ \"./src/displayHome.js\");\n/* harmony import */ var _displayRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayRandom */ \"./src/displayRandom.js\");\n/* harmony import */ var _displaySearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaySearch */ \"./src/displaySearch.js\");\n/* harmony import */ var _displayTrending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTrending */ \"./src/displayTrending.js\");\n/* harmony import */ var _returnSearchGif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./returnSearchGif */ \"./src/returnSearchGif.js\");\n/* harmony import */ var _returnTrendingGif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./returnTrendingGif */ \"./src/returnTrendingGif.js\");\n\n\n\n\n\n\ndocument.querySelector('.search').classList.add('inactive');\ndocument.querySelector('.trending').classList.add('inactive');\nconst randButton = document.querySelector('.button__nav-random');\nconst searchButton = document.querySelector('.button__nav-search');\nconst trendingButton = document.querySelector('.button__nav-trending');\nrandButton.addEventListener('click', () => {\n  (0,_displayRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\nsearchButton.addEventListener('click', () => {\n  (0,_displaySearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\ntrendingButton.addEventListener('click', () => {\n  (0,_displayTrending__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n(0,_displayHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_returnTrendingGif__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nconst searchQueryButton = document.querySelector('.button__search');\nsearchQueryButton.addEventListener('click', () => {\n  (0,_returnSearchGif__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/returnSearchGif.js":
/*!********************************!*\
  !*** ./src/returnSearchGif.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnSearchGifs)\n/* harmony export */ });\nasync function returnSearchGifs() {\n  const imagesContainer = document.querySelector('.search__images-container');\n  imagesContainer.innerHTML = '';\n  function errorhandler() {\n    if (!document.querySelector('.search__error-message')) {\n      const errorMsg = document.createElement('div');\n      errorMsg.classList.add('search__error-message');\n      errorMsg.innerHTML = 'Oh no, something went snap! Try a different search term';\n      imagesContainer.append(errorMsg);\n      imagesContainer.classList.add('inactive');\n    }\n  }\n  async function getSearchGif(searchTerm) {\n    try {\n      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&tag=&rating=g&q=\",${searchTerm},\"&limit=6`);\n      const data = await res.json();\n      const imgUrl = await data;\n      return imgUrl;\n    } catch {\n      errorhandler();\n    }\n  }\n  const searchTerm = document.getElementsByClassName('search__input')[0].value;\n  let urls = [];\n  let titles = [];\n  const result = await getSearchGif(searchTerm);\n  if (result.data.length == 0) {\n    errorhandler();\n  } else {\n    result.data.forEach(data => {\n      urls.push(data.images.downsized.url);\n      titles.push(data.title);\n    });\n    for (let i = 0; i < 6; i++) {\n      let img = document.createElement('img');\n      img.classList.add('gif');\n      img.src = urls[i];\n      img.alt = titles[i];\n      imagesContainer.append(img);\n    }\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/returnSearchGif.js?");

/***/ }),

/***/ "./src/returnTrendingGif.js":
/*!**********************************!*\
  !*** ./src/returnTrendingGif.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTrendingGifs)\n/* harmony export */ });\nasync function getTrendingGifs() {\n  const imagesContainer = document.querySelector('.trending__images-container');\n  function errorHandler() {\n    if (document.querySelector('.trending__error-message') == null) {\n      const errorMsg = document.createElement('div');\n      errorMsg.classList.add('trending__error-message');\n      errorMsg.innerHTML = 'Oh no, something went snap!';\n      imagesContainer.append(errorMsg);\n    }\n  }\n  async function getTrendingGifs() {\n    try {\n      const res = await fetch(\"https://api.giphy.com/v1/gifs/trending?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&rating=g&limit=20\");\n      const data = await res.json();\n      const imgUrl = await data;\n      return imgUrl;\n    } catch {\n      errorHandler();\n    }\n  }\n  const urls = [];\n  const titles = [];\n  const result = await getTrendingGifs();\n  result.data.forEach(data => {\n    urls.push(data.images.downsized.url);\n    titles.push(data.title);\n  });\n  for (let i = 0; i < 20; i++) {\n    let img = document.createElement('img');\n    img.classList.add('gif');\n    img.src = urls[i];\n    img.alt = titles[i];\n    imagesContainer.append(img);\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/returnTrendingGif.js?");

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