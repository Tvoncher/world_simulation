import { action, makeObservable, observable } from "mobx";
import geoData from "../components/Map/geo.json";
import { initialStats } from "../utils/initialData";
import { setTraits } from "../utils/utils";

export class WorldStore {
  @observable
  countries: ICountry[] = [];

  @observable
  selectedCountry = "";

  public constructor() {
    geoData.features.forEach((feature) =>
      this.addToCountries(feature.properties.name)
    );
    makeObservable(this);
  }

  @action
  addToCountries(countryName: string) {
    const newCountry: ICountry = {
      name: countryName,
      stats: initialStats,
      traits: [],
    };
    setTraits(newCountry.traits);

    this.countries = [...this.countries, newCountry];
  }

  @action
  getCountry(countryName: string) {
    const country = this.countries.find(
      (country) => country.name === countryName
    );
    return country;
  }

  @action
  setSelectedCountry(countryName: string) {
    this.selectedCountry = countryName;
  }
}

export const worldStore = new WorldStore();
