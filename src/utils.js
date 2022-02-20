import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedData;
};

export const prettyPrintToday = (stat) =>
  stat ? numeral(stat).format("+0.0a") : "+0";

export const prettyPrintTotal = (stat) =>
  stat ? numeral(stat).format("0.0a") : "0";

export const casesTypeColors = {
  cases: {
    hex: "#FFA800",
    half_op: "#FFA80055",
    multiplier: 200,
  },
  recovered: {
    hex: "#50CD89",
    half_op: "#50CD8955",
    multiplier: 200,
  },
  deaths: {
    hex: "#F64E60",
    half_op: "#F64E6055",
    multiplier: 600,
  },
};

// draw circles on the map using interative tooltip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="popup-container">
          <div
            className="country-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="country-name">{country.country}</div>
          <div className="country-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="country-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="country-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
