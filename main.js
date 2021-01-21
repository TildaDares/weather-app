/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("function searchListener() {\r\n\tdocument\r\n\t\t.querySelector(\".search-btn\")\r\n\t\t.addEventListener(\"click\", getCityWeather);\r\n}\r\n\r\nfunction getCityWeather() {\r\n\tconst searchText = document.querySelector(\".search-text\").value;\r\n\tif (searchText !== '') {\r\n\t\tconsole.log(searchText);\r\n\t}\r\n}\r\n\r\nsearchListener();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");
/******/ })()
;