import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import "./index.css";

export default function App() {
  const [randomQuote, setRandomQuote] = useState([]);
  const [aTrig, setATrig] = useState("");
  const [toggle, setToggle] = useState(false);

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

  function handleMobileClick(e) {
    setATrig(e.target.id);
    setToggle((prev) => !prev)
  }

  function handleHamburgerClick() {
    setToggle((prev) => !prev)
  }

  return (
    <>
      <Navigation 
        handleClick={handleClick}
        handleMobileClick={handleMobileClick} 
        handleHamburgerClick={handleHamburgerClick}
        toggle={toggle}
      />

      <MainContent
        aTrig={aTrig}
        newQuote={randomQuote[0]?.content}
        quoteAuthor={randomQuote[0]?.author}
      />
    </>
  );
}
