import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./InfoBox.css";

const InfoBox = ({
  title,
  todayData,
  totalData,
  type,
  isActive,
  onClick,
}) => {
  return (
    <Card
      className={`infoBox ${isActive && `infoBox--${type}`}`}
      onClick={onClick}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Data of last 24 hours */}
        <h2 className={`infoBox__today-data ${type}`}>{todayData}</h2>

        {/* Total Data */}
        <Typography className="infoBox__total" color="textSecondary">
          {totalData} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
