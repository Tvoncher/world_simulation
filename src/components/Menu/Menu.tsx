import Stats from "./Stats/Stats";

import { FC } from "react";
import { observer } from "mobx-react-lite";
import { countryStore } from "../../stores/CountryStore";

import "./Menu.css";

const Menu: FC = observer(() => {
  return (
    <div className="menu__wrapper">
      <div className="left">menu left</div>
      <div className="center">{countryStore.selectedCountry}</div>
      <Stats />
    </div>
  );
});

export default Menu;
