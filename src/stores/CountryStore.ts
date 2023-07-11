import { action, makeObservable, observable } from "mobx";
import { initialStats } from "../utils/initialData";
import { setTraits } from "../utils/utils";

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
