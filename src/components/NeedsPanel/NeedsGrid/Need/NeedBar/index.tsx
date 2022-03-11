import React, {useState, useEffect} from "react";
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
  const [boundingRectProps, setBoundingRectProps] = useState({x: null, width: null});

  const setNewValueBasedOnMousePosition = (
    dragClientX: null | number,
    boundingRectProps: {x: null | number, width: null | number}
  ) => {
    if (!dragClientX || !boundingRectProps.x || !boundingRectProps.width) return;
    const newValue = (dragClientX - boundingRectProps.x) / boundingRectProps.width;
    const cappedNewValue = Math.max(Math.min(newValue, 1), 0);
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

  const linearInterpolate = (a: number, b: number, progress: number) => {
    return a + (b - a) * progress;
  }

  const reluInterpolate = (a: number, b: number, progress: number) => {
    /* interpolation using a relu-shaped interpolation function: no change until DISCONTINUITY_PROGRESS is reached, then
    linear interpolation thereafter */

    const DISCONTINUITY_PROGRESS = 0.3;
    return a + (b - a) * Math.max((progress - DISCONTINUITY_PROGRESS), 0) / (1-DISCONTINUITY_PROGRESS);
  }

  const logBoostedValue = Math.log(value+1)/0.7;

  const gdr = linearInterpolate(68, 28, logBoostedValue);
  const gdg = linearInterpolate(68, 136, logBoostedValue);
  const gdb = linearInterpolate(68, 34, logBoostedValue);
  const glr = linearInterpolate(119, 96, logBoostedValue);
  const glg = linearInterpolate(119, 196, logBoostedValue);
  const glb = linearInterpolate(119, 94, logBoostedValue);

  const logBoostedInverseValue = Math.log((1-value)+1)/0.7;

  const ydr = reluInterpolate(68, 175, logBoostedInverseValue);
  const ydg = reluInterpolate(68, 156, logBoostedInverseValue);
  const ydb = reluInterpolate(68, 44, logBoostedInverseValue);
  const ylr = reluInterpolate(119, 215, logBoostedInverseValue);
  const ylg = reluInterpolate(119, 196, logBoostedInverseValue);
  const ylb = reluInterpolate(119, 74, logBoostedInverseValue);

  const greenBackgroundGradient = `linear-gradient(0deg, rgba(${gdr}, ${gdg}, ${gdb}, 1) 0%, rgba(${glr}, ${glg}, ${glb}, 1) 40%)`
  const yellowBackgroundGradient = `linear-gradient(0deg, rgba(${ydr}, ${ydg}, ${ydb}, 1) 0%, rgba(${ylr}, ${ylg}, ${ylb}, 1) 40%)`

  return (
    <div className="need-bar__body">
      <div className="need-bar__bar" onMouseDown={handleMouseDown} style={{
        background: yellowBackgroundGradient
      }}>
        <div className="need-bar__left-highlight"></div>
        <div className="need-bar__reflection"></div>
        <div className="need-bar__reflection-blur"></div>
        <div className="need-bar__inner-green" style={{
          width: `${width}%`,
          background: greenBackgroundGradient
        }}></div>
        <div className="need-bar__border"></div>
      </div>
    </div>
  )
}

export default NeedBar;