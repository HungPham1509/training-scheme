import React from "react";
import classes from "./DocumentUnit.css";
import eyeIcon from "../../../theme/svg/eye.svg";
import downloadIcon from "../../../theme/svg/download.svg";
import recyclingIcon from "../../../theme/svg/recycling-bin.svg";
import settingIcon from "../../../theme/svg/settings.svg";

const documentUnit = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.firstContainer}>
        <p className={classes.headerLine}>TÊN VĂN BẢN</p>
        <p className={classes.firstLine}>THÔNG TIN</p>
        <p className={classes.secondLine}>NGÀY KÝ</p>
      </div>
      <div className={classes.secondContainer}>
        <div className={classes.subContainer1}>
          <img src={eyeIcon} alt="icon"></img>
          <p>1</p>
        </div>
        <div className={classes.subContainer2}>
          <img src={downloadIcon} alt="icon"></img>
          <img src={settingIcon} alt="icon"></img>
          <img src={recyclingIcon} alt="icon"></img>
        </div>
      </div>
    </div>
  );
};

export default documentUnit;
