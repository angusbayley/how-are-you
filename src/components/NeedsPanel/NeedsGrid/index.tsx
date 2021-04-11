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
          value={needsValues.hunger.value}
          setValue={needsValues.hunger.setValue}/>
        <Need
          needType="Comfort"
          value={needsValues.comfort.value}
          setValue={needsValues.comfort.setValue}/>
        <Need
          needType="Bladder"
          value={needsValues.bladder.value}
          setValue={needsValues.bladder.setValue}/>
        <Need
          needType="Energy"
          value={needsValues.energy.value}
          setValue={needsValues.energy.setValue}/>
      </div>
      <div className="needs-grid__needs-column">
        <Need
          needType="Fun"
          value={needsValues.fun.value}
          setValue={needsValues.fun.setValue}/>
        <Need
          needType="Social"
          value={needsValues.social.value}
          setValue={needsValues.social.setValue}/>
        <Need
          needType="Hygiene"
          value={needsValues.hygiene.value}
          setValue={needsValues.hygiene.setValue}/>
        <Need
          needType="Environment"
          value={needsValues.environment.value}
          setValue={needsValues.environment.setValue}/>
      </div>
    </div>
  )
}

export default NeedsGrid