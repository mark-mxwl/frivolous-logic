import Puzzles from './Puzzles'
import Lore from './Lore'
import Games from './Games'

export default function MainContent(props){
    const { clickVal, newQuote, quoteAuthor } = props
    
    if(clickVal === "puzzles"){
            return (
                <Puzzles />
            )
        } else if(clickVal === "lore"){
            return (
                <Lore />
            )
        } else if(clickVal === "games"){
            return (
                <Games />
            )
        } else {
            return (
                <div>
                    <h1>THE RIGHT TO BE AWESOME.</h1><br />
                    <div className="quote-box">
                        <h2>"{newQuote}"</h2>
                        <h3>- {quoteAuthor}</h3>
                    </div>
                </div>
            )
        }
}