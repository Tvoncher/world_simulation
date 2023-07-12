import { action, makeObservable, observable } from "mobx";
import { initialEvent } from "../utils/events";

export class PopupsStore {
  @observable
  events: IEvent[] = [initialEvent];

  @observable
  eventsHistory: IEvent[] = [];

  @observable
  isShown = true;

  constructor() {
    makeObservable(this);
  }

  @action
  setIsShow(value: boolean) {
    this.isShown = value;
  }
}

export const popupsStore = new PopupsStore();
