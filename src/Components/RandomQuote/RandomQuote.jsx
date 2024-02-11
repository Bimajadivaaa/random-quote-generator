import { React, useState, useEffect } from "react";
import "./RandomQuote.css";
import logo_x from "../Assets/logo_x.jpeg";
import reload from "../Assets/reload.png";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState({
    text: "",
    author: "",
  });

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data[Math.floor(Math.random() * data.length)]);
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  const random = () => {
    loadQuotes();
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quotes.text} - ${
        quotes.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="container">
      <h1>Random Quotes Generator</h1>
      <div className="quote">"{quotes.text}"</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quotes.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={reload}
              alt="reload"
              width={30}
              height={30}
              onClick={() => {
                random();
              }}
            />
            <img
              src={logo_x}
              alt="x"
              width={30}
              height={30}
              onClick={() => {
                twitter();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
