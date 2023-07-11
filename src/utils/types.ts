interface ICountryStats {
  polulation: number;
  tech: number;
  army: number;
  money: number;
  earnings: number;
  taxes: number;
}

interface ICountry {
  name: string;
  stats: ICountryStats;
  traits: string[];
}
