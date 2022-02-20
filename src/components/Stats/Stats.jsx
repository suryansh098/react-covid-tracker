import React from "react";

import InfoBox from "../InfoBox/InfoBox";
import { prettyPrintToday, prettyPrintTotal } from "../../utils";

const Stats = ({ casesType, setCasesType, countryInfo }) => {
  return (
    <div className="app__stats">
      <InfoBox
        title="Total"
        type="cases"
        isActive={casesType === "cases"}
        todayData={prettyPrintToday(countryInfo.todayCases)}
        totalData={prettyPrintTotal(countryInfo.cases)}
        onClick={() => setCasesType("cases")}
      />
      <InfoBox
        title="Recovered"
        type="recovered"
        isActive={casesType === "recovered"}
        todayData={prettyPrintToday(countryInfo.todayRecovered)}
        totalData={prettyPrintTotal(countryInfo.recovered)}
        onClick={() => setCasesType("recovered")}
      />
      <InfoBox
        title="Deaths"
        type="deaths"
        isActive={casesType === "deaths"}
        todayData={prettyPrintToday(countryInfo.todayDeaths)}
        totalData={prettyPrintTotal(countryInfo.deaths)}
        onClick={() => setCasesType("deaths")}
      />
    </div>
  );
};

export default Stats;
