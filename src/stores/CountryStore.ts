import { action, makeObservable, observable } from "mobx";
import { initialStats } from "../utils/initialData";
import { gameStore } from "./GameStore";

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

  //TODO: replace later
  @action
  startGame() {
    //gameStore.setIsPlaying();

    setInterval(() => {
      this.handleMoney();
    }, 1000);
  }

  @action
  handleMoney() {
    this.stats.money += this.stats.earnings - this.stats.taxes;
  }
}

export const countryStore = new CountryStore();
