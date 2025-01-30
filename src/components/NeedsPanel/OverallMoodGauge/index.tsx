import React from "react";
import "./style.scss";
import { NeedsStateType, NeedStateType } from "./../../NeedsPanel";

type PropsType = {
  needsState: NeedsStateType
}

const OverallMoodGauge = (props: PropsType) => {

  const { needsState } = props;
  
  const get = (stateSetterAndGetter: NeedStateType) => {
    return stateSetterAndGetter[0];
  }

  const mood = (
    get(needsState["hunger"])
    + get(needsState["comfort"])
    + get(needsState["bladder"])
    + get(needsState["energy"])
    + get(needsState["fun"])
    + get(needsState["social"])
    + get(needsState["hygiene"])
    + get(needsState["environment"])
  ) / 8;
  const positiveHeight = Math.max(mood - 0.5, 0) * 2 * 100;
  const negativeHeight = Math.max(0.5 - mood, 0) * 2 * 100;

  return (
    <div className="overall-mood-gauge">
      <div className="overall-mood-gauge__positive-container">
        <div
          className="overall-mood-gauge__positive"
          style={{height: `${positiveHeight}%`}}
        />
        <div className="overall-mood-gauge__positive-reflection-spot"/>
        <div className="overall-mood-gauge__positive-reflection-line"/>
      </div>
      <div className="overall-mood-gauge__negative-container">
        <div
          className="overall-mood-gauge__negative"
          style={{height: `${negativeHeight}%`}}
        />
        <div className="overall-mood-gauge__negative-reflection-line"/>
      </div>
    </div>
  )
}

export default OverallMoodGauge