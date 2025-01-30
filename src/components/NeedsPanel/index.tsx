import React, { useState, Dispatch, SetStateAction } from "react";
import NeedsGrid from "./NeedsGrid";
import OverallMoodGauge from "./OverallMoodGauge";
import "./style.scss"
import panelBase from "./panel-base-cleared.png";

type NeedStateType = [number, Dispatch<SetStateAction<number>>]

type NeedsStateType = {
  [name:string]: NeedStateType
}

const NeedsPanel = () => {
  const DEFAULT_SLIDER_VALUE = 0.7;
  const needsState = {} as NeedsStateType
  needsState["hunger"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["comfort"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["bladder"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["energy"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["fun"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["social"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["hygiene"] = useState(DEFAULT_SLIDER_VALUE);
  needsState["environment"] = useState(DEFAULT_SLIDER_VALUE);

  return (
    <div className="needs-panel">
      <div className="needs-panel__mood-gauge-container">
        <OverallMoodGauge needsState={needsState}/>
      </div>
      <img src={panelBase} alt="panel" className="needs-panel__panel-base" width="735px"/>
      <div className="needs-panel__title">Needs</div>
      <div className="needs-panel__needs-grid-container">
        <NeedsGrid needsState={needsState}/>
      </div>
    </div>
  )
}

export default NeedsPanel;
export type { NeedsStateType, NeedStateType };