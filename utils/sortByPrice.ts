import { dataAppartementProps } from "utils/interfaceProps";
export const sortByPrice = (
  appartements: dataAppartementProps[],
  typeOfSort: string
) => {
  return [...appartements].sort((appartementA, appartementB) => {
    const priceA: number = appartementA.price;
    const priceB: number = appartementB.price;
    if (typeOfSort === "asc") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });
};
