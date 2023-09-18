import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './index.css'
import './puzzle-styles.css'

export default function App() {

  const [randomQuote, setRandomQuote] = useState([])
  const [aTrig, setATrig] = useState("")

  useEffect(() => {
    async function getQuotes() {
        const response = await fetch("https://api.quotable.io/quotes/random?tags=technology");
        const data = await response.json();
        setRandomQuote(data)
    }
    getQuotes()
  }, [])

  function handleClick(e){
    setATrig(e.target.id)
  }

  return (
    <div className='page-content'>
        <Navigation 
          handleClick={handleClick}
        />

        <MainContent 
          handleClick={handleClick}
          clickVal={aTrig}
          newQuote={randomQuote[0]?.content}
          quoteAuthor={randomQuote[0]?.author}
        />

        <Footer 
          handleClick={handleClick}
        />
    </div>
  )
}
