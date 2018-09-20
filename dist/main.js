/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AJAX/index.ts":
/*!***************************!*\
  !*** ./src/AJAX/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import * as tester from '../'\nfunction get(url, handler) {\n    var request = new XMLHttpRequest();\n    request.open(\"GET\", url, true);\n    request.onreadystatechange = function () {\n        console.log(request.readyState);\n        if (request.readyState == XMLHttpRequest.DONE) {\n            if (request.getResponseHeader(\"Content-Type\") == \"application/json\") {\n                request = JSON.parse(request.responseText);\n                handler(request);\n                console.log(\"hej\");\n            }\n            else {\n                console.log(\"då\");\n                handler(request.responseText);\n            }\n        }\n    };\n    request.send();\n}\nexports.get = get;\nfunction post(url, data, handler) {\n    var request = new XMLHttpRequest();\n    request.open(\"POST\", url, true);\n    request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n    request.onreadystatechange = function () {\n        console.log(request.readyState);\n        if (request.readyState == XMLHttpRequest.DONE) {\n            console.log(request.responseText);\n        }\n    };\n    request.send(data);\n}\nexports.post = post;\nfunction makeList(data) {\n    var jsonList = JSON.parse(data);\n    console.log(jsonList);\n    // Create the list element:\n    var list = document.createElement('ul');\n    for (var i = 0; i < jsonList.length; i++) {\n        // Create the list item:\n        var item = document.createElement('li');\n        // Set its contents:\n        item.appendChild(document.createTextNode(jsonList[i].username));\n        // Add it to the list:\n        list.appendChild(item);\n    }\n    document.body.appendChild(list);\n    console.log(list);\n    // Finally, return the constructed list:\n    return list;\n}\nexports.makeList = makeList;\nfunction postForm() {\n    var form = document.createElement('form');\n    form.setAttribute('id', 'postForm');\n    document.body.appendChild(form);\n    var input = document.createElement('input');\n    input.setAttribute('value', '');\n    input.setAttribute('name', 'url');\n    input.setAttribute('type', 'text');\n    form.appendChild(input);\n    var btn = document.createElement('button');\n    btn.innerText = 'postForm submit';\n    btn.setAttribute('onclick', 'getPostUrl');\n    btn.setAttribute('form', 'postForm');\n    btn.addEventListener(\"click\", function () {\n        var postUrl = input.value;\n        console.log(\"postUrl\");\n        // tester.test(postUrl)\n    });\n    document.body.appendChild(btn);\n    console.log(form);\n    console.log(btn);\n    return form;\n}\nexports.postForm = postForm;\nvar div = document.createElement(\"div\");\ndocument.body.appendChild(div);\ndiv.setAttribute('id', 'divTest');\nvar divTest = document.getElementById(\"divTest\");\n\n\n//# sourceURL=webpack:///./src/AJAX/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AJAX = __importStar(__webpack_require__(/*! ./AJAX */ \"./src/AJAX/index.ts\"));\nAJAX.get(\"http://localhost:3000/students\", function (response) {\n    console.log(response);\n    // let result = response.match(/((?<=\\[)(.*?)(?=\\])|\\[.*?\\])/)\n    // let result_of_result = response[0].replace(/(^\"|\"$)/,\"'\")\n    // console.log(result_of_result);\n    // let final_result = JSON.parse(result_of_result)\n    // console.log(final_result);\n    AJAX.makeList(response);\n    // AJAX.postForm()\n});\nvar button = document.createElement(\"button\");\nbutton.innerText = \"Students\";\ndocument.body.appendChild(button);\ndocument.querySelector(\"#divTest\").appendChild(button);\nbutton.onclick = function () {\n    AJAX.get(\"http://localhost:3000/students/list\", function (response) {\n        console.log(response);\n    });\n};\n// export function test(url:any) {\n//     console.log(url)\n// }\nvar data = \"omg=13&foo=1000\";\n// https://reqres.in/api/users\n// AJAX.post(, data, (response:any) => {\n// })\n// let request = new XMLHttpRequest()\n// request.open(\"GET\", \"http://localhost:4567/stuff\", true)\n// request.onreadystatechange = function(){\n//     console.log(request.readyState)\n//     if(request.readyState == XMLHttpRequest.DONE){\n//         console.log(request.responseText)\n//     }\n// }\n// request.send()git te\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });