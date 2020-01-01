import React, { Component } from "react";
import User from "../../components/User/User";
import * as constants from "../../constants/string";

import classes from "./Institutions.css";

class Institutions extends Component {
  render() {
    let rows = [];
    for (var i = 0; i < 17; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var idx = 0; idx < 5; idx++) {
        let cellID = `cell${i}-${idx}`;
        cell.push(<td key={cellID} id={cellID}></td>);
        console.log("kasfjdf");
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }
    return (
      <div className={classes.Institutions}>
        <User />

        <div className={classes.InstitutionsLink}>
          <text> MENU / ĐƠN VỊ CHUYÊN MÔN / DANH SÁCH ĐƠN VỊ CHUYÊN MÔN</text>
        </div>

        <div className={classes.SchoolListLabel}>
          <label>{constants.LIST_SCHOOL}</label>
          <select className={classes.SelectSchool}>
            <option>ĐH CÔNG NGHỆ</option>
          </select>
        </div>

        <div className={classes.InstitutionsLink}>
          <text> KHOA / VIỆN</text>
        </div>

        <div>
          <table id="simple-board">
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Institutions;
