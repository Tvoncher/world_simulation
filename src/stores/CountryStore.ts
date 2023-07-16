import { action, makeObservable, observable } from "mobx";
import { initialStats } from "../utils/initialData";
import { checkTraits, setTraits } from "../utils/utils";

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
  }

  @action
  setSelectedCountry(countryName: string) {
    this.selectedCountry = countryName;
  }

  @action
  handleMoney() {
    this.stats.money += this.stats.earnings - this.stats.taxes;
  }
}

export const countryStore = new CountryStore();
