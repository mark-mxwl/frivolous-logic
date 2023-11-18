import Puzzles from "./Puzzles";
import Lore from "./Lore";
import Games from "./Games";
import Connect from "./Connect";

export default function MainContent(props) {
  const { aTrig, newQuote, quoteAuthor } = props;
  const styles = {justifyContent: 'space-evenly', alignItems: 'center', overflowY: 'auto'}

  if (aTrig === "puzzles") {
    return <Puzzles />
  } else if (aTrig === "lore") {
    return <Lore />;
  } else if (aTrig === "games") {
    return <Games />;
  } else if (aTrig === "connect") {
    return <Connect />;
  } else {
    return (
      <div className="page-content" style={styles}>
        <h1><span style={{color: 'silver'}}>FRIVOLOUS LOGIC</span> BEARS GLORIOUS FRUIT.</h1>
        <div className="quote-box">
          <h2 style={{ color: "silver" }}>"{newQuote}"</h2>
          <h3>- {quoteAuthor}</h3>
        </div>
      </div>
    );
  }
}