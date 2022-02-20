import React from "react";
import { Card, CardContent } from "@mui/material";

import Table from "../../components/Table/Table";
import LineGraph from "../../components/LineGraph/LineGraph";

const Sidebar = ({ tableData, casesType }) => {
  return (
    <Card className="app__right">
      <CardContent>
        {/* Table */}
        <h3>Total Cases by Country</h3>
        <Table countries={tableData} />

        {/* Graph */}
        <h3>Last 90 days Worldwide Update</h3>
        <LineGraph casesType={casesType} />
      </CardContent>
    </Card>
  );
};

export default Sidebar;
