import Puzzles from './Puzzles'
import Lore from './Lore'
import Games from './Games'
import DevConnect from './DevConnect'

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
        } else if(clickVal === "dev-connect"){
            return (
                <DevConnect />
            )
        } else {
            return (
                <div>
                    <h1>THE RIGHT TO BE AWESOME.</h1><br />
                    <div className="quote-box">
                        <h2 style={{color: 'silver'}}>"{newQuote}"</h2>
                        <h3>- {quoteAuthor}</h3>
                    </div>
                </div>
            )
        }
}