import NavBar from "./components/NavBar";
import DisplayImage from "./components/DisplayImage";
import Content from "./components/Content";

import "./scss/_base.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DisplayImage />
        <Content isUpdateState={false} />
      </div>
    </>
  );
}

export default App;
