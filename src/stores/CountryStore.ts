import { action, makeObservable, observable, reaction, values } from "mobx";
import { initialStats } from "../utils/initialData";
import { checkTraits, runGameLoop, setTraits } from "../utils/utils";

import { ICountryStats } from "../utils/types";

//store for playable country
export class CountryStore {
  @observable
  selectedCountry = "";

  @observable
  stats: ICountryStats = initialStats;

  @observable
  traits: string[] = [];

  public constructor() {
    setTraits(this.traits);
    checkTraits(this.traits);

    makeObservable(this);

    reaction(
      () => this.selectedCountry,
      () => {
        runGameLoop(countryStore);
      }
    );
  }

  @action
  setSelectedCountry(countryName: string) {
    this.selectedCountry = countryName;
  }

  @action
  setPopulation(value: number) {
    this.stats.polulation += value;
  }

  @action
  setTech(value: number) {
    this.stats.tech += value;
  }

  @action
  setMoney() {
    const income = ((this.stats.polulation * this.stats.taxes) / 5).toFixed();
    this.stats.money += +income;
  }

  @action
  setArmy(value: number) {
    const cost = this.stats.money / 2 + 200;
    if (this.stats.money >= cost) {
      this.stats.money -= cost;
      this.stats.army += value;
    }
  }

  @action
  setArmyEfficiency() {
    const cost = this.stats.money / 2 + 400;
    if (this.stats.money >= cost) {
      this.stats.money -= cost;
      this.stats.armyEfficiency += 0.1;
    }
  }

  @action
  setTaxes(value: number) {
    this.stats.taxes += value;
  }

  @action
  setHappiness() {
    this.stats.happiness += -this.stats.taxes;
  }
}

export const countryStore = new CountryStore();
