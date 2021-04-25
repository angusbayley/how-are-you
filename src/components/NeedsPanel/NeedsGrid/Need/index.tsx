import React from "react";
import NeedBar from "./NeedBar";
import "./style.scss"
import { NeedSetterType } from "./../../../NeedsPanel";

type NeedsPropsType = {
  needType: String;
  states: NeedSetterType
}

const Need = (props: NeedsPropsType) => {
  const { needType, states } = props;
  return (
    <div className="need">
      <div className="need__need-title">{needType}</div>
      <NeedBar states={states}/>
    </div>
  )
}

export default Need;