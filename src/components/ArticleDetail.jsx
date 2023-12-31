
export default function ArticleDetail(props){

  const { title, name, id, content, urlSlug } = props

  return (
    <>
      <div style={{ color: 'rgba(255, 255, 255, .87)' }}>
      <h2 style={{color: `#D4B16A`}}>{title}</h2>
        {content}
      </div>
      <div>
        <p style={{color: 'gray', fontSize: '.7em', fontStyle: 'italic'}}>
          This article uses material from the Wikipedia article{" "}
        {
          <a href={`https://en.wikipedia.org/wiki/${urlSlug}`} target='_blank'>
            {`${name}`}
          </a>
        }
        , which is released under the{" "}
        {
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target='_blank'>
            Creative Commons Attribution-Share-Alike License 4.0
          </a>
        }
        .</p>
      </div>
    </>
  );
}