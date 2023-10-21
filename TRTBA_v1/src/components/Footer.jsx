import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props){
    const { handleClick } = props

    return (
        <footer>
            <div className='footer-container'>
                <h3 style={{fontSize: `.8em`}}>SOUND FX <a>ON</a>/<a>OFF</a></h3>
                <a id="puzzle-piece" onClick={handleClick}>
                    <FontAwesomeIcon icon={faPuzzlePiece} className="social-icons" />
                </a>
                <h3 style={{fontSize: `.8em`}}>(c)2023 MVMXL</h3>
            </div>
        </footer>
    )
}