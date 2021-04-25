import React from "react";
import Need from "./Need";
import { NeedsValuesType } from "./../../NeedsPanel";
import "./style.scss";

type NeedsGridPropsType = {
  needsValues: NeedsValuesType;
}

const NeedsGrid = (props: NeedsGridPropsType) => {
  const { needsValues } = props
  return (
    <div className="needs-grid">
      <div className="needs-grid__needs-column">
        <Need
          needType="Hunger"
          states={needsValues.hunger}/>
        <Need
          needType="Comfort"
          states={needsValues.comfort}/>
        <Need
          needType="Bladder"
          states={needsValues.bladder}/>
        <Need
          needType="Energy"
          states={needsValues.energy}/>
      </div>
      <div className="needs-grid__needs-column">
        <Need
          needType="Fun"
          states={needsValues.fun}/>
        <Need
          needType="Social"
          states={needsValues.social}/>
        <Need
          needType="Hygiene"
          states={needsValues.hygiene}/>
        <Need
          needType="Environment"
          states={needsValues.environment}/>
      </div>
    </div>
  )
}

export default NeedsGrid