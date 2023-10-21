import { useState, useEffect } from "react";
import { loreArray } from "../article-directory.js";
import ArticleDetail from "./ArticleDetail";

export default function Lore() {
  const [selectedArticle, setSelectedArticle] = useState(loreArray[0]);

  function handleLoreClick(e) {
    const currentObj = loreArray.find(({ id }) => String(id) === e.target.id);
    setSelectedArticle(currentObj);
    // console.log(currentObj)
  }

  return (
    <>
      <div className="page-content">
        <div className="page-nav-horizontal">
          {loreArray.map((lore) => (
            <button id={lore.id} key={lore.id} onClick={handleLoreClick} style={{padding: "0", transform: 'scale(1)'}}>
              <img src={`./assets/logic_gate_icons/${lore.icon}`} id={lore.id} className="social-icons"/>
            </button>
          ))}
        </div>
      <br />
        <div className="content-box-layout-2">
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
  );
}
