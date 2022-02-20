import React from "react";
import numeral from "numeral";
import "./Table.css";

const Table = ({ countries }) => {
  return (
    <div className="table__container">
      <table className="table">
        <tbody>
          {countries.map(({ country, cases }) => (
            <tr key={country + cases}>
              <td>{country}</td>
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
