import { action, makeObservable, observable } from "mobx";
import { initialStats } from "../utils/initialData";

export class CountryStore {
  @observable
  selectedCountry = "";

  @observable
  stats: ICountryStats = initialStats;

  public constructor() {
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
