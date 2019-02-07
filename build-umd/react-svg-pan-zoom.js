(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactSVGPanZoom"] = factory(require("react"), require("prop-types"));
	else
		root["ReactSVGPanZoom"] = factory(root["React"], root["PropTypes"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_VALUE = exports.ALIGN_BOTTOM = exports.ALIGN_TOP = exports.ALIGN_RIGHT = exports.ALIGN_LEFT = exports.ALIGN_CENTER = exports.ACTION_PAN = exports.ACTION_ZOOM = exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.POSITION_RIGHT = exports.POSITION_TOP = exports.POSITION_NONE = exports.TOOL_ZOOM_OUT = exports.TOOL_ZOOM_IN = exports.TOOL_PAN = exports.TOOL_NONE = exports.TOOL_AUTO = exports.MODE_ZOOMING = exports.MODE_PANNING = exports.MODE_IDLE = void 0;
var MODE_IDLE = 'idle';
exports.MODE_IDLE = MODE_IDLE;
var MODE_PANNING = 'panning';
exports.MODE_PANNING = MODE_PANNING;
var MODE_ZOOMING = 'zooming';
exports.MODE_ZOOMING = MODE_ZOOMING;
var TOOL_AUTO = 'auto';
exports.TOOL_AUTO = TOOL_AUTO;
var TOOL_NONE = 'none';
exports.TOOL_NONE = TOOL_NONE;
var TOOL_PAN = 'pan';
exports.TOOL_PAN = TOOL_PAN;
var TOOL_ZOOM_IN = 'zoom-in';
exports.TOOL_ZOOM_IN = TOOL_ZOOM_IN;
var TOOL_ZOOM_OUT = 'zoom-out';
exports.TOOL_ZOOM_OUT = TOOL_ZOOM_OUT;
var POSITION_NONE = 'none';
exports.POSITION_NONE = POSITION_NONE;
var POSITION_TOP = 'top';
exports.POSITION_TOP = POSITION_TOP;
var POSITION_RIGHT = 'right';
exports.POSITION_RIGHT = POSITION_RIGHT;
var POSITION_BOTTOM = 'bottom';
exports.POSITION_BOTTOM = POSITION_BOTTOM;
var POSITION_LEFT = 'left';
exports.POSITION_LEFT = POSITION_LEFT;
var ACTION_ZOOM = 'zoom';
exports.ACTION_ZOOM = ACTION_ZOOM;
var ACTION_PAN = 'pan';
exports.ACTION_PAN = ACTION_PAN;
var ALIGN_CENTER = 'center';
exports.ALIGN_CENTER = ALIGN_CENTER;
var ALIGN_LEFT = 'left';
exports.ALIGN_LEFT = ALIGN_LEFT;
var ALIGN_RIGHT = 'right';
exports.ALIGN_RIGHT = ALIGN_RIGHT;
var ALIGN_TOP = 'top';
exports.ALIGN_TOP = ALIGN_TOP;
var ALIGN_BOTTOM = 'bottom';
exports.ALIGN_BOTTOM = ALIGN_BOTTOM;
var INITIAL_VALUE = {};
exports.INITIAL_VALUE = INITIAL_VALUE;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultValue = getDefaultValue;
exports.set = set;
exports.isValueValid = isValueValid;
exports.getSVGPoint = getSVGPoint;
exports.decompose = decompose;
exports.setFocus = setFocus;
exports.setViewerSize = setViewerSize;
exports.setSVGSize = setSVGSize;
exports.setZoomLevels = setZoomLevels;
exports.setPointOnViewerCenter = setPointOnViewerCenter;
exports.reset = reset;
exports.resetMode = resetMode;

var _constants = __webpack_require__(1);

var _transformationMatrix = __webpack_require__(4);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Obtain default value
 * @returns {Object}
 */
function getDefaultValue(viewerWidth, viewerHeight, SVGWidth, SVGHeight, scaleFactorMin, scaleFactorMax) {
  return set({}, _objectSpread({}, (0, _transformationMatrix.identity)(), {
    version: 2,
    mode: _constants.MODE_IDLE,
    focus: false,
    pinchPointDistance: null,
    prePinchMode: null,
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight,
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight,
    scaleFactorMin: scaleFactorMin,
    scaleFactorMax: scaleFactorMax,
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    miniatureOpen: true,
    lastAction: null
  }));
}
/**
 * Change value
 * @param value
 * @param change
 * @param action
 * @returns {Object}
 */


function set(value, change) {
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  value = Object.assign({}, value, change, {
    lastAction: action
  });
  return Object.freeze(value);
}
/**
 * value valid check
 * @param value
 */


function isValueValid(value) {
  return value !== null && _typeof(value) === 'object' && value.hasOwnProperty('version');
}
/**
 * Export x,y coords relative to SVG
 * @param value
 * @param viewerX
 * @param viewerY
 * @returns {*|{x, y}|{x: number, y: number}}
 */


function getSVGPoint(value, viewerX, viewerY) {
  var matrix = (0, _transformationMatrix.fromObject)(value);
  var inverseMatrix = (0, _transformationMatrix.inverse)(matrix);
  return (0, _transformationMatrix.applyToPoint)(inverseMatrix, {
    x: viewerX,
    y: viewerY
  });
}
/**
 * Decompose matrix from value
 * @param value
 * @returns {{scaleFactor: number, translationX: number, translationY: number}}
 */


function decompose(value) {
  var matrix = (0, _transformationMatrix.fromObject)(value);
  return {
    scaleFactor: matrix.a,
    translationX: matrix.e,
    translationY: matrix.f
  };
}
/**
 *
 * @param value
 * @param focus
 * @returns {Object}
 */


function setFocus(value, focus) {
  return set(value, {
    focus: focus
  });
}
/**
 *
 * @param value
 * @param viewerWidth
 * @param viewerHeight
 * @returns {Object}
 */


function setViewerSize(value, viewerWidth, viewerHeight) {
  return set(value, {
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight
  });
}
/**
 *
 * @param value
 * @param SVGWidth
 * @param SVGHeight
 * @returns {Object}
 */


function setSVGSize(value, SVGWidth, SVGHeight) {
  return set(value, {
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight
  });
}
/**
 *
 * @param value
 * @param scaleFactorMin
 * @param scaleFactorMax
 * @returns {Object}
 */


function setZoomLevels(value, scaleFactorMin, scaleFactorMax) {
  return set(value, {
    scaleFactorMin: scaleFactorMin,
    scaleFactorMax: scaleFactorMax
  });
}
/**
 *
 * @param value
 * @param SVGPointX
 * @param SVGPointY
 * @param zoomLevel
 * @returns {Object}
 */


function setPointOnViewerCenter(value, SVGPointX, SVGPointY, zoomLevel) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.translate)(-SVGPointX + viewerWidth / 2, -SVGPointY + viewerHeight / 2), //4
  (0, _transformationMatrix.translate)(SVGPointX, SVGPointY), //3
  (0, _transformationMatrix.scale)(zoomLevel, zoomLevel), //2
  (0, _transformationMatrix.translate)(-SVGPointX, -SVGPointY) //1
  );
  return set(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, matrix));
}
/**
 *
 * @param value
 * @returns {Object}
 */


function reset(value) {
  return set(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, (0, _transformationMatrix.identity)()));
}
/**
 *
 * @param value
 * @returns {Object}
 */


function resetMode(value) {
  return set(value, {
    mode: _constants.MODE_IDLE,
    startX: null,
    startY: null,
    endX: null,
    endY: null
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(r,n){ true?module.exports=n():undefined}(window,function(){return function(r){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)t.d(e,o,function(n){return r[n]}.bind(null,o));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s=0)}([function(r,n,t){"use strict";function e(r,n){return Array.isArray(n)?[r.a*n[0]+r.c*n[1]+r.e,r.b*n[0]+r.d*n[1]+r.f]:{x:r.a*n.x+r.c*n.y+r.e,y:r.b*n.x+r.d*n.y+r.f}}function o(r,n){return n.map(function(n){return e(r,n)})}function u(r){return{a:parseFloat(r.a),b:parseFloat(r.b),c:parseFloat(r.c),d:parseFloat(r.d),e:parseFloat(r.e),f:parseFloat(r.f)}}t.r(n);var a=/^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i;function i(r){var n=r.match(a);if(null===n||n.length<7)throw new Error("'"+r+"' is not a matrix");return{a:parseFloat(n[1]),b:parseFloat(n[2]),c:parseFloat(n[3]),d:parseFloat(n[4]),e:parseFloat(n[5]),f:parseFloat(n[6])}}function f(){return{a:1,c:0,e:0,b:0,d:1,f:0}}function c(r){var n=r.a,t=r.b,e=r.c,o=r.d,u=r.e,a=r.f,i=n*o-t*e;return{a:o/i,b:t/-i,c:e/-i,d:n/i,e:(o*u-e*a)/-i,f:(t*u-n*a)/i}}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s=function(r){return"number"==typeof r&&!isNaN(r)&&isFinite(r)},l=function(r){return null!=r&&"object"===(void 0===r?"undefined":d(r))};function p(r){return l(r)&&r.hasOwnProperty("a")&&s(r.a)&&r.hasOwnProperty("b")&&s(r.b)&&r.hasOwnProperty("c")&&s(r.c)&&r.hasOwnProperty("d")&&s(r.d)&&r.hasOwnProperty("e")&&s(r.e)&&r.hasOwnProperty("f")&&s(r.f)}function y(r){return void 0===r}function b(r){return{a:1,c:0,e:r,b:0,d:1,f:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}}function v(){for(var r=arguments.length,n=Array(r),t=0;t<r;t++)n[t]=arguments[t];var e=function(r,n){return{a:r.a*n.a+r.c*n.b,c:r.a*n.c+r.c*n.d,e:r.a*n.e+r.c*n.f+r.e,b:r.b*n.a+r.d*n.b,d:r.b*n.c+r.d*n.d,f:r.b*n.e+r.d*n.f+r.f}};switch((n=Array.isArray(n[0])?n[0]:n).length){case 0:throw new Error("no matrices provided");case 1:return n[0];case 2:return e(n[0],n[1]);default:var o=function(r){return Array.isArray(r)?r:Array.from(r)}(n),u=o[0],a=o[1],i=o.slice(2),f=e(u,a);return v.apply(void 0,[f].concat(function(r){if(Array.isArray(r)){for(var n=0,t=Array(r.length);n<r.length;n++)t[n]=r[n];return t}return Array.from(r)}(i)))}}function m(){return v.apply(void 0,arguments)}var h=Math.cos,x=Math.sin,g=Math.PI;function w(r,n,t){var e=h(r),o=x(r),u={a:e,c:-o,e:0,b:o,d:e,f:0};return y(n)||y(t)?u:v([b(n,t),u,b(-n,-t)])}function P(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return w(r*g/180,n,t)}function S(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return y(n)&&(n=r),{a:r,c:0,e:0,b:0,d:n,f:0}}function O(r,n){return{a:1,c:r,e:0,b:n,d:1,f:0}}var A=Math.tan;function F(r,n){return{a:1,c:A(r),e:0,b:A(n),d:1,f:0}}function M(r,n){return F(r*Math.PI/180,n*Math.PI/180)}function j(r){return T(r)}function _(r){return T(r)}function T(r){return"matrix("+r.a+","+r.b+","+r.c+","+r.d+","+r.e+","+r.f+")"}t.d(n,"applyToPoint",function(){return e}),t.d(n,"applyToPoints",function(){return o}),t.d(n,"fromObject",function(){return u}),t.d(n,"fromString",function(){return i}),t.d(n,"identity",function(){return f}),t.d(n,"inverse",function(){return c}),t.d(n,"isAffineMatrix",function(){return p}),t.d(n,"rotate",function(){return w}),t.d(n,"rotateDEG",function(){return P}),t.d(n,"scale",function(){return S}),t.d(n,"shear",function(){return O}),t.d(n,"skew",function(){return F}),t.d(n,"skewDEG",function(){return M}),t.d(n,"toCSS",function(){return j}),t.d(n,"toSVG",function(){return _}),t.d(n,"toString",function(){return T}),t.d(n,"transform",function(){return v}),t.d(n,"compose",function(){return m}),t.d(n,"translate",function(){return b})}])});
//# sourceMappingURL=transformation-matrix.min.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isZoomLevelGoingOutOfBounds = isZoomLevelGoingOutOfBounds;
exports.limitZoomLevel = limitZoomLevel;
exports.zoom = zoom;
exports.fitSelection = fitSelection;
exports.fitToViewer = fitToViewer;
exports.zoomOnViewerCenter = zoomOnViewerCenter;
exports.startZooming = startZooming;
exports.updateZooming = updateZooming;
exports.stopZooming = stopZooming;

var _transformationMatrix = __webpack_require__(4);

var _constants = __webpack_require__(1);

var _common = __webpack_require__(3);

var _calculateBox = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function lessThanScaleFactorMin(value, scaleFactor) {
  return value.scaleFactorMin && value.d * scaleFactor <= value.scaleFactorMin;
}

function moreThanScaleFactorMax(value, scaleFactor) {
  return value.scaleFactorMax && value.d * scaleFactor >= value.scaleFactorMax;
}

function isZoomLevelGoingOutOfBounds(value, scaleFactor) {
  return lessThanScaleFactorMin(value, scaleFactor) && scaleFactor < 1 || moreThanScaleFactorMax(value, scaleFactor) && scaleFactor > 1;
}

function limitZoomLevel(value, matrix) {
  var scaleLevel = matrix.a;

  if (value.scaleFactorMin != null) {
    // limit minimum zoom
    scaleLevel = Math.max(scaleLevel, value.scaleFactorMin);
  }

  if (value.scaleFactorMax != null) {
    // limit maximum zoom
    scaleLevel = Math.min(scaleLevel, value.scaleFactorMax);
  }

  return (0, _common.set)(matrix, {
    a: scaleLevel,
    d: scaleLevel
  });
}

function zoom(value, SVGPointX, SVGPointY, scaleFactor) {
  if (isZoomLevelGoingOutOfBounds(value, scaleFactor)) {
    // Do not change translation and scale of value
    return value;
  }

  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.fromObject)(value), (0, _transformationMatrix.translate)(SVGPointX, SVGPointY), (0, _transformationMatrix.scale)(scaleFactor, scaleFactor), (0, _transformationMatrix.translate)(-SVGPointX, -SVGPointY));
  return (0, _common.set)(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), _constants.ACTION_ZOOM);
}

function fitSelection(value, selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var scaleX = viewerWidth / selectionWidth;
  var scaleY = viewerHeight / selectionHeight;
  var scaleLevel = Math.min(scaleX, scaleY);
  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.scale)(scaleLevel, scaleLevel), //2
  (0, _transformationMatrix.translate)(-selectionSVGPointX, -selectionSVGPointY) //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return (0, _common.set)(value, {
      mode: _constants.MODE_IDLE,
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }

  return (0, _common.set)(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), _constants.ACTION_ZOOM);
}

function fitToViewer(value) {
  var SVGAlignX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.ALIGN_LEFT;
  var SVGAlignY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.ALIGN_TOP;
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight,
      SVGWidth = value.SVGWidth,
      SVGHeight = value.SVGHeight;
  var scaleX = viewerWidth / SVGWidth;
  var scaleY = viewerHeight / SVGHeight;
  var scaleLevel = Math.min(scaleX, scaleY);
  var scaleMatrix = (0, _transformationMatrix.scale)(scaleLevel, scaleLevel);
  var translationMatrix = (0, _transformationMatrix.translate)(0, 0); // after fitting, SVG and the viewer will match in width (1) or in height (2)

  if (scaleX < scaleY) {
    //(1) match in width, meaning scaled SVGHeight <= viewerHeight
    var remainderY = viewerHeight - scaleX * SVGHeight;
    if (SVGAlignY === _constants.ALIGN_CENTER) translationMatrix = (0, _transformationMatrix.translate)(0, Math.round(remainderY / 2));
    if (SVGAlignY === _constants.ALIGN_BOTTOM) translationMatrix = (0, _transformationMatrix.translate)(0, remainderY);
  } else {
    //(2) match in height, meaning scaled SVGWidth <= viewerWidth
    var remainderX = viewerWidth - scaleY * SVGWidth;
    if (SVGAlignX === _constants.ALIGN_CENTER) translationMatrix = (0, _transformationMatrix.translate)(Math.round(remainderX / 2), 0);
    if (SVGAlignX === _constants.ALIGN_RIGHT) translationMatrix = (0, _transformationMatrix.translate)(remainderX, 0);
  }

  var matrix = (0, _transformationMatrix.transform)(translationMatrix, //2
  scaleMatrix //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return (0, _common.set)(value, {
      mode: _constants.MODE_IDLE,
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }

  return (0, _common.set)(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, limitZoomLevel(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), _constants.ACTION_ZOOM);
}

function zoomOnViewerCenter(value, scaleFactor) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var SVGPoint = (0, _common.getSVGPoint)(value, viewerWidth / 2, viewerHeight / 2);
  return zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor);
}

function startZooming(value, viewerX, viewerY) {
  return (0, _common.set)(value, {
    mode: _constants.MODE_ZOOMING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  });
}

function updateZooming(value, viewerX, viewerY) {
  if (value.mode !== _constants.MODE_ZOOMING) throw new Error('update selection not allowed in this mode ' + value.mode);
  return (0, _common.set)(value, {
    endX: viewerX,
    endY: viewerY
  });
}

function stopZooming(value, viewerX, viewerY, scaleFactor, props) {
  var startX = value.startX,
      startY = value.startY,
      endX = value.endX,
      endY = value.endY;
  var start = (0, _common.getSVGPoint)(value, startX, startY);
  var end = (0, _common.getSVGPoint)(value, endX, endY);

  if (Math.abs(startX - endX) > 7 && Math.abs(startY - endY) > 7) {
    var box = (0, _calculateBox.default)(start, end);
    return fitSelection(value, box.x, box.y, box.width, box.height);
  } else {
    var SVGPoint = (0, _common.getSVGPoint)(value, viewerX, viewerY);
    return zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pan = pan;
exports.startPanning = startPanning;
exports.updatePanning = updatePanning;
exports.stopPanning = stopPanning;
exports.autoPanIfNeeded = autoPanIfNeeded;

var _constants = __webpack_require__(1);

var _common = __webpack_require__(3);

var _transformationMatrix = __webpack_require__(4);

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * @param value
 * @param SVGDeltaX
 * @param SVGDeltaY
 * @param panLimit
 * @returns {Object}
 */
function pan(value, SVGDeltaX, SVGDeltaY) {
  var panLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.fromObject)(value), //2
  (0, _transformationMatrix.translate)(SVGDeltaX, SVGDeltaY) //1
  ); // apply pan limits

  if (panLimit) {
    var _applyToPoints = (0, _transformationMatrix.applyToPoints)(matrix, [{
      x: panLimit,
      y: panLimit
    }, {
      x: value.SVGWidth - panLimit,
      y: value.SVGHeight - panLimit
    }]),
        _applyToPoints2 = _slicedToArray(_applyToPoints, 2),
        _applyToPoints2$ = _applyToPoints2[0],
        x1 = _applyToPoints2$.x,
        y1 = _applyToPoints2$.y,
        _applyToPoints2$2 = _applyToPoints2[1],
        x2 = _applyToPoints2$2.x,
        y2 = _applyToPoints2$2.y; //x limit


    var moveX = 0;
    if (value.viewerWidth - x1 < 0) moveX = value.viewerWidth - x1;else if (x2 < 0) moveX = -x2; //y limit

    var moveY = 0;
    if (value.viewerHeight - y1 < 0) moveY = value.viewerHeight - y1;else if (y2 < 0) moveY = -y2; //apply limits

    matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.translate)(moveX, moveY), matrix);
  }

  return (0, _common.set)(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, matrix), _constants.ACTION_PAN);
}

function startPanning(value, viewerX, viewerY) {
  return (0, _common.set)(value, {
    mode: _constants.MODE_PANNING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  }, _constants.ACTION_PAN);
}

function updatePanning(value, viewerX, viewerY, panLimit) {
  if (value.mode !== _constants.MODE_PANNING) throw new Error('update pan not allowed in this mode ' + value.mode);
  var endX = value.endX,
      endY = value.endY;
  var start = (0, _common.getSVGPoint)(value, endX, endY);
  var end = (0, _common.getSVGPoint)(value, viewerX, viewerY);
  var deltaX = end.x - start.x;
  var deltaY = end.y - start.y;
  var nextValue = pan(value, deltaX, deltaY, panLimit);
  return (0, _common.set)(nextValue, {
    mode: _constants.MODE_PANNING,
    endX: viewerX,
    endY: viewerY
  }, _constants.ACTION_PAN);
}

function stopPanning(value) {
  return (0, _common.set)(value, {
    mode: _constants.MODE_IDLE,
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }, _constants.ACTION_PAN);
}

function autoPanIfNeeded(value, viewerX, viewerY) {
  var deltaX = 0;
  var deltaY = 0;
  if (viewerY <= 20) deltaY = 2;
  if (value.viewerWidth - viewerX <= 20) deltaX = -2;
  if (value.viewerHeight - viewerY <= 20) deltaY = -2;
  if (viewerX <= 20) deltaX = 2;
  deltaX = deltaX / value.d;
  deltaY = deltaY / value.d;
  return deltaX === 0 && deltaY === 0 ? value : pan(value, deltaX, deltaY);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openMiniature = openMiniature;
exports.closeMiniature = closeMiniature;

var _common = __webpack_require__(3);

function openMiniature(value) {
  return (0, _common.set)(value, {
    miniatureOpen: true
  });
}

function closeMiniature(value) {
  return (0, _common.set)(value, {
    miniatureOpen: false
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tipNoViewer = tipNoViewer;
exports.tipControlledComponent = tipControlledComponent;
exports.tipDeprecatedMiniatureProps = tipDeprecatedMiniatureProps;
exports.tipDeprecateToolbarProps = tipDeprecateToolbarProps;
exports.printMigrationTipsRelatedToProps = printMigrationTipsRelatedToProps;

var _is = __webpack_require__(17);

var github_base = 'https://github.com/chrvadala/react-svg-pan-zoom/blob/master';
var doc_v1_to_v2 = github_base + '/docs/migrate-from-v1-to-v2.md';
var doc_v2_to_v3 = github_base + '/docs/migrate-from-v2-to-v3.md';

function tipNoViewer() {
  console.error("HEY! You are trying to use an older version of ReactSVGPanZoom. Please read here ".concat(doc_v1_to_v2));
}

function tipControlledComponent() {
  console.error("HEY! With ReactSVGPanZoom >= 3 you MUST specify value and tool props. Please read here ".concat(doc_v2_to_v3));
}

function tipDeprecatedMiniatureProps() {
  console.error("HEY! With ReactSVGPanZoom >= 3 the props miniaturePosition, miniatureBackground, miniatureWidth, miniatureHeight can be specified as key in the miniatureProps object. Please read here ".concat(doc_v2_to_v3));
}

function tipDeprecateToolbarProps() {
  console.error("HEY! With ReactSVGPanZoom >= 3 the prop toolbarPosition can be specified as key in the toolbarProps object. Please read here ".concat(doc_v2_to_v3));
}

function printMigrationTipsRelatedToProps(props) {
  if ((0, _is.isNullOrUndefined)(props.tool) || (0, _is.isNullOrUndefined)(props.value)) tipControlledComponent();
  if (!(0, _is.isNullOrUndefined)(props.miniaturePosition) || !(0, _is.isNullOrUndefined)(props.miniatureBackground) || !(0, _is.isNullOrUndefined)(props.miniatureWidth) || !(0, _is.isNullOrUndefined)(props.miniatureHeight)) tipDeprecatedMiniatureProps();
  if (!(0, _is.isNullOrUndefined)(props.toolbarPosition)) tipDeprecateToolbarProps();
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _transformationMatrix = __webpack_require__(4);

var _eventFactory = _interopRequireDefault(__webpack_require__(18));

var _pan2 = __webpack_require__(6);

var _common = __webpack_require__(3);

var _interactions = __webpack_require__(11);

var _interactionsTouch = __webpack_require__(22);

var _zoom2 = __webpack_require__(5);

var _miniature = __webpack_require__(7);

var _cursorPolyfill = _interopRequireDefault(__webpack_require__(23));

var _borderGradient = _interopRequireDefault(__webpack_require__(24));

var _selection = _interopRequireDefault(__webpack_require__(26));

var _toolbar = _interopRequireDefault(__webpack_require__(14));

var _detectTouch = _interopRequireDefault(__webpack_require__(33));

var _miniature2 = _interopRequireDefault(__webpack_require__(15));

var _constants = __webpack_require__(1);

var _migrationTips = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ReactSVGPanZoom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactSVGPanZoom, _React$Component);

  function ReactSVGPanZoom(props, context) {
    var _this;

    _classCallCheck(this, ReactSVGPanZoom);

    var value = props.value,
        viewerWidth = props.width,
        viewerHeight = props.height,
        scaleFactorMin = props.scaleFactorMin,
        scaleFactorMax = props.scaleFactorMax,
        children = props.children;
    var _children$props = children.props,
        SVGWidth = _children$props.width,
        SVGHeight = _children$props.height;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactSVGPanZoom).call(this, props, context));
    _this.ViewerDOM = null;
    _this.state = {
      pointerX: null,
      pointerY: null,
      defaultValue: (0, _common.getDefaultValue)(viewerWidth, viewerHeight, SVGWidth, SVGHeight, scaleFactorMin, scaleFactorMax)
    };
    _this.autoPanLoop = _this.autoPanLoop.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (false) {}

    return _this;
  }
  /** React hooks **/


  _createClass(ReactSVGPanZoom, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.getValue();
      var props = this.props;
      var nextValue = value;
      var needUpdate = false;

      if (false) {}

      if (prevProps.width !== props.width || prevProps.height !== props.height) {
        nextValue = (0, _common.setViewerSize)(nextValue, props.width, props.height);
        needUpdate = true;
      }

      var _props$children$props = props.children.props,
          SVGWidth = _props$children$props.width,
          SVGHeight = _props$children$props.height;
      var _prevProps$children$p = prevProps.children.props,
          prevSVGWidth = _prevProps$children$p.width,
          prevSVGHeight = _prevProps$children$p.height;

      if (prevSVGWidth !== SVGWidth || prevSVGHeight !== prevSVGHeight) {
        nextValue = (0, _common.setSVGSize)(nextValue, SVGWidth, SVGHeight);
        needUpdate = true;
      }

      if (prevProps.scaleFactorMin !== props.scaleFactorMin || prevProps.scaleFactorMax !== props.scaleFactorMax) {
        nextValue = (0, _common.setZoomLevels)(nextValue, props.scaleFactorMin, props.scaleFactorMax);
        needUpdate = true;
      }

      if (needUpdate) {
        this.setValue(nextValue);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoPanIsRunning = true;
      requestAnimationFrame(this.autoPanLoop);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.autoPanIsRunning = false;
    }
    /** ReactSVGPanZoom handlers **/

  }, {
    key: "getValue",
    value: function getValue() {
      if ((0, _common.isValueValid)(this.props.value)) return this.props.value;
      return this.state.defaultValue;
    }
  }, {
    key: "getTool",
    value: function getTool() {
      if (this.props.tool) return this.props.tool;
      return _constants.TOOL_NONE;
    }
  }, {
    key: "setValue",
    value: function setValue(nextValue) {
      var _this$props = this.props,
          onChangeValue = _this$props.onChangeValue,
          onZoom = _this$props.onZoom,
          onPan = _this$props.onPan;
      if (onChangeValue) onChangeValue(nextValue);

      if (nextValue.lastAction) {
        if (onZoom && nextValue.lastAction === _constants.ACTION_ZOOM) onZoom(nextValue);
        if (onPan && nextValue.lastAction === _constants.ACTION_PAN) onPan(nextValue);
      }
    }
    /** ReactSVGPanZoom methods **/

  }, {
    key: "pan",
    value: function pan(SVGDeltaX, SVGDeltaY) {
      var nextValue = (0, _pan2.pan)(this.getValue(), SVGDeltaX, SVGDeltaY);
      this.setValue(nextValue);
    }
  }, {
    key: "zoom",
    value: function zoom(SVGPointX, SVGPointY, scaleFactor) {
      var nextValue = (0, _zoom2.zoom)(this.getValue(), SVGPointX, SVGPointY, scaleFactor);
      this.setValue(nextValue);
    }
  }, {
    key: "fitSelection",
    value: function fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
      var nextValue = (0, _zoom2.fitSelection)(this.getValue(), selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight);
      this.setValue(nextValue);
    }
  }, {
    key: "fitToViewer",
    value: function fitToViewer() {
      var SVGAlignX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.ALIGN_LEFT;
      var SVGAlignY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.ALIGN_TOP;
      var nextValue = (0, _zoom2.fitToViewer)(this.getValue(), SVGAlignX, SVGAlignY);
      this.setValue(nextValue);
    }
  }, {
    key: "zoomOnViewerCenter",
    value: function zoomOnViewerCenter(scaleFactor) {
      var nextValue = (0, _zoom2.zoomOnViewerCenter)(this.getValue(), scaleFactor);
      this.setValue(nextValue);
    }
  }, {
    key: "setPointOnViewerCenter",
    value: function setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
      var nextValue = (0, _common.setPointOnViewerCenter)(this.getValue(), SVGPointX, SVGPointY, zoomLevel);
      this.setValue(nextValue);
    }
  }, {
    key: "reset",
    value: function reset() {
      var nextValue = (0, _common.reset)(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: "openMiniature",
    value: function openMiniature() {
      var nextValue = (0, _miniature.openMiniature)(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: "closeMiniature",
    value: function closeMiniature() {
      var nextValue = (0, _miniature.closeMiniature)(this.getValue());
      this.setValue(nextValue);
    }
    /** ReactSVGPanZoom internals **/

  }, {
    key: "handleViewerEvent",
    value: function handleViewerEvent(event) {
      var props = this.props,
          ViewerDOM = this.ViewerDOM;
      if (!([_constants.TOOL_NONE, _constants.TOOL_AUTO].indexOf(this.getTool()) >= 0)) return;
      if (event.target === ViewerDOM) return;
      var eventsHandler = {
        click: props.onClick,
        dblclick: props.onDoubleClick,
        mousemove: props.onMouseMove,
        mouseup: props.onMouseUp,
        mousedown: props.onMouseDown,
        touchstart: props.onTouchStart,
        touchmove: props.onTouchMove,
        touchend: props.onTouchEnd,
        touchcancel: props.onTouchCancel
      };
      var onEventHandler = eventsHandler[event.type];
      if (!onEventHandler) return;
      onEventHandler((0, _eventFactory.default)(event, props.value, ViewerDOM));
    }
  }, {
    key: "autoPanLoop",
    value: function autoPanLoop() {
      var coords = {
        x: this.state.pointerX,
        y: this.state.pointerY
      };
      var nextValue = (0, _interactions.onInterval)(null, this.ViewerDOM, this.getTool(), this.getValue(), this.props, coords);

      if (this.getValue() !== nextValue) {
        this.setValue(nextValue);
      }

      if (this.autoPanIsRunning) {
        requestAnimationFrame(this.autoPanLoop);
      }
    }
    /** React renderer **/

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          _this$state = this.state,
          pointerX = _this$state.pointerX,
          pointerY = _this$state.pointerY;
      var tool = this.getTool();
      var value = this.getValue();
      var CustomToolbar = props.customToolbar,
          CustomMiniature = props.customMiniature;
      var panningWithToolAuto = tool === _constants.TOOL_AUTO && value.mode === _constants.MODE_PANNING && value.startX !== value.endX && value.startY !== value.endY;
      var cursor;
      if (tool === _constants.TOOL_PAN) cursor = (0, _cursorPolyfill.default)(value.mode === _constants.MODE_PANNING ? 'grabbing' : 'grab');
      if (tool === _constants.TOOL_ZOOM_IN) cursor = (0, _cursorPolyfill.default)('zoom-in');
      if (tool === _constants.TOOL_ZOOM_OUT) cursor = (0, _cursorPolyfill.default)('zoom-out');
      if (panningWithToolAuto) cursor = (0, _cursorPolyfill.default)('grabbing');
      var blockChildEvents = [_constants.TOOL_PAN, _constants.TOOL_ZOOM_IN, _constants.TOOL_ZOOM_OUT].indexOf(tool) >= 0;
      blockChildEvents = blockChildEvents || panningWithToolAuto;
      var touchAction = this.props.detectPinchGesture || [_constants.TOOL_PAN, _constants.TOOL_AUTO].indexOf(this.getTool()) !== -1 ? 'none' : undefined;
      var style = {
        display: 'block',
        cursor: cursor,
        touchAction: touchAction
      };
      return _react.default.createElement("div", {
        style: _objectSpread({
          position: "relative",
          width: value.viewerWidth,
          height: value.viewerHeight,
          backgroundColor: "#101735"
        }, props.style),
        className: this.props.className
      }, _react.default.createElement("svg", {
        ref: function ref(ViewerDOM) {
          return _this2.ViewerDOM = ViewerDOM;
        },
        width: value.viewerWidth,
        height: value.viewerHeight,
        style: style,
        onMouseDown: function onMouseDown(event) {
          var nextValue = (0, _interactions.onMouseDown)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onMouseMove: function onMouseMove(event) {
          var _this2$ViewerDOM$getB = _this2.ViewerDOM.getBoundingClientRect(),
              left = _this2$ViewerDOM$getB.left,
              top = _this2$ViewerDOM$getB.top;

          var x = event.clientX - Math.round(left);
          var y = event.clientY - Math.round(top);
          var nextValue = (0, _interactions.onMouseMove)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props, {
            x: x,
            y: y
          });
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.setState({
            pointerX: x,
            pointerY: y
          });

          _this2.handleViewerEvent(event);
        },
        onMouseUp: function onMouseUp(event) {
          var nextValue = (0, _interactions.onMouseUp)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onClick: function onClick(event) {
          _this2.handleViewerEvent(event);
        },
        onDoubleClick: function onDoubleClick(event) {
          var nextValue = (0, _interactions.onDoubleClick)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onWheel: function onWheel(event) {
          var nextValue = (0, _interactions.onWheel)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onMouseEnter: function onMouseEnter(event) {
          if ((0, _detectTouch.default)()) return;
          var nextValue = (0, _interactions.onMouseEnterOrLeave)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onMouseLeave: function onMouseLeave(event) {
          var nextValue = (0, _interactions.onMouseEnterOrLeave)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onTouchStart: function onTouchStart(event) {
          var nextValue = (0, _interactionsTouch.onTouchStart)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchMove: function onTouchMove(event) {
          var nextValue = (0, _interactionsTouch.onTouchMove)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          var nextValue = (0, _interactionsTouch.onTouchEnd)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchCancel: function onTouchCancel(event) {
          var nextValue = (0, _interactionsTouch.onTouchCancel)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        }
      }, _react.default.createElement("g", {
        transform: "".concat((0, _transformationMatrix.toSVG)(value), " translate(-10000, -10000)"),
        style: blockChildEvents ? {
          pointerEvents: "none"
        } : {}
      }, props.children.props.children), !([_constants.TOOL_NONE, _constants.TOOL_AUTO].indexOf(tool) >= 0 && props.detectAutoPan && value.focus) ? null : _react.default.createElement("g", {
        style: {
          pointerEvents: "none"
        }
      }, !(pointerY <= 20) ? null : _react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_TOP,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.viewerWidth - pointerX <= 20) ? null : _react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_RIGHT,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.viewerHeight - pointerY <= 20) ? null : _react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_BOTTOM,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.focus && pointerX <= 20) ? null : _react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_LEFT,
        width: value.viewerWidth,
        height: value.viewerHeight
      })), !(value.mode === _constants.MODE_ZOOMING) ? null : _react.default.createElement(_selection.default, {
        startX: value.startX,
        startY: value.startY,
        endX: value.endX,
        endY: value.endY
      })), props.toolbarProps.position === _constants.POSITION_NONE ? null : _react.default.createElement(CustomToolbar, _extends({}, this.props.toolbarProps, {
        value: value,
        onChangeValue: function onChangeValue(value) {
          return _this2.setValue(value);
        },
        tool: tool,
        onChangeTool: function onChangeTool(tool) {
          return _this2.props.onChangeTool(tool);
        }
      })), props.miniatureProps.position === _constants.POSITION_NONE ? null : _react.default.createElement(CustomMiniature, _extends({}, this.props.miniatureProps, {
        value: value,
        onChangeValue: function onChangeValue(value) {
          return _this2.setValue(value);
        },
        SVGBackground: this.props.SVGBackground
      }), props.children.props.children));
    }
  }]);

  return ReactSVGPanZoom;
}(_react.default.Component);

exports.default = ReactSVGPanZoom;
ReactSVGPanZoom.propTypes = {
  /**************************************************************************/

  /*  Viewer configuration                                                  */

  /**************************************************************************/
  //width of the viewer displayed on screen
  width: _propTypes.default.number.isRequired,
  //height of the viewer displayed on screen
  height: _propTypes.default.number.isRequired,
  //value of the viewer (current camera view)
  value: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.shape({
    version: _propTypes.default.oneOf([2]).isRequired,
    mode: _propTypes.default.oneOf([_constants.MODE_IDLE, _constants.MODE_PANNING, _constants.MODE_ZOOMING]).isRequired,
    focus: _propTypes.default.bool.isRequired,
    a: _propTypes.default.number.isRequired,
    b: _propTypes.default.number.isRequired,
    c: _propTypes.default.number.isRequired,
    d: _propTypes.default.number.isRequired,
    e: _propTypes.default.number.isRequired,
    f: _propTypes.default.number.isRequired,
    viewerWidth: _propTypes.default.number.isRequired,
    viewerHeight: _propTypes.default.number.isRequired,
    SVGWidth: _propTypes.default.number.isRequired,
    SVGHeight: _propTypes.default.number.isRequired,
    startX: _propTypes.default.number,
    startY: _propTypes.default.number,
    endX: _propTypes.default.number,
    endY: _propTypes.default.number,
    miniatureOpen: _propTypes.default.bool.isRequired
  })]).isRequired,
  //handler something changed
  onChangeValue: _propTypes.default.func.isRequired,
  //current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
  tool: _propTypes.default.oneOf([_constants.TOOL_AUTO, _constants.TOOL_NONE, _constants.TOOL_PAN, _constants.TOOL_ZOOM_IN, _constants.TOOL_ZOOM_OUT]).isRequired,
  //handler tool changed
  onChangeTool: _propTypes.default.func.isRequired,

  /**************************************************************************/

  /* Customize style                                                        */

  /**************************************************************************/
  //background of the viewer
  background: _propTypes.default.string,
  //background of the svg
  SVGBackground: _propTypes.default.string,
  //style of the svg
  SVGStyle: _propTypes.default.object,
  //CSS style of the Viewer
  style: _propTypes.default.object,
  //className of the Viewer
  className: _propTypes.default.string,

  /**************************************************************************/

  /* Detect events                                                          */

  /**************************************************************************/
  //perform zoom operation on mouse scroll
  detectWheel: _propTypes.default.bool,
  //perform PAN if the mouse is on viewer border
  detectAutoPan: _propTypes.default.bool,
  //perform zoom operation on pinch gesture
  detectPinchGesture: _propTypes.default.bool,
  //toolbar position
  toolbarPosition: _propTypes.default.oneOf([_constants.POSITION_NONE, _constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]),
  //handler zoom level changed
  onZoom: _propTypes.default.func,
  //handler pan action performed
  onPan: _propTypes.default.func,
  //handler click
  onClick: _propTypes.default.func,
  //handler double click
  onDoubleClick: _propTypes.default.func,
  //handler mouseup
  onMouseUp: _propTypes.default.func,
  //handler mousemove
  onMouseMove: _propTypes.default.func,
  //handler mousedown
  onMouseDown: _propTypes.default.func,

  /**************************************************************************/

  /* Some advanced configurations                                           */

  /**************************************************************************/
  //if disabled the user can move the image outside the viewer
  preventPanOutside: _propTypes.default.bool,
  //how much scale in or out
  scaleFactor: _propTypes.default.number,
  //how much scale in or out on mouse wheel (requires detectWheel enabled)
  scaleFactorOnWheel: _propTypes.default.number,
  // maximum amount of scale a user can zoom in to
  scaleFactorMax: _propTypes.default.number,
  // minimum amount of a scale a user can zoom out of
  scaleFactorMin: _propTypes.default.number,
  //modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
  modifierKeys: _propTypes.default.array,
  //Turn off zoom on double click
  disableDoubleClickZoomWithToolAuto: _propTypes.default.bool,

  /**************************************************************************/

  /* Miniature configurations                                                 */

  /**************************************************************************/
  //override miniature component
  customMiniature: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),
  //miniature props
  miniatureProps: _propTypes.default.shape({
    position: _propTypes.default.oneOf([_constants.POSITION_NONE, _constants.POSITION_RIGHT, _constants.POSITION_LEFT]),
    background: _propTypes.default.string,
    width: _propTypes.default.number,
    height: _propTypes.default.number
  }),

  /**************************************************************************/

  /* Toolbar configurations                                                 */

  /**************************************************************************/
  //override toolbar component
  customToolbar: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),
  //toolbar props
  toolbarProps: _propTypes.default.shape({
    position: _propTypes.default.oneOf([_constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]),
    SVGAlignX: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_LEFT, _constants.ALIGN_RIGHT]),
    SVGAlignY: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_TOP, _constants.ALIGN_BOTTOM])
  }),

  /**************************************************************************/

  /* Children Check                                                         */

  /**************************************************************************/
  //accept only one node SVG
  children: function children(props, propName, componentName) {
    // Only accept a single child, of the appropriate type
    //credits: http://www.mattzabriskie.com/blog/react-validating-children
    var prop = props[propName];
    var types = ['svg'];

    if (_react.default.Children.count(prop) !== 1 || types.indexOf(prop.type) === -1) {
      return new Error('`' + componentName + '` ' + 'should have a single child of the following types: ' + ' `' + types.join('`, `') + '`.');
    }

    if (!prop.props.hasOwnProperty('width') || !prop.props.hasOwnProperty('height')) {
      return new Error('SVG should have props `width` and `height`');
    }
  }
};
ReactSVGPanZoom.defaultProps = {
  style: {},
  background: "#616264",
  SVGBackground: "#fff",
  SVGStyle: {},
  detectWheel: true,
  detectAutoPan: true,
  detectPinchGesture: true,
  modifierKeys: ["Alt", "Shift", "Control"],
  preventPanOutside: true,
  scaleFactor: 1.1,
  scaleFactorOnWheel: 1.06,
  disableZoomWithToolAuto: false,
  onZoom: null,
  onPan: null,
  customToolbar: _toolbar.default,
  toolbarProps: {},
  customMiniature: _miniature2.default,
  miniatureProps: {}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ViewerEvent =
/*#__PURE__*/
function () {
  function ViewerEvent(originalEvent, value, SVGViewer) {
    _classCallCheck(this, ViewerEvent);

    this.originalEvent = originalEvent;
    this.value = value;
    this.SVGViewer = SVGViewer;
  }

  _createClass(ViewerEvent, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.originalEvent.preventDefault();
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.originalEvent.stopPropagation();
    }
  }, {
    key: "scaleFactor",
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || (0, _common.decompose)(this.value);
      return this._cacheDecomposedValue.scaleFactor;
    }
  }, {
    key: "translationX",
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || (0, _common.decompose)(this.value);
      return this._cacheDecomposedValue.translationX;
    }
  }, {
    key: "translationY",
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || (0, _common.decompose)(this.value);
      return this._cacheDecomposedValue.translationY;
    }
  }]);

  return ViewerEvent;
}();

exports.default = ViewerEvent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseDown = onMouseDown;
exports.onMouseMove = onMouseMove;
exports.onMouseUp = onMouseUp;
exports.onDoubleClick = onDoubleClick;
exports.onWheel = onWheel;
exports.onMouseEnterOrLeave = onMouseEnterOrLeave;
exports.onInterval = onInterval;

var _constants = __webpack_require__(1);

var _common = __webpack_require__(3);

var _pan = __webpack_require__(6);

var _zoom = __webpack_require__(5);

var _mapRange = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onMouseDown(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x, y;

  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin.left,
        top = _ViewerDOM$getBoundin.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_ZOOM_OUT:
      var SVGPoint = (0, _common.getSVGPoint)(value, x, y);
      nextValue = (0, _zoom.zoom)(value, SVGPoint.x, SVGPoint.y, 1 / props.scaleFactor, props);
      break;

    case _constants.TOOL_ZOOM_IN:
      nextValue = (0, _zoom.startZooming)(value, x, y);
      break;

    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      nextValue = (0, _pan.startPanning)(value, x, y);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onMouseMove(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x, y;

  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin2 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin2.left,
        top = _ViewerDOM$getBoundin2.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var forceExit = event.buttons === 0; //the mouse exited and reentered into svg

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_ZOOM_IN:
      if (value.mode === _constants.MODE_ZOOMING) nextValue = forceExit ? (0, _zoom.stopZooming)(value, x, y, props.scaleFactor, props) : (0, _zoom.updateZooming)(value, x, y);
      break;

    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      if (value.mode === _constants.MODE_PANNING) nextValue = forceExit ? (0, _pan.stopPanning)(value) : (0, _pan.updatePanning)(value, x, y, props.preventPanOutside ? 20 : undefined);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onMouseUp(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x, y;

  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin3 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin3.left,
        top = _ViewerDOM$getBoundin3.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_ZOOM_OUT:
      if (value.mode === _constants.MODE_ZOOMING) nextValue = (0, _zoom.stopZooming)(value, x, y, 1 / props.scaleFactor, props);
      break;

    case _constants.TOOL_ZOOM_IN:
      if (value.mode === _constants.MODE_ZOOMING) nextValue = (0, _zoom.stopZooming)(value, x, y, props.scaleFactor, props);
      break;

    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      if (value.mode === _constants.MODE_PANNING) nextValue = (0, _pan.stopPanning)(value, x, y);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onDoubleClick(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x, y;

  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin4 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin4.left,
        top = _ViewerDOM$getBoundin4.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_AUTO:
      if (!props.disableDoubleClickZoomWithToolAuto) {
        var SVGPoint = (0, _common.getSVGPoint)(value, x, y);

        var modifierKeysReducer = function modifierKeysReducer(current, modifierKey) {
          return current || event.getModifierState(modifierKey);
        };

        var modifierKeyActive = props.modifierKeys.reduce(modifierKeysReducer, false);
        var scaleFactor = modifierKeyActive ? 1 / props.scaleFactor : props.scaleFactor;
        nextValue = (0, _zoom.zoom)(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
      }

      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onWheel(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x, y;

  if (coords) {
    x = coords.x;
    y = coords.y;
  } else {
    var _ViewerDOM$getBoundin5 = ViewerDOM.getBoundingClientRect(),
        left = _ViewerDOM$getBoundin5.left,
        top = _ViewerDOM$getBoundin5.top;

    x = event.clientX - Math.round(left);
    y = event.clientY - Math.round(top);
  }

  if (!props.detectWheel) return value;
  var delta = Math.max(-1, Math.min(1, event.deltaY));
  var scaleFactor = (0, _mapRange.default)(delta, -1, 1, props.scaleFactorOnWheel, 1 / props.scaleFactorOnWheel);
  var SVGPoint = (0, _common.getSVGPoint)(value, x, y);
  var nextValue = (0, _zoom.zoom)(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
  event.preventDefault();
  return nextValue;
}

function onMouseEnterOrLeave(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var nextValue = (0, _common.setFocus)(value, event.type === 'mouseenter');
  event.preventDefault();
  return nextValue;
}

function onInterval(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x = coords.x,
      y = coords.y;
  if (!([_constants.TOOL_NONE, _constants.TOOL_AUTO].indexOf(tool) >= 0)) return value;
  if (!props.detectAutoPan) return value;
  if (!value.focus) return value;
  return (0, _pan.autoPanIfNeeded)(value, x, y);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateBox;

function calculateBox(start, end) {
  if (start.x <= end.x && start.y <= end.y) {
    return {
      x: start.x,
      y: start.y,
      width: end.x - start.x,
      height: end.y - start.y
    };
  } else if (start.x >= end.x && start.y <= end.y) {
    return {
      x: end.x,
      y: start.y,
      width: start.x - end.x,
      height: end.y - start.y
    };
  } else if (start.x >= end.x && start.y >= end.y) {
    return {
      x: end.x,
      y: end.y,
      width: start.x - end.x,
      height: start.y - end.y
    };
  } else if (start.x <= end.x && start.y >= end.y) {
    return {
      x: start.x,
      y: end.y,
      width: end.x - start.x,
      height: start.y - end.y
    };
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomUID;

var _react = _interopRequireDefault(__webpack_require__(0));

var _getDisplayName = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var uid = 1;

var nextUID = function nextUID() {
  return "uid".concat(uid++);
};

function RandomUID(WrappedComponent) {
  var RandomUID =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(RandomUID, _React$Component);

    function RandomUID(props) {
      var _this;

      _classCallCheck(this, RandomUID);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RandomUID).call(this, props));
      _this.state = {
        uid: nextUID()
      };
      return _this;
    }

    _createClass(RandomUID, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, _extends({
          _uid: this.state.uid
        }, this.props));
      }
    }]);

    return RandomUID;
  }(_react.default.Component);

  RandomUID.displayName = "RandomUID(".concat((0, _getDisplayName.default)(WrappedComponent), ")");
  return RandomUID;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Toolbar;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(1);

var _zoom = __webpack_require__(5);

var _iconCursor = _interopRequireDefault(__webpack_require__(27));

var _iconPan = _interopRequireDefault(__webpack_require__(28));

var _iconZoomIn = _interopRequireDefault(__webpack_require__(29));

var _iconZoomOut = _interopRequireDefault(__webpack_require__(30));

var _iconFit = _interopRequireDefault(__webpack_require__(31));

var _toolbarButton = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Toolbar(_ref) {
  var tool = _ref.tool,
      value = _ref.value,
      onChangeValue = _ref.onChangeValue,
      onChangeTool = _ref.onChangeTool,
      position = _ref.position,
      SVGAlignX = _ref.SVGAlignX,
      SVGAlignY = _ref.SVGAlignY;

  var handleChangeTool = function handleChangeTool(event, tool) {
    onChangeTool(tool);
    event.stopPropagation();
    event.preventDefault();
  };

  var handleFit = function handleFit(event) {
    onChangeValue((0, _zoom.fitToViewer)(value, SVGAlignX, SVGAlignY));
    event.stopPropagation();
    event.preventDefault();
  };

  var isHorizontal = [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(position) >= 0;
  var style = {
    //position
    position: "absolute",
    transform: [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(position) >= 0 ? "translate(-50%, 0px)" : "none",
    top: [_constants.POSITION_LEFT, _constants.POSITION_RIGHT, _constants.POSITION_TOP].indexOf(position) >= 0 ? "5px" : "unset",
    left: [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(position) >= 0 ? "50%" : _constants.POSITION_LEFT === position ? "5px" : "unset",
    right: [_constants.POSITION_RIGHT].indexOf(position) >= 0 ? "5px" : "unset",
    bottom: [_constants.POSITION_BOTTOM].indexOf(position) >= 0 ? "5px" : "unset",
    //inner styling
    backgroundColor: "rgba(19, 20, 22, 0.90)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    padding: isHorizontal ? "1px 2px" : "2px 1px"
  };
  return _react.default.createElement("div", {
    style: style,
    role: "toolbar"
  }, _react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_NONE,
    name: "unselect-tools",
    title: "Selection",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_NONE);
    }
  }, _react.default.createElement(_iconCursor.default, null)), _react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_PAN,
    name: "select-tool-pan",
    title: "Pan",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_PAN);
    }
  }, _react.default.createElement(_iconPan.default, null)), _react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_ZOOM_IN,
    name: "select-tool-zoom-in",
    title: "Zoom in",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_ZOOM_IN);
    }
  }, _react.default.createElement(_iconZoomIn.default, null)), _react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_ZOOM_OUT,
    name: "select-tool-zoom-out",
    title: "Zoom out",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_ZOOM_OUT);
    }
  }, _react.default.createElement(_iconZoomOut.default, null)), _react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: false,
    name: "fit-to-viewer",
    title: "Fit to viewer",
    onClick: function onClick(event) {
      return handleFit(event);
    }
  }, _react.default.createElement(_iconFit.default, null)));
}

Toolbar.propTypes = {
  tool: _propTypes.default.string.isRequired,
  onChangeTool: _propTypes.default.func.isRequired,
  value: _propTypes.default.object.isRequired,
  onChangeValue: _propTypes.default.func.isRequired,
  //customizations
  position: _propTypes.default.oneOf([_constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]),
  SVGAlignX: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_LEFT, _constants.ALIGN_RIGHT]),
  SVGAlignY: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_TOP, _constants.ALIGN_BOTTOM])
};
Toolbar.defaultProps = {
  position: _constants.POSITION_RIGHT,
  SVGAlignX: _constants.ALIGN_LEFT,
  SVGAlignY: _constants.ALIGN_TOP
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Miniature;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(1);

var _transformationMatrix = __webpack_require__(4);

var _miniatureToggleButton = _interopRequireDefault(__webpack_require__(34));

var _miniatureMask = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var min = Math.min,
    max = Math.max;

function Miniature(props) {
  var _style;

  var value = props.value,
      onChangeValue = props.onChangeValue,
      children = props.children,
      position = props.position,
      background = props.background,
      SVGBackground = props.SVGBackground,
      miniatureWidth = props.width,
      miniatureHeight = props.height;
  var SVGWidth = value.SVGWidth,
      SVGHeight = value.SVGHeight,
      viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var ratio = SVGHeight / SVGWidth;
  var zoomToFit = ratio >= 1 ? miniatureHeight / SVGHeight : miniatureWidth / SVGWidth;

  var _applyToPoints = (0, _transformationMatrix.applyToPoints)((0, _transformationMatrix.inverse)(value), [{
    x: 0,
    y: 0
  }, {
    x: viewerWidth,
    y: viewerHeight
  }]),
      _applyToPoints2 = _slicedToArray(_applyToPoints, 2),
      _applyToPoints2$ = _applyToPoints2[0],
      x1 = _applyToPoints2$.x,
      y1 = _applyToPoints2$.y,
      _applyToPoints2$2 = _applyToPoints2[1],
      x2 = _applyToPoints2$2.x,
      y2 = _applyToPoints2$2.y;

  var width, height;

  if (value.miniatureOpen) {
    width = miniatureWidth;
    height = miniatureHeight;
  } else {
    width = 24;
    height = 24;
  }

  var style = (_style = {
    position: "absolute",
    overflow: "hidden",
    outline: "1px solid rgba(19, 20, 22, 0.90)",
    transition: "width 200ms ease, height 200ms ease, bottom 200ms ease",
    width: width + "px",
    height: height + "px",
    bottom: "6px"
  }, _defineProperty(_style, position === _constants.POSITION_LEFT ? 'left' : 'right', "6px"), _defineProperty(_style, "background", background), _style);
  var centerTranslation = ratio >= 1 ? "translate(".concat((miniatureWidth - SVGWidth * zoomToFit) / 2, ", 0)") : "translate(0, ".concat((miniatureHeight - SVGHeight * zoomToFit) / 2, ")");
  return _react.default.createElement("div", {
    role: "navigation",
    style: style
  }, _react.default.createElement("svg", {
    width: miniatureWidth,
    height: miniatureHeight,
    style: {
      pointerEvents: "none"
    }
  }, _react.default.createElement("g", {
    transform: centerTranslation
  }, _react.default.createElement("g", {
    transform: "scale(".concat(zoomToFit, ", ").concat(zoomToFit, ")")
  }, _react.default.createElement("rect", {
    fill: SVGBackground,
    x: 0,
    y: 0,
    width: value.SVGWidth,
    height: value.SVGHeight
  }), children, _react.default.createElement(_miniatureMask.default, {
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    zoomToFit: zoomToFit
  })))), _react.default.createElement(_miniatureToggleButton.default, {
    value: value,
    onChangeValue: onChangeValue,
    position: position
  }));
}

Miniature.propTypes = {
  value: _propTypes.default.object.isRequired,
  onChangeValue: _propTypes.default.func.isRequired,
  SVGBackground: _propTypes.default.string.isRequired,
  //customizations
  position: _propTypes.default.oneOf([_constants.POSITION_RIGHT, _constants.POSITION_LEFT]),
  background: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};
Miniature.defaultProps = {
  position: _constants.POSITION_LEFT,
  background: "#616264",
  width: 100,
  height: 80
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Viewer: true,
  ReactSVGPanZoom: true,
  UncontrolledReactSVGPanZoom: true,
  Toolbar: true,
  Miniature: true,
  setPointOnViewerCenter: true,
  reset: true,
  pan: true,
  zoom: true,
  fitSelection: true,
  fitToViewer: true,
  zoomOnViewerCenter: true,
  openMiniature: true,
  closeMiniature: true
};
Object.defineProperty(exports, "ReactSVGPanZoom", {
  enumerable: true,
  get: function get() {
    return _viewer.default;
  }
});
Object.defineProperty(exports, "UncontrolledReactSVGPanZoom", {
  enumerable: true,
  get: function get() {
    return _uncontrolledViewer.default;
  }
});
Object.defineProperty(exports, "Toolbar", {
  enumerable: true,
  get: function get() {
    return _toolbar.default;
  }
});
Object.defineProperty(exports, "Miniature", {
  enumerable: true,
  get: function get() {
    return _miniature.default;
  }
});
Object.defineProperty(exports, "setPointOnViewerCenter", {
  enumerable: true,
  get: function get() {
    return _common.setPointOnViewerCenter;
  }
});
Object.defineProperty(exports, "reset", {
  enumerable: true,
  get: function get() {
    return _common.reset;
  }
});
Object.defineProperty(exports, "pan", {
  enumerable: true,
  get: function get() {
    return _pan.pan;
  }
});
Object.defineProperty(exports, "zoom", {
  enumerable: true,
  get: function get() {
    return _zoom.zoom;
  }
});
Object.defineProperty(exports, "fitSelection", {
  enumerable: true,
  get: function get() {
    return _zoom.fitSelection;
  }
});
Object.defineProperty(exports, "fitToViewer", {
  enumerable: true,
  get: function get() {
    return _zoom.fitToViewer;
  }
});
Object.defineProperty(exports, "zoomOnViewerCenter", {
  enumerable: true,
  get: function get() {
    return _zoom.zoomOnViewerCenter;
  }
});
Object.defineProperty(exports, "openMiniature", {
  enumerable: true,
  get: function get() {
    return _miniature2.openMiniature;
  }
});
Object.defineProperty(exports, "closeMiniature", {
  enumerable: true,
  get: function get() {
    return _miniature2.closeMiniature;
  }
});
exports.Viewer = void 0;

var _migrationTips = __webpack_require__(8);

var _viewer = _interopRequireDefault(__webpack_require__(9));

var _uncontrolledViewer = _interopRequireDefault(__webpack_require__(37));

var _toolbar = _interopRequireDefault(__webpack_require__(14));

var _miniature = _interopRequireDefault(__webpack_require__(15));

var _common = __webpack_require__(3);

var _pan = __webpack_require__(6);

var _zoom = __webpack_require__(5);

var _miniature2 = __webpack_require__(7);

var _constants = __webpack_require__(1);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewer = function Viewer() {
  (0, _migrationTips.tipNoViewer)();
  return null;
};

exports.Viewer = Viewer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNullOrUndefined = isNullOrUndefined;

function isNullOrUndefined(value) {
  return typeof value === 'undefined' || value === null;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _viewerMouseEvent = _interopRequireDefault(__webpack_require__(19));

var _viewerTouchEvent = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(originalEvent, value, SVGViewer) {
  var eventType = originalEvent.type;

  switch (eventType) {
    case "mousemove":
    case "mouseup":
    case "mousedown":
    case "click":
    case "dblclick":
      return new _viewerMouseEvent.default(originalEvent, value, SVGViewer);

    case "touchstart":
    case "touchmove":
    case "touchend":
    case "touchcancel":
      return new _viewerTouchEvent.default(originalEvent, value, SVGViewer);

    default:
      throw new Error("".concat(eventType, " not supported"));
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(3);

var _viewerEvent = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ViewerMouseEvent =
/*#__PURE__*/
function (_ViewerEvent) {
  _inherits(ViewerMouseEvent, _ViewerEvent);

  function ViewerMouseEvent() {
    _classCallCheck(this, ViewerMouseEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewerMouseEvent).apply(this, arguments));
  }

  _createClass(ViewerMouseEvent, [{
    key: "point",
    get: function get() {
      if (!this._cachePoint) {
        var event = this.originalEvent,
            value = this.value,
            SVGViewer = this.SVGViewer;
        var rect = SVGViewer.getBoundingClientRect();
        var x = event.clientX - Math.round(rect.left);
        var y = event.clientY - Math.round(rect.top);
        this._cachePoint = (0, _common.getSVGPoint)(value, x, y);
      }

      return this._cachePoint;
    }
  }, {
    key: "x",
    get: function get() {
      return this.point.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.point.y;
    }
  }]);

  return ViewerMouseEvent;
}(_viewerEvent.default);

exports.default = ViewerMouseEvent;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(3);

var _viewerEvent = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ViewerTouchEvent =
/*#__PURE__*/
function (_ViewerEvent) {
  _inherits(ViewerTouchEvent, _ViewerEvent);

  function ViewerTouchEvent() {
    _classCallCheck(this, ViewerTouchEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewerTouchEvent).apply(this, arguments));
  }

  _createClass(ViewerTouchEvent, [{
    key: "points",
    get: function get() {
      if (!this._cachePoints) this._cachePoints = ViewerTouchEvent.touchesToPoints(this.originalEvent.touches, this.SVGViewer, this.value);
      return this._cachePoints;
    }
  }, {
    key: "changedPoints",
    get: function get() {
      if (!this._cacheChangedPoints) this._cacheChangedPoints = ViewerTouchEvent.touchesToPoints(this.originalEvent.changedTouches, this.SVGViewer, this.value);
      return this._cacheChangedPoints;
    }
  }], [{
    key: "touchesToPoints",
    value: function touchesToPoints(touches, SVGViewer, value) {
      var points = [];

      for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        var rect = SVGViewer.getBoundingClientRect();
        var x = touch.clientX - Math.round(rect.left);
        var y = touch.clientY - Math.round(rect.top);
        var point = (0, _common.getSVGPoint)(value, x, y);
        points.push(_objectSpread({}, point, {
          identifier: touch.identifier
        }));
      }

      return points;
    }
  }]);

  return ViewerTouchEvent;
}(_viewerEvent.default);

exports.default = ViewerTouchEvent;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapRange;

function mapRange(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onTouchStart = onTouchStart;
exports.onTouchMove = onTouchMove;
exports.onTouchEnd = onTouchEnd;
exports.onTouchCancel = onTouchCancel;

var _transformationMatrix = __webpack_require__(4);

var _constants = __webpack_require__(1);

var _common = __webpack_require__(3);

var _interactions = __webpack_require__(11);

var _zoom = __webpack_require__(5);

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hasPinchPointDistance(value) {
  return typeof value.pinchPointDistance === 'number';
}

function onMultiTouch(event, ViewerDOM, tool, value, props) {
  var _ViewerDOM$getBoundin = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin.left,
      top = _ViewerDOM$getBoundin.top;

  var x1 = event.touches[0].clientX - Math.round(left);
  var y1 = event.touches[0].clientY - Math.round(top);
  var x2 = event.touches[1].clientX - Math.round(left);
  var y2 = event.touches[1].clientY - Math.round(top);
  var pinchPointDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  var previousPointDistance = hasPinchPointDistance(value) ? value.pinchPointDistance : pinchPointDistance;
  var svgPoint = (0, _common.getSVGPoint)(value, (x1 + x2) / 2, (y1 + y2) / 2);
  var distanceFactor = pinchPointDistance / previousPointDistance;

  if ((0, _zoom.isZoomLevelGoingOutOfBounds)(value, distanceFactor)) {
    // Do not change translation and scale of value
    return value;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.fromObject)(value), (0, _transformationMatrix.translate)(svgPoint.x, svgPoint.y), (0, _transformationMatrix.scale)(distanceFactor, distanceFactor), (0, _transformationMatrix.translate)(-svgPoint.x, -svgPoint.y));
  return (0, _common.set)(value, (0, _common.set)(_objectSpread({
    mode: _constants.MODE_ZOOMING
  }, (0, _zoom.limitZoomLevel)(value, matrix), {
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    prePinchMode: value.prePinchMode ? value.prePinchMode : value.mode,
    pinchPointDistance: pinchPointDistance
  })));
}

function isMultiTouch(event, props) {
  return props.detectPinchGesture && event.touches.length > 1;
}

function shouldResetPinchPointDistance(event, value, props) {
  return props.detectPinchGesture && hasPinchPointDistance(value) && event.touches.length < 2;
}

function getTouchPosition(touch, ViewerDOM) {
  var _ViewerDOM$getBoundin2 = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin2.left,
      top = _ViewerDOM$getBoundin2.top;

  var x = touch.clientX - Math.round(left);
  var y = touch.clientY - Math.round(top);
  return {
    x: x,
    y: y
  };
}

function getNextValue(event, ViewerDOM, tool, value, props, nextValueFn) {
  var nextValue = event.touches.length === 0 ? (0, _common.set)(value, {
    mode: value.prePinchMode ? _constants.MODE_IDLE : value.mode,
    prePinchMode: null
  }) : value;
  var touch = event.touches.length > 0 ? event.touches[0] : event.changedTouches[0];
  var touchPosition = getTouchPosition(touch, ViewerDOM);

  switch (tool) {
    case _constants.TOOL_ZOOM_OUT:
    case _constants.TOOL_ZOOM_IN:
    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      event.stopPropagation();
      event.preventDefault();
      return nextValueFn(event, ViewerDOM, tool, nextValue, props, touchPosition);

    default:
      return nextValue;
  }
}

function onTouchStart(event, ViewerDOM, tool, value, props) {
  if (isMultiTouch(event, props)) {
    return onMultiTouch(event, ViewerDOM, tool, value, props);
  }

  if (event.touches.length !== 1) {
    if ([_constants.MODE_PANNING, _constants.MODE_ZOOMING].indexOf(value.mode) >= 0) {
      return (0, _common.resetMode)(value);
    } else if ([_constants.MODE_IDLE].indexOf(value.mode) >= 0) {
      return value;
    }
  }

  return getNextValue(event, ViewerDOM, tool, value, props, _interactions.onMouseDown);
}

function onTouchMove(event, ViewerDOM, tool, value, props) {
  if (isMultiTouch(event, props)) {
    return onMultiTouch(event, ViewerDOM, tool, value, props);
  }

  if (!([_constants.MODE_PANNING, _constants.MODE_ZOOMING].indexOf(value.mode) >= 0)) {
    return value;
  }

  return getNextValue(event, ViewerDOM, tool, value, props, _interactions.onMouseMove);
}

function onTouchEnd(event, ViewerDOM, tool, value, props) {
  if (!([_constants.MODE_PANNING, _constants.MODE_ZOOMING].indexOf(value.mode) >= 0)) {
    return value;
  }

  var nextValue = shouldResetPinchPointDistance(event, value, props) ? (0, _common.set)(value, {
    pinchPointDistance: null
  }) : value;

  if (event.touches.length > 0) {
    return nextValue;
  }

  return getNextValue(event, ViewerDOM, tool, nextValue, props, _interactions.onMouseUp);
}

function onTouchCancel(event, ViewerDOM, tool, value, props) {
  event.stopPropagation();
  event.preventDefault();
  return (0, _common.resetMode)(value);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

//specs: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
var needPrefix = function needPrefix(cursor) {
  return ['zoom-in', 'zoom-out', 'grab', 'grabbing'].indexOf(cursor) > -1;
};

var userAgent = function userAgent() {
  return navigator.userAgent.toLowerCase();
};

var isFirefox = function isFirefox() {
  return userAgent().indexOf('firefox') > -1;
};

var isWebkit = function isWebkit() {
  return userAgent().indexOf('webkit') > -1;
};

function _default(cursor) {
  if (!needPrefix(cursor)) return cursor;
  if (isFirefox()) return "-moz-".concat(cursor);
  if (isWebkit()) return "-webkit-".concat(cursor);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(1);

var _RandomUID = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixID = 'react-svg-pan-zoom_border_gradient';

function BorderGradient(_ref) {
  var direction = _ref.direction,
      width = _ref.width,
      height = _ref.height,
      _uid = _ref._uid;
  var transform;

  switch (direction) {
    case _constants.POSITION_TOP:
      transform = "translate(".concat(width, ", 0) rotate(90)");
      break;

    case _constants.POSITION_RIGHT:
      transform = "translate(".concat(width, ", ").concat(height, ") rotate(180)");
      break;

    case _constants.POSITION_BOTTOM:
      transform = "translate(0, ".concat(height, ") rotate(270)");
      break;

    case _constants.POSITION_LEFT:
      transform = " ";
      break;
  }

  var gradientID = "".concat(prefixID, "_gradient_").concat(_uid);
  var maskID = "".concat(prefixID, "_mask_").concat(_uid);
  return _react.default.createElement("g", null, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: gradientID,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    spreadMethod: "pad"
  }, _react.default.createElement("stop", {
    offset: "0%",
    stopColor: "#fff",
    stopOpacity: "0.8"
  }), _react.default.createElement("stop", {
    offset: "100%",
    stopColor: "#000",
    stopOpacity: "0.5"
  })), _react.default.createElement("mask", {
    id: maskID,
    x: "0",
    y: "0",
    width: "20",
    height: Math.max(width, height)
  }, _react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "20",
    height: Math.max(width, height),
    style: {
      stroke: "none",
      fill: "url(#".concat(gradientID, ")")
    }
  }))), _react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "20",
    height: Math.max(width, height),
    style: {
      stroke: "none",
      fill: "#000",
      mask: "url(#".concat(maskID, ")")
    },
    transform: transform
  }));
}

BorderGradient.propTypes = {
  direction: _propTypes.default.oneOf([_constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]).isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};

var _default = (0, _RandomUID.default)(BorderGradient);

exports.default = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;

//https://facebook.github.io/react/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Selection;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _calculateBox = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selection(_ref) {
  var startX = _ref.startX,
      startY = _ref.startY,
      endX = _ref.endX,
      endY = _ref.endY;
  if (!startX || !startY || !endX || !endY) return null;
  var box = (0, _calculateBox.default)({
    x: startX,
    y: startY
  }, {
    x: endX,
    y: endY
  });
  return _react.default.createElement("rect", {
    stroke: "#969FFF",
    strokeOpacity: 0.7,
    fill: "#F3F4FF",
    fillOpacity: 0.7,
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    style: {
      pointerEvents: "none"
    }
  });
}

Selection.propTypes = {
  startX: _propTypes.default.number.isRequired,
  startY: _propTypes.default.number.isRequired,
  endX: _propTypes.default.number.isRequired,
  endY: _propTypes.default.number.isRequired
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconCursor;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//credits https://materialdesignicons.com/icon/cursor-default-outline
function IconCursor() {
  return _react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, _react.default.createElement("path", {
    d: "M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"
  }));
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconPan;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://materialdesignicons.com/icon/cursor-move
function IconPan() {
  return _react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, _react.default.createElement("path", {
    d: "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"
  }));
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconZoomIn;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://material.io/icons/#ic_zoom_in
function IconZoomIn() {
  return _react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), _react.default.createElement("path", {
    d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
  })));
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconZoomOut;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://material.io/icons/#ic_zoom_out
function IconZoomOut() {
  return _react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, _react.default.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
  }));
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconFit;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//credits https://materialdesignicons.com/icon/cursor-default-outline
function IconFit() {
  return _react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, _react.default.createElement("path", {
    d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"
  }));
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ToolbarButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToolbarButton, _React$Component);

  function ToolbarButton(props) {
    var _this;

    _classCallCheck(this, ToolbarButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolbarButton).call(this, props));
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(ToolbarButton, [{
    key: "change",
    value: function change(event) {
      event.preventDefault();
      event.stopPropagation();

      switch (event.type) {
        case 'mouseenter':
        case 'touchstart':
          this.setState({
            hover: true
          });
          break;

        case 'mouseleave':
        case 'touchend':
        case 'touchcancel':
          this.setState({
            hover: false
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        display: "block",
        width: "24px",
        height: "24px",
        margin: [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(this.props.toolbarPosition) >= 0 ? "2px 1px" : "1px 2px",
        color: this.props.active || this.state.hover ? '#1CA6FC' : '#FFF',
        transition: "color 200ms ease",
        background: "none",
        padding: "0px",
        border: "0px",
        outline: "0px",
        cursor: "pointer"
      };
      return _react.default.createElement("button", {
        onMouseEnter: function onMouseEnter(e) {
          return _this2.change(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this2.change(e);
        },
        onTouchStart: function onTouchStart(e) {
          _this2.change(e);

          _this2.props.onClick(e);
        },
        onTouchEnd: function onTouchEnd(e) {
          return _this2.change(e);
        },
        onTouchCancel: function onTouchCancel(e) {
          return _this2.change(e);
        },
        onClick: this.props.onClick,
        style: style,
        title: this.props.title,
        name: this.props.name,
        role: "button",
        type: "button"
      }, this.props.children);
    }
  }]);

  return ToolbarButton;
}(_react.default.Component);

exports.default = ToolbarButton;
ToolbarButton.propTypes = {
  title: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  toolbarPosition: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired,
  active: _propTypes.default.bool.isRequired
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTouchDevice;

//http://stackoverflow.com/a/4819886/1398836
function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers
  || navigator.maxTouchPoints; // works on IE10/11 and Surface
}

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MiniatureToggleButton;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _miniature = __webpack_require__(7);

var _iconArrow = _interopRequireDefault(__webpack_require__(35));

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MiniatureToggleButton(_ref) {
  var _style;

  var value = _ref.value,
      onChangeValue = _ref.onChangeValue,
      position = _ref.position;
  var style = (_style = {
    width: "24px",
    height: "24px",
    display: "block",
    position: "absolute",
    bottom: 0
  }, _defineProperty(_style, position === _constants.POSITION_LEFT ? 'left' : 'right', '0px'), _defineProperty(_style, "background", "rgba(19, 20, 22, 0.901961)"), _defineProperty(_style, "border", 0), _defineProperty(_style, "padding", 0), _defineProperty(_style, "outline", 0), _defineProperty(_style, "color", "#fff"), _style);
  var action = value.miniatureOpen ? _miniature.closeMiniature : _miniature.openMiniature;
  return _react.default.createElement("button", {
    role: "button",
    type: "button",
    style: style,
    onClick: function onClick(event) {
      return onChangeValue(action(value));
    }
  }, _react.default.createElement(_iconArrow.default, {
    open: value.miniatureOpen,
    position: position
  }));
}

MiniatureToggleButton.propTypes = {
  value: _propTypes.default.object.isRequired,
  onChangeValue: _propTypes.default.func.isRequired,
  position: _propTypes.default.oneOf([_constants.POSITION_RIGHT, _constants.POSITION_LEFT]).isRequired
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconArrow;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//credits https://materialdesignicons.com/icon/chevron-up
function IconArrow(_ref) {
  var open = _ref.open,
      position = _ref.position;
  var transform = 0;

  switch (position) {
    case _constants.POSITION_LEFT:
      transform = open ? "rotate(225, 12, 13)" : "rotate(45, 12, 13)";
      break;

    case _constants.POSITION_RIGHT:
      transform = transform = open ? "rotate(135, 12, 13)" : "rotate(-45, 12, 13)";
  }

  return _react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, _react.default.createElement("g", {
    transform: transform
  }, _react.default.createElement("path", {
    fill: "#000000",
    d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
  })));
}

IconArrow.propTypes = {
  open: _propTypes.default.bool.isRequired,
  position: _propTypes.default.oneOf([_constants.POSITION_RIGHT, _constants.POSITION_LEFT]).isRequired
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _RandomUID = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixID = 'react-svg-pan-zoom_miniature';

function MiniatureMask(_ref) {
  var SVGWidth = _ref.SVGWidth,
      SVGHeight = _ref.SVGHeight,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      zoomToFit = _ref.zoomToFit,
      _uid = _ref._uid;
  var maskID = "".concat(prefixID, "_mask_").concat(_uid);
  return _react.default.createElement("g", null, _react.default.createElement("defs", null, _react.default.createElement("mask", {
    id: maskID
  }, _react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: SVGWidth,
    height: SVGHeight,
    fill: "#ffffff"
  }), _react.default.createElement("rect", {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1
  }))), _react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: SVGWidth,
    height: SVGHeight,
    style: {
      stroke: "none",
      fill: "#000",
      mask: "url(#".concat(maskID, ")"),
      opacity: 0.4
    }
  }));
}

MiniatureMask.propTypes = {
  SVGWidth: _propTypes.default.number.isRequired,
  SVGHeight: _propTypes.default.number.isRequired,
  x1: _propTypes.default.number.isRequired,
  y1: _propTypes.default.number.isRequired,
  x2: _propTypes.default.number.isRequired,
  y2: _propTypes.default.number.isRequired,
  zoomToFit: _propTypes.default.number.isRequired
};

var _default = (0, _RandomUID.default)(MiniatureMask);

exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _viewer = _interopRequireDefault(__webpack_require__(9));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var UncontrolledReactSVGPanZoom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UncontrolledReactSVGPanZoom, _React$Component);

  function UncontrolledReactSVGPanZoom(props) {
    var _this;

    _classCallCheck(this, UncontrolledReactSVGPanZoom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UncontrolledReactSVGPanZoom).call(this, props));
    _this.state = {
      value: props.defaultValue || {},
      tool: props.defaultTool || _constants.TOOL_NONE
    };
    _this.Viewer = null;
    _this.changeTool = _this.changeTool.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UncontrolledReactSVGPanZoom, [{
    key: "changeTool",
    value: function changeTool(tool) {
      this.setState({
        tool: tool
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "pan",
    value: function pan(SVGDeltaX, SVGDeltaY) {
      this.Viewer.pan(SVGDeltaX, SVGDeltaY);
    }
  }, {
    key: "zoom",
    value: function zoom(SVGPointX, SVGPointY, scaleFactor) {
      this.Viewer.zoom(SVGPointX, SVGPointY, scaleFactor);
    }
  }, {
    key: "fitSelection",
    value: function fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
      this.Viewer.fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight);
    }
  }, {
    key: "fitToViewer",
    value: function fitToViewer(SVGAlignX, SVGAlignY) {
      this.Viewer.fitToViewer(SVGAlignX, SVGAlignY);
    }
  }, {
    key: "zoomOnViewerCenter",
    value: function zoomOnViewerCenter(scaleFactor) {
      this.Viewer.zoomOnViewerCenter(scaleFactor);
    }
  }, {
    key: "setPointOnViewerCenter",
    value: function setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
      this.Viewer.setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.Viewer.reset();
    }
  }, {
    key: "openMiniature",
    value: function openMiniature() {
      this.Viewer.openMiniature();
    }
  }, {
    key: "closeMiniature",
    value: function closeMiniature() {
      this.Viewer.closeMiniature();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          onChangeTool = _this$props.onChangeTool,
          onChangeValue = _this$props.onChangeValue,
          props = _objectWithoutProperties(_this$props, ["width", "height", "onChangeTool", "onChangeValue"]);

      var _this$state = this.state,
          tool = _this$state.tool,
          value = _this$state.value;
      return _react.default.createElement(_viewer.default, _extends({
        width: width,
        height: height,
        tool: tool,
        onChangeTool: this.changeTool,
        value: value,
        onChangeValue: this.changeValue,
        ref: function ref(Viewer) {
          return _this2.Viewer = Viewer;
        }
      }, props));
    }
  }]);

  return UncontrolledReactSVGPanZoom;
}(_react.default.Component);

exports.default = UncontrolledReactSVGPanZoom;
UncontrolledReactSVGPanZoom.propTypes = {
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  defaultValue: _propTypes.default.object,
  defaultTool: _propTypes.default.string
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-svg-pan-zoom.js.map