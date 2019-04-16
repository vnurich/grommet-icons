function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var TopCorner = function TopCorner(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TopCorner"
  }, props), React.createElement("polyline", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "4 16 16 16 16 4",
    transform: "rotate(180 10 10)"
  }));
};