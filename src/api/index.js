export const fetchCountryInfo = async (countryCode = "worldwide") => {
  const URL =
    countryCode === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  const data = await fetch(URL).then((response) => response.json());
  return data;
};

export const fetchAllCountriesInfo = async () => {
  const URL = "https://disease.sh/v3/covid-19/countries";
  const data = await fetch(URL).then((response) => response.json());
  return data;
};

export const fetchHistoricalData = async (days = 90) => {
  const URL = `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`;
  const data = await fetch(URL).then((response) => response.json());
  return data;
}
