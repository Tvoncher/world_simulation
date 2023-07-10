import { FC } from "react";
import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <Map />
      <Menu />
    </>
  );
};

export default App;
