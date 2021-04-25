import React, { useState } from "react";
import NeedsGrid from "./NeedsGrid";
import OverallMoodGauge from "./OverallMoodGauge";
import "./style.scss"
import panelBase from "./panel-base.svg";

type NeedSetterType = {
  value: number,
  setValue: (value: number) => void,
  isMouseDown: boolean,
  setIsMouseDown: (value: boolean) => void,
  dragClientX: number | null
}

type NeedsValuesType = {
  [name:string]: NeedSetterType
}

const NeedsPanel = () => {
  const DEFAULT_SLIDER_VALUE = 0.7;
  const needsValues = {} as NeedsValuesType
  const [dragClientX, setDragClientX] = useState(null);
  // TODO: better way to set this?
  const [hungerValue, setHungerValue] = useState(DEFAULT_SLIDER_VALUE);
  const [hungerIsMouseDown, setHungerIsMouseDown] = useState(false);
  needsValues["hunger"] = {
    value: hungerValue,
    setValue: setHungerValue,
    isMouseDown: hungerIsMouseDown,
    setIsMouseDown: setHungerIsMouseDown,
    dragClientX: dragClientX
  }
  const [comfortValue, setComfortValue] = useState(DEFAULT_SLIDER_VALUE);
  const [comfortIsMouseDown, setComfortIsMouseDown] = useState(false);
  needsValues["comfort"] = {
    value: comfortValue,
    setValue: setComfortValue,
    isMouseDown: comfortIsMouseDown,
    setIsMouseDown: setComfortIsMouseDown,
    dragClientX: dragClientX
  }
  const [bladderValue, setBladderValue] = useState(DEFAULT_SLIDER_VALUE);
  const [bladderIsMouseDown, setBladderIsMouseDown] = useState(false);
  needsValues["bladder"] = {
    value: bladderValue,
    setValue: setBladderValue,
    isMouseDown: bladderIsMouseDown,
    setIsMouseDown: setBladderIsMouseDown,
    dragClientX: dragClientX
  }
  const [energyValue, setEnergyValue] = useState(DEFAULT_SLIDER_VALUE);
  const [energyIsMouseDown, setEnergyIsMouseDown] = useState(false);
  needsValues["energy"] = {
    value: energyValue,
    setValue: setEnergyValue,
    isMouseDown: energyIsMouseDown,
    setIsMouseDown: setEnergyIsMouseDown,
    dragClientX: dragClientX
  }
  const [funValue, setFunValue] = useState(DEFAULT_SLIDER_VALUE);
  const [funIsMouseDown, setFunIsMouseDown] = useState(false);
  needsValues["fun"] = {
    value: funValue,
    setValue: setFunValue,
    isMouseDown: funIsMouseDown,
    setIsMouseDown: setFunIsMouseDown,
    dragClientX: dragClientX
  }
  const [socialValue, setSocialValue] = useState(DEFAULT_SLIDER_VALUE);
  const [socialIsMouseDown, setSocialIsMouseDown] = useState(false);
  needsValues["social"] = {
    value: socialValue,
    setValue: setSocialValue,
    isMouseDown: socialIsMouseDown,
    setIsMouseDown: setSocialIsMouseDown,
    dragClientX: dragClientX
  }
  const [hygieneValue, setHygieneValue] = useState(DEFAULT_SLIDER_VALUE);
  const [hygieneIsMouseDown, setHygieneIsMouseDown] = useState(false);
  needsValues["hygiene"] = {
    value: hygieneValue,
    setValue: setHygieneValue,
    isMouseDown: hygieneIsMouseDown,
    setIsMouseDown: setHygieneIsMouseDown,
    dragClientX: dragClientX
  }
  const [environmentValue, setEnvironmentValue] = useState(DEFAULT_SLIDER_VALUE);
  const [environmentIsMouseDown, setEnvironmentIsMouseDown] = useState(false);
  needsValues["environment"] = {
    value: environmentValue,
    setValue: setEnvironmentValue,
    isMouseDown: environmentIsMouseDown,
    setIsMouseDown: setEnvironmentIsMouseDown,
    dragClientX: dragClientX
  }

  const mood = (
    hungerValue
    + comfortValue
    + bladderValue
    + energyValue
    + funValue
    + socialValue
    + hygieneValue
    + environmentValue
  ) / 8;

  const handleOnMouseUp = (e: any) => {
    setHungerIsMouseDown(false);
    setComfortIsMouseDown(false);
    setBladderIsMouseDown(false);
    setEnergyIsMouseDown(false);
    setFunIsMouseDown(false);
    setSocialIsMouseDown(false);
    setHygieneIsMouseDown(false);
    setEnvironmentIsMouseDown(false);
    setDragClientX(null);
  }

  const isMouseDown = () => {
    return hungerIsMouseDown ||
      comfortIsMouseDown ||
      bladderIsMouseDown ||
      energyIsMouseDown ||
      funIsMouseDown ||
      socialIsMouseDown ||
      hygieneIsMouseDown ||
      environmentIsMouseDown
  }

  const handleMouseMove = (e: any) => {
    if (!isMouseDown()) return;
    setDragClientX(e.clientX);
  }

  return (
    <div className="needs-panel"
      onMouseUp={handleOnMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="needs-panel__mood-gauge-container">
        <OverallMoodGauge mood={mood}/>
      </div>
      <img src={panelBase} alt="panel" />
      <div className="needs-panel__title">Needs</div>
      <div className="needs-panel__needs-grid-container">
        <NeedsGrid needsValues={needsValues}/>
      </div>
    </div>
  )
}

export default NeedsPanel;
export type { NeedsValuesType, NeedSetterType };