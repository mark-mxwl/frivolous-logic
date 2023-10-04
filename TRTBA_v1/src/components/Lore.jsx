import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loreArray } from '../article-directory.js'
import Article from './Article'

export default function Lore(){

    const [selectedArticle, setSelectedArticle] = useState()
    
    function handleLoreClick(e) {
        const currentObj = loreArray.find(({ id }) => String(id) === e.target.id)
        setSelectedArticle(currentObj)
    }

    console.log(selectedArticle)
    
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
            <Article 
                title={selectedArticle?.title}
                name={selectedArticle?.name}
                id={selectedArticle?.id}
                content={selectedArticle?.content}
                urlSlug={selectedArticle?.urlSlug}
            />
        </div>
        <div className='content-box-layout-3'>
            {/* {loreArray.map(lore => <FontAwesomeIcon id={lore.id} key={lore.id} 
            onClick={handleLoreClick} icon={lore.icon} className='social-icons' 
            style={{color: `#36454F`}} />)} */}

            {loreArray.map(lore => <h3 style={{color: `#36454F`, fontSize: `.7em`}}><a id={lore.id} key={lore.id} onClick={handleLoreClick}>{lore.name}</a></h3>)}

        </div>
        </>
    )
}