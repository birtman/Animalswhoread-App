import React from "react";
import "./TickerItem.scss";

function TickerItem(props) {
  return <div className="ticker__item">{props.text}</div>;
}

export default TickerItem;
