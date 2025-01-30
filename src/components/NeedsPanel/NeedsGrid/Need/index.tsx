import React from "react";
import NeedBar from "./NeedBar";
import "./style.scss"
import { NeedStateType } from "./../../../NeedsPanel";

type NeedsPropsType = {
  needName: String;
  state: NeedStateType
}

const Need = (props: NeedsPropsType) => {
  const { needName, state } = props;
  return (
    <div className="need">
      <div className="need__need-title">{needName}</div>
      <NeedBar state={state}/>
    </div>
  )
}

export default Need;