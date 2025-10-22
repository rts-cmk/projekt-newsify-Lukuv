import Title from "./title";
import "../main.sass";
import "./home.sass";
import { Dropdown } from "./dropdown";
import "./modal.sass";

function App() {
  return (
    <div>
      <Title />
      <div className="spacer">
        <input placeholder="Search news" className="homeSearch" type="search" />
      </div>
      <Dropdown title="Health">
        <span>
          <h3>Headline</h3>
          <p>
            Surfing is a surface water sport in which the wave rider, referred
            to as...
          </p>
        </span>
      </Dropdown>
      <Dropdown title="Sports">
        <img src="https" alt="" />
        <span>
          <h3>Headline</h3>

          <p>
            Surfing is a surface water sport in which the wave rider, referred
            to as...
          </p>
        </span>
      </Dropdown>
      <Dropdown title="Travel">
        <span>
          <h3>Headline</h3>
          <p>
            Surfing is a surface water sport in which the wave rider, referred
            to as...
          </p>
        </span>
      </Dropdown>
    </div>
  );
}

export default App;
