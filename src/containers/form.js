import React from "react";
import { Form } from "../components";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import profile from "../assets/images/manoj.png";
import saly from "../assets/images/Saly-16.svg";

export default function FormContainer() {
  return (
    <Form>
      <Form.Title>The Sparks Foundation Bank</Form.Title>

      <Form.Pane />
      <Form.Profile src={profile} />
      <Form.Pane />
      <Form.Text>Hi,</Form.Text>
      <Form.Pane />
      <Form.Typing>
        I'm{" "}
        <Form.Span>
          <i>Manoj Marmat.</i>
        </Form.Span>
      </Form.Typing>
      <Form.Pane />
      <Form.Text>
        <Form.Black>Check my Profile 👉🏻👨‍💻 </Form.Black>
        <Form.ProfileLink href="https://github.com/Manoj0Marmat">
          github.com/Manoj0Marmat
        </Form.ProfileLink>
      </Form.Text>

      <Form.Text>#1 Basic Banking System</Form.Text>

      <Form.Pane />
      <Link to={ROUTES.HOME}>
        <Form.Button>Take a tour</Form.Button>
      </Link>
      <Form.Img src={saly} />
    </Form>
  );
}
