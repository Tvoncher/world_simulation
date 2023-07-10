import { FC } from "react";
import { countryStore } from "../../../stores/CountryStore";
import { observer } from "mobx-react-lite";

import "./Stats.css";

const Stats: FC = observer(() => {
  return (
    <div className="stats__wrapper">
      {Object.entries(countryStore.stats).map(([stat, value]) => (
        <div className="stat" key={stat}>
          <span style={{ fontWeight: "bold" }}>{stat}</span>: {value}
        </div>
      ))}
    </div>
  );
});

export default Stats;
