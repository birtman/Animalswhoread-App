import React from "react";
import "./TickerItem.scss";
import TickerItem from "./TickerItem";

const texts = [
  {
    text: "Stand up!"
  },
  {
    text: "Fight back!"
  },
  {
    text: "No Humans"
  }
];

const Ticker = () => (
  <main className="ticker-wrap w-100">
    <div className="ticker">
      {texts.map(item => (
        <TickerItem key={item.text} text={item.text} />
      ))}
    </div>
  </main>
);

export default Ticker;
