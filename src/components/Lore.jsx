import { useState, useEffect } from "react";
import { loreArray } from "../directories/article-directory.js";
import ArticleDetail from "./ArticleDetail";
import LoreCard from "./LoreCard.jsx"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Lore() {
  const [selectedArticle, setSelectedArticle] = useState();
  let i = 0
  
  function handleLoreClick(e) {
    const currentObj = loreArray.find(({ id }) => String(id) === e.target.id);
    setSelectedArticle(currentObj);
    // console.log(currentObj)
  }

  function handleArrowClick() {
    setSelectedArticle()
  }

  return (
    selectedArticle ?
    <>
      <div className="page-content">
        <div className="content-container">
          <FontAwesomeIcon icon={faArrowLeft} className="social-icons" onClick={handleArrowClick} />
          <ArticleDetail
            title={selectedArticle?.title}
            name={selectedArticle?.name}
            id={selectedArticle?.id}
            content={selectedArticle?.content}
            urlSlug={selectedArticle?.urlSlug}
          />
        </div>
      </div>
    </>
      :
    <>
      <div className="page-content-alt">
        {loreArray.map(lore => {
          return (
              <LoreCard
                i={i <= 4 && i++}
                handleLoreClick={handleLoreClick}
                title={lore.title}
                name={lore.name}
                id={lore.id}
                key={`${lore.id}--key`}
                content={lore.content}
                urlSlug={lore.urlSlug}
                icon={lore.icon}
                image={lore.image}
              />
          )
          })
        }
      </div>
    </>
  );
}
