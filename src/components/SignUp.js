import React, { useState } from "react";
import styles from "./SignUp.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import api from "../api/index";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //Validation states
  const [emailIsValid, setemailIsValid] = useState();
  const [passwordIsSame, setpasswordIsSame] = useState();

  const handleEmail = (event) => {
    !event.target.value.includes("@")
      ? setemailIsValid(false)
      : setemailIsValid(true);

    if (emailIsValid) {
      setEmail(event.target.value);
    }
  };
  const handlePassword = (event) => {
    event.target.value !== confirmPassword
      ? setpasswordIsSame(false)
      : setpasswordIsSame(true);

    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    event.target.value !== password
      ? setpasswordIsSame(false)
      : setpasswordIsSame(true);

    setConfirmPassword(event.target.value);
  };

  const handleEmailValidationText = () => {
    if (emailIsValid === undefined) {
      return <></>;
    }
    if (!emailIsValid) {
      return <Form.Text>Your email is invalid</Form.Text>;
    } else {
      return <Form.Text>All good!</Form.Text>;
    }
  };

  const handlePasswordValidation = () => {
    if (passwordIsSame === undefined) {
      return <></>;
    }
    if (!passwordIsSame) {
      return <Form.Text>Your passwords do not match</Form.Text>;
    } else {
      return <Form.Text>All good!</Form.Text>;
    }
  };

  const handleSubmit = (e) => {
    if (!passwordIsSame && !emailIsValid) {
      setpasswordIsSame(false);
      setemailIsValid(false);
      handleEmailValidationText();
      handlePasswordValidation();
      e.preventDefault();
    } else if (!passwordIsSame) {
      setpasswordIsSame(false);
      handlePasswordValidation();
      e.preventDefault();
    } else if (!emailIsValid) {
      setemailIsValid(false);
      handleEmailValidationText();
      e.preventDefault();
    } else {
      api.createUser({
        email: email,
        password: password,
        is_twitter_logged_in: false,
      });
    }
  };

  return (
    <Container className={styles.mainContainer}>
      <Form className={styles.mainForm}>
        <h1>Sign Up</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
          />
          {handleEmailValidationText()}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleConfirmPassword}
          />
          {handlePasswordValidation()}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
