import React, {DragEventHandler, useState, useEffect} from "react";
import { NeedSetterType } from "./../../../../NeedsPanel";
import "./style.scss";

const NeedBar = (props: { states: NeedSetterType }) => {
  const {
    value,
    setValue,
    isMouseDown,
    setIsMouseDown,
    dragClientX
  } = props.states;
  const width = value * 100;
  const handleWidth = 25;
  const [boundingRectProps, setBoundingRectProps] = useState({x: null, width: null});

  const setNewValueBasedOnMousePosition = (
    dragClientX: null | number,
    boundingRectProps: {x: null | number, width: null | number}
  ) => {
    if (!dragClientX || !boundingRectProps.x || !boundingRectProps.width) return;
    const newValue = (dragClientX - boundingRectProps.x) / boundingRectProps.width;
    const cappedNewValue = Math.max(Math.min(newValue, 1), 0)
    setValue(cappedNewValue);
  }

  useEffect(() => {
    if (isMouseDown) setNewValueBasedOnMousePosition(dragClientX, boundingRectProps);
  });

  const handleMouseDown = (e: any) => {
    const boundingRect = e.target.getBoundingClientRect();
    setBoundingRectProps({
      x: boundingRect.x,
      width: boundingRect.width
    });
    setIsMouseDown(true);
    setNewValueBasedOnMousePosition(e.clientX, boundingRect);
  }

  return (
    <div className="need-bar__body">
      <div className="need-bar__bar" onMouseDown={handleMouseDown}>
        <div className="need-bar__left-highlight"></div>
        <div className="need-bar__reflection"></div>
        <div className="need-bar__reflection-blur"></div>
        <div className="need-bar__inner-green" style={{width: `${width}%`}}></div>
        <div className="need-bar__border"></div>
      </div>
    </div>
  )
}

export default NeedBar;