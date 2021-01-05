import React, { Component } from "react";
import User from "../../components/User/User";
import { Modal, Button, Form, FormControl } from "react-bootstrap";

import classes from "./AddInstitutions.css";

class AddInstitutions extends Component {
  render() {
    return (
      <div className={classes.AddInstitutions}>
        <User />
        <div className={classes.headerText}>
          MENU / ĐƠN VỊ CHUYÊN MÔN / TẠO MỚI ĐƠN VỊ CHUYÊN MÔN{" "}
        </div>
        <p className={classes.formHeaderLine}>TẠO MỚI ĐƠN VỊ CHUYÊN MÔN</p>
        <form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </form>
      </div>
    );
  }
}

export default AddInstitutions;
