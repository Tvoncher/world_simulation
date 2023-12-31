export interface ICountryStats {
  polulation: number;
  tech: number;
  army: number;
  armyEfficiency: number;
  money: number;
  taxes: number;
  happiness: number;
}

export interface ICountry {
  name: string;
  stats: ICountryStats;
  traits: string[];
}

export interface IEvent {
  type: EventType;
  title: string;
  text: string;
}

export const enum EventType {
  info = "info",
  message = "message",
}
