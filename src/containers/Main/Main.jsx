import React from "react";

import Header from "../../components/Header/Header";
import Stats from "../../components/Stats/Stats";
import Map from "../../components/Map/Map";

const Main = ({
  country,
  countries,
  onCountryChange,
  casesType,
  setCasesType,
  countryInfo,
  mapCountries,
  mapCenter,
  mapZoom,
}) => {
  return (
    <div className="app__left">
      {/* Header */}
      <Header
        country={country}
        countries={countries}
        onCountryChange={onCountryChange}
      />

      {/* Stats */}
      <Stats
        casesType={casesType}
        setCasesType={setCasesType}
        countryInfo={countryInfo}
      />

      {/* Map */}
      <Map
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
        casesType={casesType}
      />
    </div>
  );
};

export default Main;
