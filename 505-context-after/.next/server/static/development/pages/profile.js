module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ThemeContext.js":
/*!************************************!*\
  !*** ./components/ThemeContext.js ***!
  \************************************/
/*! exports provided: ThemeProvider, ThemeConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/themes */ "./lib/themes.js");
var _jsxFileName = "C:\\w\\www\\git\\app-tester\\react-505-context\\components\\ThemeContext.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _React$createContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ThemeProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ThemeProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      theme: _lib_themes__WEBPACK_IMPORTED_MODULE_1__["default"][0]
    });

    return _this;
  }

  _createClass(ThemeProvider, [{
    key: "onThemeChange",
    value: function onThemeChange(name) {
      this.setState({
        theme: _lib_themes__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (theme) {
          return theme.name === name;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, {
        value: {
          theme: this.state.theme,
          onThemeChange: function onThemeChange(e) {
            return _this2.onThemeChange(e.target.value);
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/UserContext.js":
/*!***********************************!*\
  !*** ./components/UserContext.js ***!
  \***********************************/
/*! exports provided: UserProvider, UserConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConsumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\w\\www\\git\\app-tester\\react-505-context\\components\\UserContext.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _React$createContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var UserProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserProvider, _React$Component);

  function UserProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      user: {
        name: 'Peter',
        email: 'pete@aol.com',
        updating: false
      }
    });

    return _this;
  }

  _createClass(UserProvider, [{
    key: "toggleUpdate",
    value: function toggleUpdate() {
      this.setState({
        user: _objectSpread({}, this.state.user, {
          updating: !this.state.user.updating
        })
      });
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(e) {
      e.preventDefault();
      var form = e.target;
      var data = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = form.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          if (element.name === '') {
            continue;
          }

          data[element.name] = element.value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState({
        user: {
          name: data.userName,
          email: data.userEmail,
          updating: false
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, {
        value: {
          user: this.state.user,
          toggleUpdate: function toggleUpdate() {
            return _this2.toggleUpdate();
          },
          handleUpdate: function handleUpdate(e) {
            return _this2.handleUpdate(e);
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return UserProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./lib/themes.js":
/*!***********************!*\
  !*** ./lib/themes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var themes = [{
  name: 'light',
  label: 'Light',
  textColor: '#1F1F1F',
  headerColor: '#F0F0F0',
  bodyColor: '#FFF'
}, {
  name: 'dark',
  label: 'Night Mode',
  textColor: '#cfcfcf',
  headerColor: '#1F1F1F',
  bodyColor: '#000000'
}, {
  name: 'clown',
  label: 'Clown Mode',
  textColor: '#43cf0e',
  headerColor: '#ca1a31',
  bodyColor: '#0b09ff'
}];
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/themes */ "./lib/themes.js");
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserContext */ "./components/UserContext.js");
/* harmony import */ var _components_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ThemeContext */ "./components/ThemeContext.js");
var _jsxFileName = "C:\\w\\www\\git\\app-tester\\react-505-context\\pages\\profile.js";






var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["ThemeConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var theme = _ref.theme,
        onThemeChange = _ref.onThemeChange;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserContext__WEBPACK_IMPORTED_MODULE_3__["UserConsumer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, function (_ref2) {
      var user = _ref2.user,
          toggleUpdate = _ref2.toggleUpdate,
          handleUpdate = _ref2.handleUpdate;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, user.name, "'s Profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-561934841" + " " + "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-561934841" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Contact Information"), user.updating ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: handleUpdate,
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Name: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        name: "userName",
        defaultValue: user.name,
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Email: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        name: "userEmail",
        defaultValue: user.email,
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Save",
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, user.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, user.email)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: toggleUpdate,
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Update"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-561934841" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "theme-select",
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Theme:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        id: "theme-select",
        value: theme.name,
        onChange: onThemeChange,
        className: "jsx-561934841",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, _lib_themes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (aTheme) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: "theme-".concat(aTheme.name),
          value: aTheme.name,
          className: "jsx-561934841",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, aTheme.label);
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "561934841",
        css: "select.jsx-561934841{font-size:.9rem;padding:2px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3XFx3d3dcXGdpdFxcYXBwLXRlc3RlclxccmVhY3QtNTA1LWNvbnRleHRcXHBhZ2VzXFxwcm9maWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ed0IsQUFHaUMsZ0JBQ0EsZ0JBQ2xCIiwiZmlsZSI6IkM6XFx3XFx3d3dcXGdpdFxcYXBwLXRlc3RlclxccmVhY3QtNTA1LWNvbnRleHRcXHBhZ2VzXFxwcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lcyBmcm9tICcuLi9saWIvdGhlbWVzJ1xyXG5pbXBvcnQgeyBVc2VyQ29uc3VtZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQ29udGV4dFwiXHJcbmltcG9ydCB7IFRoZW1lQ29uc3VtZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaGVtZUNvbnRleHRcIlxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IChcclxuICA8VGhlbWVDb25zdW1lcj5cclxuICAgIHsoe3RoZW1lLCBvblRoZW1lQ2hhbmdlfSkgPT4gKFxyXG4gICAgICA8VXNlckNvbnN1bWVyPlxyXG4gICAgICAgIHsoe3VzZXIsIHRvZ2dsZVVwZGF0ZSwgaGFuZGxlVXBkYXRlfSkgPT4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDE+e3VzZXIubmFtZX0ncyBQcm9maWxlPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvbnRhY3QgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIudXBkYXRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVXBkYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBkZWZhdWx0VmFsdWU9e3VzZXIubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWw6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyRW1haWxcIiBkZWZhdWx0VmFsdWU9e3VzZXIuZW1haWx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTYXZlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVVcGRhdGV9PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5TZXR0aW5nczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRoZW1lLXNlbGVjdFwiPlRoZW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPSd0aGVtZS1zZWxlY3QnIHZhbHVlPXt0aGVtZS5uYW1lfSBvbkNoYW5nZT17b25UaGVtZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGVtZXMubWFwKGFUaGVtZSA9PiA8b3B0aW9uIGtleT17YHRoZW1lLSR7YVRoZW1lLm5hbWV9YH0gdmFsdWU9e2FUaGVtZS5uYW1lfT57YVRoZW1lLmxhYmVsfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvVXNlckNvbnN1bWVyPlxyXG4gICAgKX1cclxuICA8L1RoZW1lQ29uc3VtZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuIl19 */\n/*@ sourceURL=C:\\w\\www\\git\\app-tester\\react-505-context\\pages\\profile.js */",
        __self: this
      }));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/profile.js */"./pages/profile.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map