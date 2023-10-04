import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import Puzzle1 from './Puzzle1'

export default function Puzzles(){

    const diceArray = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

    return (
        <>
        <div className="content-box-layout-1">
            <div className="def-box-title">
                <h2 style={{fontSize: `1.3em`, marginRight: 5}}>monotone</h2>
                <h3 style={{color: 'gray'}}>puzzle</h3>
            </div>
            <div className="def-box-content">
                <h3 style={{fontSize: `.8em`, color: `#805F15`}}>[by MVMXL]</h3>
                <p style={{fontSize: `.7em`}}>1 a: set all rotating slots to the same color--if you can.</p>
            </div>
        </div>
        <div>
            <Puzzle1 />
        </div>
        <div className='content-box-layout-3'>
            {diceArray.map(dice => <a><FontAwesomeIcon icon={dice} className='social-icons' style={{color: `#36454F`}} /></a>)}
        </div>
        </>
    )
}