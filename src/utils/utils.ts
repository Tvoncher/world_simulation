import { CountryStore } from "../stores/CountryStore";
import { gameStore } from "../stores/GameStore";
import { listOfTraits } from "./initialData";
import { ICountry } from "./types";

const gameSpeed = gameStore.gameSpeed;

export const setTraits = (countryTraits: string[]) => {
  for (let i = 0; i < 2; i++) {
    countryTraits.push(
      listOfTraits[Math.floor(Math.random() * listOfTraits.length)]
    );
  }
};

export const checkTraits = (traits: string[]) => {
  for (let i = 0; i < traits.length; i++) {
    switch (traits[i]) {
      case "dumb people":
        console.log("dumb people");
        break;
      case "doormat people":
        console.log("doormat people");
        break;
      case "angry people":
        console.log("angry people");
        break;
      case "corruption everywhere":
        console.log("corruption everywhere");
        break;
      case "opposition rises":
        console.log("opposition rises");
        break;
      case "smart people":
        console.log("smart people");
        break;
      case "lack of resources":
        console.log("lack of resources");
        break;
      case "awfully religious":
        console.log("awfully religious");
        break;
      case "bad ecology":
        console.log("bad ecology");
        break;
      case "friendly people":
        console.log("friendly people");
        break;
      case "progressive":
        console.log("progressive");
        break;
      case "resource-rich":
        console.log("resource-rich");
        break;
      default:
        console.log("Нет таких значений");
    }
  }
};

export const runGameLoop = (store: CountryStore) => {
  setInterval(() => {
    store.setPopulation(10);
    store.setTech(1);
    store.setMoney();
    store.setHappiness();
  }, gameSpeed / 3);
};

export const findCountry = (searchingName: string, countriesList: ICountry[]) =>
  countriesList.find((country) => country.name === searchingName);

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomFloat = (min: number, max: number) =>
  Math.random() * (max - min + 1) + min;
