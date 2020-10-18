import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import api from "../api/index";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignUpSuccessful = () => {
  return (
    <>
      <div className={styles.successContainer}>
        <h1>You are now signed up! Log in here:</h1>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
      </div>
    </>
  );
};

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [usersList, setUsersList] = useState();

  const history = useHistory();

  //Validation states
  const [emailIsValid, setemailIsValid] = useState();
  const [emailIsSame, setemailIsSame] = useState(false);
  const [passwordIsSame, setpasswordIsSame] = useState();

  useEffect(() => {
    api.getAllUsers().then((res) => {
      setUsersList(res.data);
      console.log(res.data);
    });
  }, []);

  const handleEmail = (event) => {
    let emailIsSameTemp = false;
    !event.target.value.includes("@")
      ? setemailIsValid(false)
      : setemailIsValid(true);

    usersList.forEach((user) => {
      if (event.target.value === user.email) {
        emailIsSameTemp = true;
      }
    });

    emailIsSameTemp ? setemailIsSame(true) : setemailIsSame(false);

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
    if (emailIsSame) {
      return <Form.Text>This email is already used.</Form.Text>;
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
    if (!passwordIsSame && !emailIsValid && emailIsSame) {
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
    } else if (emailIsSame) {
      handleEmailValidationText();
      e.preventDefault();
    } else {
      api.createUser({
        email: email,
        password: password,
        is_twitter_logged_in: false,
      });

      history.push("/sign-up-successful");
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
