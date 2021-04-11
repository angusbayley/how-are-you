import React from "react";
import NeedBar from "./NeedBar";
import "./style.scss"

type NeedsPropsType = {
  needType: String;
  value: number;
  setValue: (value: number) => void;
}

const Need = (props: NeedsPropsType) => {
  const { needType, value, setValue } = props; 
  return (
    <div className="need">
      <div className="need__need-title">{needType}</div>
      <NeedBar value={value} setValue={setValue}/>
    </div>
  )
}

export default Need;