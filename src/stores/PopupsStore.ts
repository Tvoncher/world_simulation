import { action, makeObservable, observable, reaction } from "mobx";
import { allEvents, initialEvent } from "../utils/events";
import { IEvent } from "../utils/types";
import { gameStore } from "./GameStore";

export class PopupsStore {
  @observable
  event: IEvent | null = initialEvent;

  @observable
  eventsHistory: IEvent[] = [];

  constructor() {
    makeObservable(this);

    reaction(
      () => this.event,
      () => {
        if (!this.event) {
          this.pickNewEvent();
        }
      }
    );
  }

  @action
  moveEventToHistory() {
    this.eventsHistory = [...this.eventsHistory, this.event!];
    this.event = null;
  }

  @action
  pickNewEvent() {
    const interval = setInterval(() => {
      const randomEventNumber = Math.floor(Math.random() * allEvents.length);

      this.event = allEvents[randomEventNumber];

      allEvents.splice(randomEventNumber, 1);

      clearInterval(interval);
    }, gameStore.gameSpeed);
  }
}

export const popupsStore = new PopupsStore();
