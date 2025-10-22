import Title from "./title";
import "../main.sass";
import "./home.sass";

function App() {
  return (
    <div>
      <Title />
      <div className="spacer">
        <input placeholder="Search news" className="homeSearch" type="search" />
      </div>
      <h2 className="cap">Sport</h2>
      <h3></h3>
      <p></p>
    </div>
  );
}

export default App;
