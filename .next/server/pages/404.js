module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var public_images_e_commerce_404_404_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/images/e-commerce/404/404.png */ \"./public/images/e-commerce/404/404.png\");\n/* harmony import */ var public_images_e_commerce_404_404_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_404_404_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pages_error_Error_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/error/Error.module.scss */ \"./pages/error/Error.module.scss\");\n/* harmony import */ var pages_error_Error_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pages_error_Error_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var public_images_e_commerce_home_insta1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/images/e-commerce/home/insta1.png */ \"./public/images/e-commerce/home/insta1.png\");\n/* harmony import */ var public_images_e_commerce_home_insta1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_home_insta1_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var public_images_e_commerce_home_insta2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/images/e-commerce/home/insta2.png */ \"./public/images/e-commerce/home/insta2.png\");\n/* harmony import */ var public_images_e_commerce_home_insta2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_home_insta2_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var public_images_e_commerce_home_insta3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/images/e-commerce/home/insta3.png */ \"./public/images/e-commerce/home/insta3.png\");\n/* harmony import */ var public_images_e_commerce_home_insta3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_home_insta3_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var public_images_e_commerce_home_insta4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/images/e-commerce/home/insta4.png */ \"./public/images/e-commerce/home/insta4.png\");\n/* harmony import */ var public_images_e_commerce_home_insta4_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_home_insta4_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var public_images_e_commerce_home_insta5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! public/images/e-commerce/home/insta5.png */ \"./public/images/e-commerce/home/insta5.png\");\n/* harmony import */ var public_images_e_commerce_home_insta5_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_home_insta5_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var public_images_e_commerce_home_insta6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/images/e-commerce/home/insta6.png */ \"./public/images/e-commerce/home/insta6.png\");\n/* harmony import */ var public_images_e_commerce_home_insta6_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(public_images_e_commerce_home_insta6_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"/Users/michaeldaineka/Desktop/flatlogic/flatlogic-ecommerce/pages/404.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst Index = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, \"404\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    className: \"mb-5\",\n    style: {\n      marginTop: 32\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: pages_error_Error_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.error,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    className: \"h-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    className: \"h-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 29\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    sm: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 33\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    sm: 6,\n    className: \"d-flex flex-column justify-content-center align-items-start\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 33\n    }\n  }, __jsx(\"h3\", {\n    className: \"fw-bold text-primary mb-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 37\n    }\n  }, \"OOPS!\"), __jsx(\"h2\", {\n    className: \"fw-bold mb-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 37\n    }\n  }, \"Something\\u2019s Missing\"), __jsx(\"p\", {\n    style: {\n      width: 300\n    },\n    className: \"mb-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 37\n    }\n  }, \"Lorem Ipsum is simply dummy text of the printing and typesetting industry\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    outline: true,\n    color: \"primary\",\n    className: \"fw-bold\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 37\n    }\n  }, \"TAKE ME AWAY\"))))))), __jsx(\"section\", {\n    style: {\n      marginTop: 80,\n      marginBottom: 80\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"text-center fw-bold mb-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, \"Follow us on Instagram\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    className: \"no-gutters\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 2,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: public_images_e_commerce_home_insta1_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    className: \"w-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 2,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: public_images_e_commerce_home_insta2_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n    className: \"w-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 25\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 2,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: public_images_e_commerce_home_insta3_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    className: \"w-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 2,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: public_images_e_commerce_home_insta4_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    className: \"w-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 2,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: public_images_e_commerce_home_insta5_png__WEBPACK_IMPORTED_MODULE_8___default.a,\n    className: \"w-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 2,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: public_images_e_commerce_home_insta6_png__WEBPACK_IMPORTED_MODULE_9___default.a,\n    className: \"w-100\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 25\n    }\n  })))));\n};\n\nconst getStaticProps = () => {\n  return {\n    props: {}\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQuanM/YjhkYyJdLCJuYW1lcyI6WyJJbmRleCIsIm1hcmdpblRvcCIsInMiLCJlcnJvciIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiaW5zdGExIiwiaW5zdGEyIiwiaW5zdGEzIiwiaW5zdGE0IiwiaW5zdGE1IiwiaW5zdGE2IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFNBQ0ksbUVBQ0ksTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBRSxNQUFoQjtBQUF3QixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFQyxvRUFBQyxDQUFDQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFXLGFBQVMsRUFBRSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBRSxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVDLCtFQUFWO0FBQWtCLGFBQVMsRUFBRSxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FoQkosQ0FGSixDQWhDSixDQURKO0FBMERILENBM0REOztBQTZETyxNQUFNQyxjQUFjLEdBQUcsTUFBTTtBQUNoQyxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQURKLEdBQVA7QUFHSCxDQUpNO0FBTVFiLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvNDA0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBpbWcgZnJvbSBcInB1YmxpYy9pbWFnZXMvZS1jb21tZXJjZS80MDQvNDA0LnBuZ1wiO1xuaW1wb3J0IHMgZnJvbSBcInBhZ2VzL2Vycm9yL0Vycm9yLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgaW5zdGExIGZyb20gXCJwdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTEucG5nXCI7XG5pbXBvcnQgaW5zdGEyIGZyb20gXCJwdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTIucG5nXCI7XG5pbXBvcnQgaW5zdGEzIGZyb20gXCJwdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTMucG5nXCI7XG5pbXBvcnQgaW5zdGE0IGZyb20gXCJwdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTQucG5nXCI7XG5pbXBvcnQgaW5zdGE1IGZyb20gXCJwdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTUucG5nXCI7XG5pbXBvcnQgaW5zdGE2IGZyb20gXCJwdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTYucG5nXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+NDA0PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtcIm1iLTVcIn0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzLmVycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcImgtMTAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtcImgtMTAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fT48L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc209ezZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtcImZ3LWJvbGQgdGV4dC1wcmltYXJ5IG1iLTNcIn0+T09QUyE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17XCJmdy1ib2xkIG1iLTRcIn0+U29tZXRoaW5n4oCZcyBNaXNzaW5nPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0gY2xhc3NOYW1lPXtcIm1iLTVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzZXR0aW5nIGluZHVzdHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9e1wicHJpbWFyeVwifSBjbGFzc05hbWU9e1wiZnctYm9sZFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUtFIE1FIEFXQVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogODAsIG1hcmdpbkJvdHRvbTogODAgfX0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17XCJ0ZXh0LWNlbnRlciBmdy1ib2xkIG1iLTRcIn0+Rm9sbG93IHVzIG9uIEluc3RhZ3JhbTwvaDM+XG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e1wibm8tZ3V0dGVyc1wifT5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YTF9IGNsYXNzTmFtZT17XCJ3LTEwMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YTJ9IGNsYXNzTmFtZT17XCJ3LTEwMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YTN9IGNsYXNzTmFtZT17XCJ3LTEwMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YTR9IGNsYXNzTmFtZT17XCJ3LTEwMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YTV9IGNsYXNzTmFtZT17XCJ3LTEwMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YTZ9IGNsYXNzTmFtZT17XCJ3LTEwMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge31cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "./pages/error/Error.module.scss":
/*!***************************************!*\
  !*** ./pages/error/Error.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"error\": \"Error_error__2OVwf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcnJvci9FcnJvci5tb2R1bGUuc2Nzcz9jNDE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvZXJyb3IvRXJyb3IubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlcnJvclwiOiBcIkVycm9yX2Vycm9yX18yT1Z3ZlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/error/Error.module.scss\n");

/***/ }),

/***/ "./public/images/e-commerce/404/404.png":
/*!**********************************************!*\
  !*** ./public/images/e-commerce/404/404.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/404-28516c403ba615c9fe15a847859f23b0.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvNDA0LzQwNC5wbmc/ZmI1NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy9pbWFnZXMvZS1jb21tZXJjZS80MDQvNDA0LnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy80MDQtMjg1MTZjNDAzYmE2MTVjOWZlMTVhODQ3ODU5ZjIzYjAucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/images/e-commerce/404/404.png\n");

/***/ }),

/***/ "./public/images/e-commerce/home/insta1.png":
/*!**************************************************!*\
  !*** ./public/images/e-commerce/home/insta1.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/insta1-257de9330372d7fd8b9fe36fa72605f3.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTEucG5nPzkxMWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTEucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhMS0yNTdkZTkzMzAzNzJkN2ZkOGI5ZmUzNmZhNzI2MDVmMy5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/images/e-commerce/home/insta1.png\n");

/***/ }),

/***/ "./public/images/e-commerce/home/insta2.png":
/*!**************************************************!*\
  !*** ./public/images/e-commerce/home/insta2.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/insta2-269853030ca33b22fe2db3cc04d77b75.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTIucG5nP2EyMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTIucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhMi0yNjk4NTMwMzBjYTMzYjIyZmUyZGIzY2MwNGQ3N2I3NS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/images/e-commerce/home/insta2.png\n");

/***/ }),

/***/ "./public/images/e-commerce/home/insta3.png":
/*!**************************************************!*\
  !*** ./public/images/e-commerce/home/insta3.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/insta3-3950655e349158e7cc5dca24e69670a5.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTMucG5nPzgwNGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTMucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhMy0zOTUwNjU1ZTM0OTE1OGU3Y2M1ZGNhMjRlNjk2NzBhNS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/images/e-commerce/home/insta3.png\n");

/***/ }),

/***/ "./public/images/e-commerce/home/insta4.png":
/*!**************************************************!*\
  !*** ./public/images/e-commerce/home/insta4.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/insta4-830dc24f518ffa506a14bc8886954e77.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTQucG5nP2I1MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTQucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhNC04MzBkYzI0ZjUxOGZmYTUwNmExNGJjODg4Njk1NGU3Ny5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/images/e-commerce/home/insta4.png\n");

/***/ }),

/***/ "./public/images/e-commerce/home/insta5.png":
/*!**************************************************!*\
  !*** ./public/images/e-commerce/home/insta5.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/insta5-8a2e81310ffbd7ef72239fc290797cbb.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTUucG5nPzM3YTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTUucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhNS04YTJlODEzMTBmZmJkN2VmNzIyMzlmYzI5MDc5N2NiYi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/images/e-commerce/home/insta5.png\n");

/***/ }),

/***/ "./public/images/e-commerce/home/insta6.png":
/*!**************************************************!*\
  !*** ./public/images/e-commerce/home/insta6.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/insta6-cebf135036a9e613c319aaebbf36a717.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTYucG5nPzA1NDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2UtY29tbWVyY2UvaG9tZS9pbnN0YTYucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhNi1jZWJmMTM1MDM2YTllNjEzYzMxOWFhZWJiZjM2YTcxNy5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/images/e-commerce/home/insta6.png\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });