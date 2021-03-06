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

import React from 'react';
import PropTypes from 'prop-types';
import { toSVG } from 'transformation-matrix'; //events

import eventFactory from './events/event-factory'; //features

import { pan as _pan } from './features/pan';
import { getDefaultValue, isValueValid, reset as _reset, setPointOnViewerCenter as _setPointOnViewerCenter, setSVGSize, setViewerSize, setZoomLevels } from './features/common';
import { onDoubleClick as _onDoubleClick, onInterval, onMouseDown as _onMouseDown, onMouseEnterOrLeave, onMouseMove as _onMouseMove, onMouseUp as _onMouseUp, onWheel as _onWheel, onDrag, zoomOut, zoomIn } from './features/interactions';
import { onTouchCancel as _onTouchCancel, onTouchEnd as _onTouchEnd, onTouchMove as _onTouchMove, onTouchStart as _onTouchStart } from './features/interactions-touch';
import { fitSelection as _fitSelection, fitToViewer as _fitToViewer, zoom as _zoom, zoomOnViewerCenter as _zoomOnViewerCenter } from './features/zoom';
import { closeMiniature as _closeMiniature, openMiniature as _openMiniature } from './features/miniature'; //ui

import cursorPolyfill from './ui/cursor-polyfill';
import BorderGradient from './ui/border-gradient';
import Selection from './ui/selection';
import Toolbar from './ui-toolbar/toolbar';
import detectTouch from './ui/detect-touch';
import Miniature from './ui-miniature/miniature';
import { ACTION_PAN, ACTION_ZOOM, ALIGN_BOTTOM, ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT, ALIGN_TOP, MODE_IDLE, MODE_PANNING, MODE_ZOOMING, POSITION_BOTTOM, POSITION_LEFT, POSITION_NONE, POSITION_RIGHT, POSITION_TOP, TOOL_AUTO, TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT } from './constants';
import { printMigrationTipsRelatedToProps } from "./migration-tips";
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import Slider from '@material-ui/lab/Slider';

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
      defaultValue: getDefaultValue(viewerWidth, viewerHeight, SVGWidth, SVGHeight, scaleFactorMin, scaleFactorMax)
    };
    _this.autoPanLoop = _this.autoPanLoop.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (process.env.NODE_ENV !== 'production') {
      printMigrationTipsRelatedToProps(props);
    }

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

      if (process.env.NODE_ENV !== 'production') {
        printMigrationTipsRelatedToProps(props);
      }

      if (prevProps.width !== props.width || prevProps.height !== props.height) {
        nextValue = setViewerSize(nextValue, props.width, props.height);
        needUpdate = true;
      }

      var _props$children$props = props.children.props,
          SVGWidth = _props$children$props.width,
          SVGHeight = _props$children$props.height;
      var _prevProps$children$p = prevProps.children.props,
          prevSVGWidth = _prevProps$children$p.width,
          prevSVGHeight = _prevProps$children$p.height;

      if (prevSVGWidth !== SVGWidth || prevSVGHeight !== prevSVGHeight) {
        nextValue = setSVGSize(nextValue, SVGWidth, SVGHeight);
        needUpdate = true;
      }

      if (prevProps.scaleFactorMin !== props.scaleFactorMin || prevProps.scaleFactorMax !== props.scaleFactorMax) {
        nextValue = setZoomLevels(nextValue, props.scaleFactorMin, props.scaleFactorMax);
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
      if (isValueValid(this.props.value)) return this.props.value;
      return this.state.defaultValue;
    }
  }, {
    key: "getTool",
    value: function getTool() {
      if (this.props.tool) return this.props.tool;
      return TOOL_NONE;
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
        if (onZoom && nextValue.lastAction === ACTION_ZOOM) onZoom(nextValue);
        if (onPan && nextValue.lastAction === ACTION_PAN) onPan(nextValue);
      }
    }
    /** ReactSVGPanZoom methods **/

  }, {
    key: "pan",
    value: function pan(SVGDeltaX, SVGDeltaY) {
      var nextValue = _pan(this.getValue(), SVGDeltaX, SVGDeltaY);

      this.setValue(nextValue);
    }
  }, {
    key: "zoom",
    value: function zoom(SVGPointX, SVGPointY, scaleFactor) {
      var nextValue = _zoom(this.getValue(), SVGPointX, SVGPointY, scaleFactor);

      this.setValue(nextValue);
    }
  }, {
    key: "fitSelection",
    value: function fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
      var nextValue = _fitSelection(this.getValue(), selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight);

      this.setValue(nextValue);
    }
  }, {
    key: "fitToViewer",
    value: function fitToViewer() {
      var SVGAlignX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ALIGN_LEFT;
      var SVGAlignY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALIGN_TOP;

      var nextValue = _fitToViewer(this.getValue(), SVGAlignX, SVGAlignY);

      this.setValue(nextValue);
    }
  }, {
    key: "zoomOnViewerCenter",
    value: function zoomOnViewerCenter(scaleFactor) {
      var nextValue = _zoomOnViewerCenter(this.getValue(), scaleFactor);

      this.setValue(nextValue);
    }
  }, {
    key: "setPointOnViewerCenter",
    value: function setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
      var nextValue = _setPointOnViewerCenter(this.getValue(), SVGPointX, SVGPointY, zoomLevel);

      this.setValue(nextValue);
    }
  }, {
    key: "reset",
    value: function reset() {
      var nextValue = _reset(this.getValue());

      this.setValue(nextValue);
    }
  }, {
    key: "openMiniature",
    value: function openMiniature() {
      var nextValue = _openMiniature(this.getValue());

      this.setValue(nextValue);
    }
  }, {
    key: "closeMiniature",
    value: function closeMiniature() {
      var nextValue = _closeMiniature(this.getValue());

      this.setValue(nextValue);
    }
    /** ReactSVGPanZoom internals **/

  }, {
    key: "handleViewerEvent",
    value: function handleViewerEvent(event) {
      var props = this.props,
          ViewerDOM = this.ViewerDOM;
      if (!([TOOL_NONE, TOOL_AUTO].indexOf(this.getTool()) >= 0)) return;
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
      onEventHandler(eventFactory(event, props.value, ViewerDOM));
    }
  }, {
    key: "autoPanLoop",
    value: function autoPanLoop() {
      var coords = {
        x: this.state.pointerX,
        y: this.state.pointerY
      };
      var nextValue = onInterval(null, this.ViewerDOM, this.getTool(), this.getValue(), this.props, coords);

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
      var panningWithToolAuto = tool === TOOL_AUTO && value.mode === MODE_PANNING && value.startX !== value.endX && value.startY !== value.endY;
      var cursor;
      if (tool === TOOL_PAN) cursor = cursorPolyfill(value.mode === MODE_PANNING ? 'grabbing' : 'grab');
      if (tool === TOOL_ZOOM_IN) cursor = cursorPolyfill('zoom-in');
      if (tool === TOOL_ZOOM_OUT) cursor = cursorPolyfill('zoom-out');
      if (panningWithToolAuto) cursor = cursorPolyfill('grabbing');
      var blockChildEvents = [TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT].indexOf(tool) >= 0;
      blockChildEvents = blockChildEvents || panningWithToolAuto;
      var touchAction = this.props.detectPinchGesture || [TOOL_PAN, TOOL_AUTO].indexOf(this.getTool()) !== -1 ? 'none' : undefined;
      var style = {
        display: 'block',
        cursor: cursor,
        touchAction: touchAction
      };
      return React.createElement("div", {
        style: _objectSpread({
          position: "relative",
          width: value.viewerWidth,
          height: value.viewerHeight,
          backgroundColor: "#101735"
        }, props.style),
        className: this.props.className
      }, React.createElement("div", {
        id: "controls"
      }, React.createElement("div", {
        className: "re-center",
        onClick: function onClick() {
          _this2.props.reCenter();
        }
      }, "Re-center"), React.createElement("div", {
        id: "zoom-bar"
      }, React.createElement(ZoomOut, {
        className: "zoom-out",
        onClick: function onClick(event, value) {
          _this2.props.handleSlider(event, value);

          var nextValue = zoomOut(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        }
      }), React.createElement(Slider, {
        onChange: function onChange(event, value) {
          _this2.props.handleSlider(event, value);

          var scale = (value + 5) / 100 * 2;
          var nextValue = onDrag(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props, scale);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        value: this.props.zoomFactor / 2 * 100 - 5,
        max: 100,
        min: 2,
        step: 0.1
      }), React.createElement(ZoomIn, {
        className: "zoom-in",
        onClick: function onClick(event, value) {
          _this2.props.handleSlider(event, value);

          var nextValue = zoomIn(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);

          _this2.setState({
            zoomFactor: value
          });
        }
      }))), React.createElement("svg", {
        ref: function ref(ViewerDOM) {
          return _this2.ViewerDOM = ViewerDOM;
        },
        width: value.viewerWidth,
        height: value.viewerHeight,
        style: style,
        onMouseDown: function onMouseDown(event) {
          var nextValue = _onMouseDown(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onMouseMove: function onMouseMove(event) {
          var _this2$ViewerDOM$getB = _this2.ViewerDOM.getBoundingClientRect(),
              left = _this2$ViewerDOM$getB.left,
              top = _this2$ViewerDOM$getB.top;

          var x = event.clientX - Math.round(left);
          var y = event.clientY - Math.round(top);

          var nextValue = _onMouseMove(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props, {
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
          var nextValue = _onMouseUp(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onClick: function onClick(event) {
          _this2.handleViewerEvent(event);
        },
        onDoubleClick: function onDoubleClick(event) {
          var nextValue = _onDoubleClick(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onWheel: function onWheel(event) {
          var nextValue = _onWheel(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onMouseEnter: function onMouseEnter(event) {
          if (detectTouch()) return;
          var nextValue = onMouseEnterOrLeave(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onMouseLeave: function onMouseLeave(event) {
          var nextValue = onMouseEnterOrLeave(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onTouchStart: function onTouchStart(event) {
          var nextValue = _onTouchStart(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchMove: function onTouchMove(event) {
          var nextValue = _onTouchMove(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          var nextValue = _onTouchEnd(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchCancel: function onTouchCancel(event) {
          var nextValue = _onTouchCancel(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);

          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        }
      }, React.createElement("g", {
        id: "viewer-group",
        transform: "".concat(toSVG(value), " translate(-10000, -10000)"),
        style: blockChildEvents ? {
          pointerEvents: "none"
        } : {}
      }, props.children.props.children), !([TOOL_NONE, TOOL_AUTO].indexOf(tool) >= 0 && props.detectAutoPan && value.focus) ? null : React.createElement("g", {
        style: {
          pointerEvents: "none"
        }
      }, !(pointerY <= 20) ? null : React.createElement(BorderGradient, {
        direction: POSITION_TOP,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.viewerWidth - pointerX <= 20) ? null : React.createElement(BorderGradient, {
        direction: POSITION_RIGHT,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.viewerHeight - pointerY <= 20) ? null : React.createElement(BorderGradient, {
        direction: POSITION_BOTTOM,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.focus && pointerX <= 20) ? null : React.createElement(BorderGradient, {
        direction: POSITION_LEFT,
        width: value.viewerWidth,
        height: value.viewerHeight
      })), !(value.mode === MODE_ZOOMING) ? null : React.createElement(Selection, {
        startX: value.startX,
        startY: value.startY,
        endX: value.endX,
        endY: value.endY
      })), props.toolbarProps.position === POSITION_NONE ? null : React.createElement(CustomToolbar, _extends({}, this.props.toolbarProps, {
        value: value,
        onChangeValue: function onChangeValue(value) {
          return _this2.setValue(value);
        },
        tool: tool,
        onChangeTool: function onChangeTool(tool) {
          return _this2.props.onChangeTool(tool);
        }
      })), props.miniatureProps.position === POSITION_NONE ? null : React.createElement(CustomMiniature, _extends({}, this.props.miniatureProps, {
        value: value,
        onChangeValue: function onChangeValue(value) {
          return _this2.setValue(value);
        },
        SVGBackground: this.props.SVGBackground
      }), props.children.props.children));
    }
  }]);

  return ReactSVGPanZoom;
}(React.Component);

export { ReactSVGPanZoom as default };
ReactSVGPanZoom.propTypes = {
  /**************************************************************************/

  /*  Viewer configuration                                                  */

  /**************************************************************************/
  //width of the viewer displayed on screen
  width: PropTypes.number.isRequired,
  //height of the viewer displayed on screen
  height: PropTypes.number.isRequired,
  //value of the viewer (current camera view)
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.shape({
    version: PropTypes.oneOf([2]).isRequired,
    mode: PropTypes.oneOf([MODE_IDLE, MODE_PANNING, MODE_ZOOMING]).isRequired,
    focus: PropTypes.bool.isRequired,
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    c: PropTypes.number.isRequired,
    d: PropTypes.number.isRequired,
    e: PropTypes.number.isRequired,
    f: PropTypes.number.isRequired,
    viewerWidth: PropTypes.number.isRequired,
    viewerHeight: PropTypes.number.isRequired,
    SVGWidth: PropTypes.number.isRequired,
    SVGHeight: PropTypes.number.isRequired,
    startX: PropTypes.number,
    startY: PropTypes.number,
    endX: PropTypes.number,
    endY: PropTypes.number,
    miniatureOpen: PropTypes.bool.isRequired
  })]).isRequired,
  //handler something changed
  onChangeValue: PropTypes.func.isRequired,
  //current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
  tool: PropTypes.oneOf([TOOL_AUTO, TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT]).isRequired,
  //handler tool changed
  onChangeTool: PropTypes.func.isRequired,

  /**************************************************************************/

  /* Customize style                                                        */

  /**************************************************************************/
  //background of the viewer
  background: PropTypes.string,
  //background of the svg
  SVGBackground: PropTypes.string,
  //style of the svg
  SVGStyle: PropTypes.object,
  //CSS style of the Viewer
  style: PropTypes.object,
  //className of the Viewer
  className: PropTypes.string,

  /**************************************************************************/

  /* Detect events                                                          */

  /**************************************************************************/
  //perform zoom operation on mouse scroll
  detectWheel: PropTypes.bool,
  //perform PAN if the mouse is on viewer border
  detectAutoPan: PropTypes.bool,
  //perform zoom operation on pinch gesture
  detectPinchGesture: PropTypes.bool,
  //toolbar position
  toolbarPosition: PropTypes.oneOf([POSITION_NONE, POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]),
  //handler zoom level changed
  onZoom: PropTypes.func,
  //handler pan action performed
  onPan: PropTypes.func,
  //handler click
  onClick: PropTypes.func,
  //handler double click
  onDoubleClick: PropTypes.func,
  //handler mouseup
  onMouseUp: PropTypes.func,
  //handler mousemove
  onMouseMove: PropTypes.func,
  //handler mousedown
  onMouseDown: PropTypes.func,

  /**************************************************************************/

  /* Some advanced configurations                                           */

  /**************************************************************************/
  //if disabled the user can move the image outside the viewer
  preventPanOutside: PropTypes.bool,
  //how much scale in or out
  scaleFactor: PropTypes.number,
  //how much scale in or out on mouse wheel (requires detectWheel enabled)
  scaleFactorOnWheel: PropTypes.number,
  // maximum amount of scale a user can zoom in to
  scaleFactorMax: PropTypes.number,
  // minimum amount of a scale a user can zoom out of
  scaleFactorMin: PropTypes.number,
  //modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
  modifierKeys: PropTypes.array,
  //Turn off zoom on double click
  disableDoubleClickZoomWithToolAuto: PropTypes.bool,

  /**************************************************************************/

  /* Miniature configurations                                                 */

  /**************************************************************************/
  //override miniature component
  customMiniature: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  //miniature props
  miniatureProps: PropTypes.shape({
    position: PropTypes.oneOf([POSITION_NONE, POSITION_RIGHT, POSITION_LEFT]),
    background: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }),

  /**************************************************************************/

  /* Toolbar configurations                                                 */

  /**************************************************************************/
  //override toolbar component
  customToolbar: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  //toolbar props
  toolbarProps: PropTypes.shape({
    position: PropTypes.oneOf([POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]),
    SVGAlignX: PropTypes.oneOf([ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT]),
    SVGAlignY: PropTypes.oneOf([ALIGN_CENTER, ALIGN_TOP, ALIGN_BOTTOM])
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

    if (React.Children.count(prop) !== 1 || types.indexOf(prop.type) === -1) {
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
  customToolbar: Toolbar,
  toolbarProps: {},
  customMiniature: Miniature,
  miniatureProps: {}
};