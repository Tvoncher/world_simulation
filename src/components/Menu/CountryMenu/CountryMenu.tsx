import { FC } from "react";

import { countryStore } from "../../../stores/CountryStore";
import { observer } from "mobx-react-lite";

import "./CountryMenu.css";

const CountryMenu: FC = observer(() => {
  return (
    <div className="countryMenu__wrapper">
      <div>
        Your country is <h2>{countryStore.selectedCountry}</h2>
        your uniquenesses are: {countryStore.traits.join(", ")}
      </div>
      <div className="buttons__wrapper">
        <div className="menu_button">upgrades1</div>
        <div className="menu_button">smth other</div>
        <div className="menu_button">upgrades2</div>
        <div className="menu_button">something</div>
        <div className="menu_button">change later</div>
        <div className="menu_button">another one</div>
      </div>
    </div>
  );
});

export default CountryMenu;
