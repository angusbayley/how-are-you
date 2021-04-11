import React from "react";
import "./style.scss";

type PropsType = {
  mood: number;
}

const OverallMoodGauge = (props: PropsType) => {

  const { mood } = props;
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