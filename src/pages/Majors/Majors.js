import React, { Component } from "react";
import User from "../../components/User/User";
import SearchComponent from "../../components/Search/SearchComponent/SearchComponent";
import CustomButton from "../../components/UI/Button/Button";
import Pagination from "react-js-pagination";
import editIcon from "../../theme/svg/edit.svg";
import detailIcon from "../../theme/svg/info-sign.svg";
import deleteIcon from "../../theme/svg/delete.svg";
import plusIcon from "../../theme/svg/plus.svg";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import classes from "./Majors.css";

class Majors extends Component {
  state = {
    searchValue: "",
    activePage: 1,
    showModal: false,
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  submitForm = (event) => {
    event.preventDefault();
    let form = event.target;
    console.log(form.elements.title.value);
  };
  render() {
    let rows = [];
    for (var i = 0; i < 12; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var idx = 0; idx < 5; idx++) {
        let cellID = `cell${i}-${idx}`;
        if (i < Nganh.length) {
          if (idx == 0)
            cell.push(
              <td key={cellID} id={cellID}>
                {Nganh[i].STT}
              </td>
            );
          if (idx == 1)
            cell.push(
              <td key={cellID} id={cellID}>
                {Nganh[i].NAME}
              </td>
            );
          if (idx == 2)
            cell.push(
              <td key={cellID} id={cellID}>
                {Nganh[i].CODE}
              </td>
            );
          if (idx == 3)
            cell.push(
              <td key={cellID} id={cellID}>
                {Nganh[i].LEVEL}
              </td>
            );
          if (idx == 4)
            cell.push(
              <td key={cellID} id={cellID}>
                <div className={classes.ButtonList}>
                  <CustomButton buttonType="InlineTable">
                    <img src={editIcon} alt="icon"></img>
                    EDIT
                  </CustomButton>
                  <CustomButton buttonType="InlineTable">
                    <img src={deleteIcon} alt="icon"></img>
                    DELETE
                  </CustomButton>
                  <CustomButton buttonType="InlineTable">
                    <img src={detailIcon} alt="icon"></img>
                    DETAIL
                  </CustomButton>
                </div>
              </td>
            );
        } else {
          cell.push(<td key={cellID} id={cellID}></td>);
        }
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }

    return (
      <div className={classes.Majors}>
        <User />
        <div className={classes.headerText}> MENU / KHÁC / NGÀNH </div>
        <SearchComponent
          changed={this.onChangedInputHandler}
          value={this.state.searchValue}
          searchClicked={this.searchClickedHandler}
          filterClicked={(role) => this.filterClickedHandler(role)}
        />
        <table id="simple-board" className={classes.Table}>
          <tr className={classes.tr1}>
            <td width="200" className={classes.td1}>
              STT
            </td>
            <td width="200" className={classes.td2}>
              TÊN NGÀNH
            </td>
            <td width="200" className={classes.td3}>
              MÃ NGÀNH
            </td>
            <td width="200" className={classes.td4}>
              BẬC
            </td>
            <td width="200" className={classes.td5}>
              THAO TÁC
            </td>
          </tr>
          <tbody>{rows}</tbody>

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
        </table>
        <CustomButton buttonType="AddButton" clicked={this.handleOpenModal}>
          <img src={plusIcon} alt="icon"></img>
          THÊM MỚI
        </CustomButton>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          centered
        >
          <form onSubmit={this.submitForm}>
            <Modal.Header closeButton>
              <Modal.Title>TẠO MỚI NGÀNH</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formGridMajor">
                <Form.Label>TÊN NGÀNH</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  ref="title"
                  required="true"
                />
              </Form.Group>

              <Form.Group controlId="formGridMajorCode">
                <Form.Label>MÃ NGÀNH</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group controlId="formGridMajorLevel">
                <Form.Label>BẬC</Form.Label>
                <Form.Control as="select">
                  <option>THẠC SĨ</option>
                  <option>TIẾN SĨ</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseModal}>
                HỦY BỎ
              </Button>
              <Button
                variant="primary"
                onClick={this.handleCloseModal}
                type="submit"
              >
                LƯU
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

const Nganh = [
  { STT: "1", NAME: "Công Nghệ Thông Tin", CODE: "7480201", LEVEL: "Thạc sĩ" },
  { STT: "2", NAME: "Khoa Học Máy Tính", CODE: "7480201", LEVEL: "Thạc sĩ" },
];

export default Majors;
