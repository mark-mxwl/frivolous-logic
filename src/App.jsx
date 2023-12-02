import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import "./index.css";

export default function App() {
  const [randomQuote, setRandomQuote] = useState([]);
  const [aTrig, setATrig] = useState("");

  useEffect(() => {
    
    async function getQuotes() {
      try {
        const response = await fetch(
          "https://api.quotable.io/quotes/random?tags=technology"
        );
        const data = await response.json();
        setRandomQuote(data);
      } catch (error) {
          console.log('Error:', error)
      }
    }
    getQuotes();

  }, []);

  function handleClick(e) {
    setATrig(e.target.id);
  }

  return (
    <>
      <Navigation handleClick={handleClick} />

      <MainContent
        handleClick={handleClick}
        aTrig={aTrig}
        newQuote={randomQuote[0]?.content}
        quoteAuthor={randomQuote[0]?.author}
      />
    </>
  );
}
