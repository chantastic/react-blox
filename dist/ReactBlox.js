(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactBlox"] = factory(require("React"));
	else
		root["ReactBlox"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  Box: __webpack_require__(1)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Box = function Box(_ref) {
	  var boxSizing = _ref.boxSizing;
	  var boxShadow = _ref.boxShadow;
	  var border = _ref.border;
	  var borderTop = _ref.borderTop;
	  var borderRight = _ref.borderRight;
	  var borderBottom = _ref.borderBottom;
	  var borderLeft = _ref.borderLeft;
	  var height = _ref.height;
	  var margin = _ref.margin;
	  var marginTop = _ref.marginTop;
	  var marginRight = _ref.marginRight;
	  var marginBottom = _ref.marginBottom;
	  var marginLeft = _ref.marginLeft;
	  var maxHeight = _ref.maxHeight;
	  var maxWidth = _ref.maxWidth;
	  var minHeight = _ref.minHeight;
	  var minWidth = _ref.minWidth;
	  var outline = _ref.outline;
	  var overflow = _ref.overflow;
	  var overflowX = _ref.overflowX;
	  var overflowY = _ref.overflowY;
	  var padding = _ref.padding;
	  var paddingTop = _ref.paddingTop;
	  var paddingRight = _ref.paddingRight;
	  var paddingBottom = _ref.paddingBottom;
	  var paddingLeft = _ref.paddingLeft;
	  var visibility = _ref.visibility;
	  var width = _ref.width;
	  var style = _ref.style;

	  var props = _objectWithoutProperties(_ref, ["boxSizing", "boxShadow", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "height", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "maxHeight", "maxWidth", "minHeight", "minWidth", "outline", "overflow", "overflowX", "overflowY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "visibility", "width", "style"]);

	  return _react2.default.createElement("div", _extends({}, props, {
	    style: _extends({}, style, {

	      /* borders are niave right now. it's complicated */
	      borderTop: borderTop || border,
	      borderRight: borderRight || border,
	      borderBottom: borderBottom || border,
	      borderLeft: borderLeft || border,

	      boxSizing: boxSizing,
	      boxShadow: boxShadow,

	      height: height,

	      marginTop: marginTop || margin,
	      marginRight: marginRight || margin,
	      marginBottom: marginBottom || margin,
	      marginLeft: marginLeft || margin,

	      maxHeight: maxHeight,
	      maxWidth: maxWidth,

	      minHeight: minHeight,
	      minWidth: minWidth,

	      outline: outline,

	      overflowX: overflowX || overflow,
	      overflowY: overflowY || overflow,

	      paddingTop: paddingTop || padding,
	      paddingRight: paddingRight || padding,
	      paddingBottom: paddingBottom || padding,
	      paddingLeft: paddingLeft || padding,

	      visibility: visibility,

	      width: width
	    })
	  }));
	};

	module.exports = Box;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;