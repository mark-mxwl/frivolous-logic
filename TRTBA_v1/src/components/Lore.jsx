import Article1 from '../text-content/Article1'

export default function Lore(){
    
    return (
        <>
        <div className="content-box-layout-1">
            <div className="def-box-title">
                <h2 style={{fontSize: `1.3em`, marginRight: 5}}>puzzle</h2>
                <h3 style={{color: 'gray'}}>noun</h3>
            </div>
            <div className="def-box-content">
                <h3 style={{fontSize: `.8em`, color: `#805F15`}}>[puh-zul]</h3>
                <p style={{fontSize: `.7em`}}>2 a: something that puzzles<br />
                b: a question, problem, or contrivance designed for testing ingenuity</p>
            </div>
        </div>
        <div className="content-box-layout-2">
            <div className="def-box-title">
                <h2 style={{color: `silver`}}>Puzzle Lore</h2>
            </div>
            <Article1 />
        </div>
        </>
    )
}