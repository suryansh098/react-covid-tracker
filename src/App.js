import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";

import { fetchAllCountriesInfo, fetchCountryInfo } from "./api";
import { sortData } from "./utils";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState([34.80746, 60.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetchCountryInfo().then((data) => {
      setCountryInfo(data);
    });
  }, []);

  useEffect(() => {
    fetchAllCountriesInfo().then((data) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      const sortedData = sortData(data);
      setTableData(sortedData);
      setCountries(countries);
      setMapCountries(data);
    });
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const data = await fetchCountryInfo(countryCode);
    setCountry(countryCode);
    setCountryInfo(data);
    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    setMapZoom(4);
  };

  return (
    <div className="app">
      <Main
        country={country}
        countries={countries}
        onCountryChange={onCountryChange}
        casesType={casesType}
        setCasesType={setCasesType}
        countryInfo={countryInfo}
        mapCountries={mapCountries}
        mapCenter={mapCenter}
        mapZoom={mapZoom}
      />
      <Sidebar tableData={tableData} casesType={casesType} />
    </div>
  );
}

export default App;
