import Title from "./title";
import "../main.sass";
import "./home.sass";
import "./modal.sass";
import NewsApi from "./NewsApi";

function App() {
  return (
    <div>
      <Title />
      <div className="spacer">
        <input placeholder="Search news" className="homeSearch" type="search" />
      </div>
      <NewsApi />
    </div>
  );
}

export default App;
