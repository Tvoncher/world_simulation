import { FC, useCallback } from "react";

import { countryStore } from "../../../stores/CountryStore";
import { observer } from "mobx-react-lite";

import "./CountryMenu.css";

const CountryMenu: FC = observer(() => {
  const handleTaxes = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const id = event.currentTarget.id;
      id === "increase" ? countryStore.setTaxes(1) : countryStore.setTaxes(-1);
    },
    []
  );

  const handleArmy = useCallback(() => {
    countryStore.setArmy(10);
  }, []);

  const handleArmyEfficiency = useCallback(() => {
    countryStore.setArmyEfficiency();
  }, []);

  return (
    <div className="countryMenu__wrapper">
      <div>
        Your country is <h2>{countryStore.selectedCountry}</h2>
        your uniquenesses are: {countryStore.traits.join(", ")}
      </div>
      <div className="buttons__wrapper">
        <div className="menu_button" id="increase" onClick={handleTaxes}>
          taxes +
        </div>
        <div className="menu_button " id="decrease" onClick={handleTaxes}>
          taxes -
        </div>
        <div className="menu_button" id="army" onClick={handleArmy}>
          army
        </div>
        <div
          className="menu_button"
          id="army_efficiency"
          onClick={handleArmyEfficiency}
        >
          army efficiency
        </div>
        <div className="menu_button">change later</div>
        <div className="menu_button">another one</div>
      </div>
    </div>
  );
});

export default CountryMenu;
