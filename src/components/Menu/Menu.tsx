import { FC } from "react";
import { observer } from "mobx-react-lite";
import { worldStore } from "../../stores/WorldStore";

import Stats from "./Stats/Stats";
import CountryMenu from "./CountryMenu/CountryMenu";

import "./Menu.css";

const Menu: FC = observer(() => {
  return (
    <div className="menu__wrapper">
      <CountryMenu />
      <div className="center">
        Selected country: <h2>{worldStore.selectedCountry}</h2>
      </div>
      <Stats />
    </div>
  );
});

export default Menu;
