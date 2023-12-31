import { action, makeObservable, observable } from "mobx";

export class GameStore {
  @observable
  isPlaying = false;

  @observable
  readonly gameSpeed = 9000;

  public constructor() {
    makeObservable(this);
  }

  @action
  setIsPlaying() {
    this.isPlaying = true;
  }
}

export const gameStore = new GameStore();
