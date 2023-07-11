import { FC } from "react";
import { observer } from "mobx-react-lite";
import { worldStore } from "../../stores/WorldStore";
import { countryStore } from "../../stores/CountryStore";

import Stats from "./Stats/Stats";
import CountryMenu from "./CountryMenu/CountryMenu";

import "./Menu.css";

const Menu: FC = observer(() => {
  const selectedCountry = worldStore.selectedCountry;
  const countryObj = worldStore.countries.filter(
    (country) => country.name === selectedCountry
  );

  return (
    <div className="menu__wrapper">
      {countryStore.selectedCountry && <CountryMenu />}
      <div className="center">
        <h2>{countryObj[0]?.name}</h2>
        {countryObj[0]?.traits.join(", ")}
      </div>
      {countryStore.selectedCountry && <Stats />}
    </div>
  );
});

export default Menu;
