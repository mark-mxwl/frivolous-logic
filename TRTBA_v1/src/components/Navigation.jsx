import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

export default function Navigation(props){
    const { handleClick } = props

    return (
        <header>
            <div className='header-container'>
            <nav>
                <button id="puzzles" onClick={handleClick}>PUZZLES</button>
                <button id="games" onClick={handleClick}>GAMES</button>
                <button id="lore" onClick={handleClick}>LORE</button>
            </nav>
                <FontAwesomeIcon id="dev-connect" onClick={handleClick} icon={faCodeBranch} 
                className="social-icons" style={{height: 25, width: 25}} />
            </div>
        </header>
    )
}