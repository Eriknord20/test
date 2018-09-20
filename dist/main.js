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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import * as tester from '../'\nfunction get(url, handler) {\n    var request = new XMLHttpRequest();\n    request.open(\"GET\", url, true);\n    request.onreadystatechange = function () {\n        console.log(request.readyState);\n        if (request.readyState == XMLHttpRequest.DONE) {\n            var contentType = request.getResponseHeader(\"Content-Type\");\n            if (contentType && contentType.includes(\"application/json\")) {\n                request = JSON.parse(request.responseText);\n                handler(request);\n                console.log(\"hej\");\n            }\n            else {\n                console.log(request.getResponseHeader(\"Content-Type\"));\n                console.log(\"då\");\n                handler(request.responseText);\n            }\n        }\n    };\n    request.send();\n}\nexports.get = get;\nfunction post(url, data, handler) {\n    var request = new XMLHttpRequest();\n    request.open(\"POST\", url, true);\n    request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n    request.onreadystatechange = function () {\n        console.log(request.readyState);\n        if (request.readyState == XMLHttpRequest.DONE) {\n            console.log(request);\n        }\n    };\n    console.log(\"heasdasdj\");\n    request.send(data);\n}\nexports.post = post;\nfunction makeList(data) {\n    console.log(data);\n    // Create the list element:\n    var list = document.createElement(\"ul\");\n    for (var i = 0; i < data.length; i++) {\n        // Create the list item:\n        var item = document.createElement(\"li\");\n        // Set its contents:\n        item.appendChild(document.createTextNode(data[i].username));\n        // Add it to the list:\n        list.appendChild(item);\n    }\n    document.body.appendChild(list);\n    console.log(list);\n    // Finally, return the constructed list:\n    return list;\n}\nexports.makeList = makeList;\n// export function postForm() {\n//     let form = document.createElement(\"form\");\n//     form.setAttribute(\"id\", \"postForm\");\n//     document.body.appendChild(form);\n//     let input = document.createElement(\"input\");\n//     input.setAttribute(\"value\", \"\");\n//     input.setAttribute(\"name\", \"url\");\n//     input.setAttribute(\"type\", \"text\");\n//     form.appendChild(input);\n//     let btn = document.createElement(\"button\");\n//     btn.innerText = \"postForm submit\";\n//     btn.setAttribute(\"onclick\", \"getPostUrl\");\n//     btn.setAttribute(\"form\", \"postForm\");\n//     btn.addEventListener(\"click\", () => {\n//         let postUrl = input.value;\n//         console.log(\"postUrl\");\n//         // tester.test(postUrl)\n//     });\n//     document.body.appendChild(btn);\n//     console.log(form);\n//     console.log(btn);\n//     return form;\n// }\n\n\n//# sourceURL=webpack:///./src/AJAX/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AJAX = __importStar(__webpack_require__(/*! ./AJAX */ \"./src/AJAX/index.ts\"));\nAJAX.post(\"http://localhost:3000/students\", JSON.stringify({\n    username: \"kalle\",\n    first_name: \"olof\",\n    last_name: \"olofsson\",\n    pwd: \"letmein\"\n}), function (response) {\n    console.log(response);\n});\nAJAX.get(\"http://localhost:3000/students\", function (response) {\n    console.log(response);\n    // let result = response.match(/((?<=\\[)(.*?)(?=\\])|\\[.*?\\])/)\n    // let result_of_result = response[0].replace(/(^\"|\"$)/,\"'\")\n    // console.log(result_of_result);\n    // let final_result = JSON.parse(result_of_result)\n    // console.log(final_result);\n    AJAX.makeList(response);\n    //   AJAX.postForm();\n});\n// function createUser() {\n//   let h1 = document.createElement(\"h1\");\n//   h1.innerText = \"create user\";\n//   document.body.appendChild(h1);\n//   let form = document.createElement(\"form\");\n//   form.setAttribute(\"id\", \"id_create\");\n//   document.body.appendChild(form);\n//   let input1 = document.createElement(\"input\");\n//   input1.setAttribute(\"type\", \"text\");\n//   input1.setAttribute(\"name\", \"username\");\n//   input1.placeholder = \"username\";\n//   let input2 = document.createElement(\"input\");\n//   input2.setAttribute(\"type\", \"text\");\n//   input2.setAttribute(\"name\", \"first_name\");\n//   input2.placeholder = \"first name\";\n//   let input3 = document.createElement(\"input\");\n//   input3.setAttribute(\"type\", \"text\");\n//   input3.setAttribute(\"name\", \"last_name\");\n//   input3.placeholder = \"last name\";\n//   let input4 = document.createElement(\"input\");\n//   input4.setAttribute(\"type\", \"password\");\n//   input4.setAttribute(\"name\", \"pwd\");\n//   input4.placeholder = \"password\";\n//   let data = new FormData(form);\n//   form.appendChild(input1);\n//   form.appendChild(input2);\n//   form.appendChild(input3);\n//   form.appendChild(input4);\n//   let button = document.createElement(\"button\");\n//   button.setAttribute(\"type\", \"submit\");\n//   button.setAttribute(\"form\", \"id_create\");\n//   button.innerText = \"button\";\n//   form.appendChild(button);\n//   button.onclick = () => {\n//     AJAX.post(\n//       \"http://localhost:3000/students/create\",\n//       data,\n//       (response: any) => {\n//         console.log(response);\n//       }\n//     );\n//   };\n// }\n// https://reqres.in/api/users\n// export function test(url:any) {\n//     console.log(url)\n// }\n// let request = new XMLHttpRequest()\n// request.open(\"GET\", \"http://localhost:4567/stuff\", true)\n// request.onreadystatechange = function(){\n//     console.log(request.readyState)\n//     if(request.readyState == XMLHttpRequest.DONE){\n//         console.log(request.responseText)\n//     }\n// }\n// request.send()\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });