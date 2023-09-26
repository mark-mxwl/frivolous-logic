import Puzzle1 from './Puzzle1'

export default function Puzzles(){
    return (
        <>
        <div className="content-box-layout-1">
            <div className="def-box-title">
                <h2 style={{fontSize: `1.3em`, marginRight: 5}}>monotone</h2>
                <h3 style={{color: 'gray'}}>puzzle</h3>
            </div>
            <div className="def-box-content">
                <h3 style={{fontSize: `.8em`, color: `#805F15`}}>[by MVMXL]</h3>
                <p style={{fontSize: `.7em`}}>1 a: match all slots to the color of your choice</p>
            </div>
        </div>
        <div>
            <Puzzle1 />
        </div>
        </>
    )
}