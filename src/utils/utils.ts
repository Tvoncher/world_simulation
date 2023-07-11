import { listOfTraits } from "./initialData";

export const setTraits = (countryTraits: string[]) => {
  for (let i = 0; i < 2; i++) {
    countryTraits.push(
      listOfTraits[Math.floor(Math.random() * listOfTraits.length)]
    );
  }
};
