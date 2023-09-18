import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props){
    const { handleClick } = props

    return (
        <div>
            <div onClick={handleClick}>
                <FontAwesomeIcon icon={faPuzzlePiece} className="social-icons" />
            </div>
        </div>
    )
}