import React, { Component } from "react";
import User from "../../components/User/User";
import SearchComponent from "../../components/Search/SearchComponent/SearchComponent";
import Pagination from "react-js-pagination";
import DocumentUnit from "../../components/Unit/DocumentUnit/DocumentUnit";

import classes from "./Texts.css";

class Texts extends Component {
  state = {
    searchValue: "",
    activePage: 1,
    showModal: false,
  };

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  render() {
    let rows = [];
    for (var i = 0; i < 2; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var idx = 0; idx < 3; idx++) {
        let cellID = `cell${i}-${idx}`;
        cell.push(
          <td className={classes.td} key={cellID} id={cellID}>
            <DocumentUnit></DocumentUnit>
          </td>
        );
      }
      rows.push(
        <tr className={classes.tr} key={i} id={rowID}>
          {cell}
        </tr>
      );
    }
    return (
      <div className={classes.Texts}>
        <User />
        <div className={classes.headerText}>
          MENU / KHÁC / DANH SÁCH VĂN BẢN{" "}
        </div>
        <SearchComponent
          changed={this.onChangedInputHandler}
          value={this.state.searchValue}
          searchClicked={this.searchClickedHandler}
          filterClicked={(role) => this.filterClickedHandler(role)}
        />
        <div className={classes.UnitContainer}>{rows}</div>

        <div className={classes.Pagination}>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={3}
            onChange={this.handlePageChange.bind(this)}
            prevPageText={"PREVIOUS"}
            nextPageText={"NEXT"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    );
  }
}

export default Texts;
