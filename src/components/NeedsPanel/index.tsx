import React, { useState } from "react";
import NeedsGrid from "./NeedsGrid";
import OverallMoodGauge from "./OverallMoodGauge";
import "./style.scss"
import panelBase from "./panel-base.svg";

type NeedSetterType = {
  value: number,
  setValue: (value: number) => void
}

type NeedsValuesType = {
  [name:string]: NeedSetterType
}

const NeedsPanel = () => {
  const DEFAULT_VALUE = 0.7;
  const needsValues = {} as NeedsValuesType
  // TODO: better way to set this?
  const [hungerValue, setHungerValue] = useState(DEFAULT_VALUE);
  needsValues["hunger"] = { value: hungerValue, setValue: setHungerValue }
  const [comfortValue, setComfortValue] = useState(DEFAULT_VALUE);
  needsValues["comfort"] = { value: comfortValue, setValue: setComfortValue }
  const [bladderValue, setBladderValue] = useState(DEFAULT_VALUE);
  needsValues["bladder"] = { value: bladderValue, setValue: setBladderValue }
  const [energyValue, setEnergyValue] = useState(DEFAULT_VALUE);
  needsValues["energy"] = { value: energyValue, setValue: setEnergyValue }
  const [funValue, setFunValue] = useState(DEFAULT_VALUE);
  needsValues["fun"] = { value: funValue, setValue: setFunValue }
  const [socialValue, setSocialValue] = useState(DEFAULT_VALUE);
  needsValues["social"] = { value: socialValue, setValue: setSocialValue }
  const [hygieneValue, setHygieneValue] = useState(DEFAULT_VALUE);
  needsValues["hygiene"] = { value: hygieneValue, setValue: setHygieneValue }
  const [environmentValue, setEnvironmentValue] = useState(DEFAULT_VALUE);
  needsValues["environment"] = { value: environmentValue, setValue: setEnvironmentValue }

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

  return (
    <div className="needs-panel">
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
export type { NeedsValuesType };