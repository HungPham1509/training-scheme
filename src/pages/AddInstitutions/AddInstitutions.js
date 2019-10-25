import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import User from "../../components/User/User";
import * as constants from "../../constants/string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faWindowClose } from "@fortawesome/free-solid-svg-icons";

import classes from "./AddInstitutions.css";

class AddInstitutions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vname: "",
      ename: "",
      sname: "",
      address: "",
      description: ""
    };
  }

  onSubmit = () => {
    alert(JSON.stringify(this.state));
  };

  onChange = (event, id) => {
    if (id == "vname")
      this.setState({
        vname: event.target.value
      });
    if (id == "ename")
      this.setState({
        ename: event.target.value
      });
    if (id == "sname")
      this.setState({
        sname: event.target.value
      });
    if (id == "address")
      this.setState({
        address: event.target.value
      });
    if (id == "description")
      this.setState({
        description: event.target.value
      });
  };

  render() {
    return (
      <div className={classes.AddInstitutionsContainer}>
        <Menu />
        <div className={classes.AddInstitutions}>
          <User />

          <div className={classes.AddInstitutionsLink}>
            <text> MENU / ĐƠN VỊ CHUYÊN MÔN / TẠO MỚI ĐƠN VỊ CHUYÊN MÔN</text>
          </div>

          <form
            className={classes.AddInstitutionsForm}
            onSubmit={this.onSubmit}
          >
            <label className={classes.FormLabel}>
              {constants.ADD_INSTITUTIONS}
            </label>

            <label className={classes.InputText}>
              - TÊN TIẾNG VIỆT
              <input
                type="text"
                name="vname"
                value={this.state.vname}
                onChange={event => this.onChange(event, "vname")}
              />
            </label>

            <label className={classes.InputText}>
              - TÊN TIẾNG ANH
              <input
                type="text"
                name="ename"
                value={this.state.ename}
                onChange={event => this.onChange(event, "ename")}
              />
            </label>

            <label className={classes.InputText}>
              - TÊN VIẾT TẮT
              <input
                type="text"
                name="sname"
                value={this.state.sname}
                onChange={event => this.onChange(event, "sname")}
              />
            </label>

            <label className={classes.InputText}>
              - ĐỊA CHỈ
              <input
                type="text"
                name="address"
                className={classes.address}
                value={this.state.address}
                onChange={event => this.onChange(event, "address")}
              />
            </label>

            <label className={classes.InputText}>- MÔ TẢ SƠ LƯỢC</label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              className={classes.description}
              onChange={event => this.onChange(event, "description")}
            />
            <label className={classes.InputText}>- LOGO</label>
            <div className={classes.logo}></div>

            <div className={classes.display}>
              <div className={classes.btnSubmit}>
                <button className="btn btn-submit">
                  <FontAwesomeIcon icon={faSave} style={{ fontSize: "15px" }} />
                  Lưu
                </button>
              </div>
              <div className={classes.btnCancel}>
                <button className="btn ">
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    style={{ fontSize: "15px" }}
                  />
                  HỦY BỎ
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddInstitutions;
