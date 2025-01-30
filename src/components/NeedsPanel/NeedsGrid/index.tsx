import React from "react";
import Need from "./Need";
import { NeedsStateType } from "./../../NeedsPanel";
import "./style.scss";

type NeedsGridPropsType = {
  needsState: NeedsStateType;
}

const NeedsGrid = (props: NeedsGridPropsType) => {
  const { needsState } = props
  return (
    <div className="needs-grid">
      <div className="needs-grid__needs-column">
        <Need
          needName="Hunger"
          state={needsState.hunger}/>
        <Need
          needName="Comfort"
          state={needsState.comfort}/>
        <Need
          needName="Bladder"
          state={needsState.bladder}/>
        <Need
          needName="Energy"
          state={needsState.energy}/>
      </div>
      <div className="needs-grid__needs-column">
        <Need
          needName="Fun"
          state={needsState.fun}/>
        <Need
          needName="Social"
          state={needsState.social}/>
        <Need
          needName="Hygiene"
          state={needsState.hygiene}/>
        <Need
          needName="Environment"
          state={needsState.environment}/>
      </div>
    </div>
  )
}

export default NeedsGrid