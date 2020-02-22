import React from "react";
import "./TickerItem.scss";
import TickerItem from "./TickerItem";

const texts = [
  {
    text: "ANIMALS ONLY!"
  },
  {
    text: "NO HUMANS!"
  },
  {
    text: "SERIOUSLY!"
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
