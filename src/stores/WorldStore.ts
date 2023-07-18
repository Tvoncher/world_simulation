import { action, makeObservable, observable } from "mobx";
import geoData from "../components/Map/geo.json";
import { initialStats } from "../utils/initialData";
import { getRandomFloat, setTraits } from "../utils/utils";
import { ICountry } from "../utils/types";
import { gameStore } from "./GameStore";

export class WorldStore {
  @observable
  countries: ICountry[] = [];

  @observable
  selectedCountry = "";

  public constructor() {
    geoData.features.forEach((feature) =>
      this.addToCountries(feature.properties.name)
    );
    this.runGameLoop();
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

  @action
  runGameLoop() {
    setInterval(() => {
      this.countries.forEach((country) => {
        this.setMoney(country);
        this.setArmy(country);
      });
    }, gameStore.gameSpeed / 4);
  }

  @action
  setMoney(country: ICountry) {
    //TODO: change later to real taxes coeff
    const taxes = getRandomFloat(-0.1, 0.8);
    const income = ((country.stats.polulation * taxes) / 5).toFixed();
    country.stats.money += +income;
  }

  @action
  setArmy(country: ICountry) {
    const cost = country.stats.money / 3 + 200;
    if (country.stats.money >= cost) {
      country.stats.money -= cost;
      country.stats.army += 10;
    }
  }
}

export const worldStore = new WorldStore();
