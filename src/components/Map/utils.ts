import { LeafletEvent } from "leaflet";
import { findCountry } from "../../utils/utils";
import { worldStore } from "../../stores/WorldStore";

export const handleHover = (event: LeafletEvent) => {
  //only for debugging for now
  const countryName = event.target.feature.properties.name;

  const countryStore = findCountry(countryName, worldStore.countries);
};
