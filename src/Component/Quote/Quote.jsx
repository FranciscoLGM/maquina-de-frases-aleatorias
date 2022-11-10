import { useState } from "react";
import "../../App.css";
import quotes from "../../assets/data/quotes.json";

const Quote = () => {
  // Color

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];
  const bgc = document.querySelector("body");
  bgc.setAttribute("style", `background-color: ${color}`);

  // Cita

  const quote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=`;
  const [cita, setCita] = useState({
    quote: quote()?.quote,
  });

  const UpdateQuote = () => {
    setCita((previousState) => {
      return {
        ...previousState,
        quote: quote()?.quote,
      };
    });
  };
  return (
    <main>
      <h2 className="card-title pb-3" id="text" style={{ color: color }}>
        <i className="bi bi-quote"></i>
        {cita.quote[0]}
      </h2>

      <p
        className="card-text text-end pt-3 pb-3"
        id="author"
        style={{ color: color }}
      >
        - {cita.quote[1]}
      </p>
      <div className="footer d-flex justify-content-between">
        <a
          href={`${href}"${cita.quote[0]}" -${cita.quote[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Tweet this quote!"
          className="btn"
          id="tweet-quote"
          style={{ backgroundColor: color, color: "#f5f5f5" }}
        >
          <i className="bi bi-twitter"></i>
        </a>
        <button
          className="btn"
          id="new-quote"
          style={{ backgroundColor: color, color: "#f5f5f5" }}
          type="button"
          onClick={UpdateQuote}
        >
          Nueva Cita
        </button>
      </div>
    </main>
  );
};

export default Quote;
