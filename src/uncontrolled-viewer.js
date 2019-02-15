import React from "react";
import ReactSVGPanZoom from './viewer'
import PropTypes from "prop-types";
import {TOOL_NONE} from "./constants";

export default class UncontrolledReactSVGPanZoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue || {a: 1, d: 1},
      tool: props.defaultTool || TOOL_NONE,
    }

    this.Viewer = null;
    this.changeTool = this.changeTool.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.reCenter = this.reCenter.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
  }

  changeTool(tool) {
    this.setState({tool})
  }

  changeValue(value) {
    this.setState({value})
  }

  pan(SVGDeltaX, SVGDeltaY) {
    this.Viewer.pan(SVGDeltaX, SVGDeltaY)
  }

  zoom(SVGPointX, SVGPointY, scaleFactor) {
    this.Viewer.zoom(SVGPointX, SVGPointY, scaleFactor)
  }

  fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
    this.Viewer.fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight)
  }

  fitToViewer(SVGAlignX, SVGAlignY) {
    this.Viewer.fitToViewer(SVGAlignX, SVGAlignY)
  }

  zoomOnViewerCenter(scaleFactor) {
    this.Viewer.zoomOnViewerCenter(scaleFactor)
  }

  setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
    this.Viewer.setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel)
  }

  reset() {
    this.Viewer.reset()
  }

  openMiniature() {
    this.Viewer.openMiniature()
  }

  closeMiniature() {
    this.Viewer.closeMiniature()
  }

  reCenter() {
    this.setState({
      value: {
        "a": 1,
        "c": 0,
        "e": 0,
        "b": 0,
        "d": 1,
        "f": 0
      }
    })
  }
  handleSlider(event, value) {
    let scale = ((value + 5)/100)*2
    if(scale >= 0.2) {
      this.setState({
        value: {
          "a": scale,
          "d": scale
        }
      })
    }
  }

  render() {
    const {width, height, onChangeTool, onChangeValue, ...props} = this.props
    const {tool, value} = this.state
    return (
      <div id="uncontrolled" onClick={() => console.log('UC', this.state)}>

      <ReactSVGPanZoom
        width={width} height={height}
        tool={tool} onChangeTool={this.changeTool}
        value={value} onChangeValue={this.changeValue}
        ref={Viewer => this.Viewer = Viewer}
        reCenter={this.reCenter}
        zoomFactor={this.state.value.a}
        zoom={this.state.zoom}
        scaleFactorMax={2.5}
        scaleFactorMin={0.2}
        handleSlider={this.handleSlider}
        {...props}
        />
      </div>
    )
  }
}

UncontrolledReactSVGPanZoom.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,

  defaultValue: PropTypes.object,
  defaultTool: PropTypes.string,
}
