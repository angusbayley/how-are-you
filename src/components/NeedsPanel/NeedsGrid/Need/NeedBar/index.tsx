import React from "react";
import "./style.scss";

type NeedBarPropsType = {
  value: number;
  setValue: (value: number) => void;
}

const NeedBar = (props: NeedBarPropsType) => {
  const { value, setValue } = props;
  const width = value * 100;
  const handleWidth = 25;
  let dragCounter = 0;

  const handleBarDrag = (e: any) => {
    // : DragEventHandler<HTMLDivElement>
    // last event of drag event stream has a clientX of 0 if you drop on another element, we don't want this
    if (e.screenX === 0) return;
    // @ts-ignore
    const boundingRect = e.target.getBoundingClientRect();
    const newValue = (e.clientX - boundingRect.x) / boundingRect.width;
    const cappedNewValue = Math.max(Math.min(newValue, 1), 0)
    setValue(cappedNewValue);
  }

  const handleDragStart = (e: any) => {
    // : DragEventHandler<HTMLDivElement>
    // empty element overrides the ghost image that the HTML draggable API initiates
    const el = document.createElement("div")
    document.body.appendChild(el);
    e.dataTransfer.setDragImage(el, 0, 0);
  }

  return (
    <div className="need-bar__body">
      <div className="need-bar__bar">
        <div className="need-bar__left-highlight"></div>
        <div className="need-bar__reflection"></div>
        <div className="need-bar__reflection-blur"></div>
        <div className="need-bar__inner-green"></div>
        <div className="need-bar__border"></div>
      </div>
    </div>
  )
}

export default NeedBar;