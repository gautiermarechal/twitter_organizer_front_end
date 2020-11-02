import React, { useState } from "react";
import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import api from "../api/index";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [emailIsValid, setemailIsValid] = useState();
  const [password, setPassword] = useState();
  const [notFound, setNotFound] = useState();
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.includes("@") && event.target.value !== "") {
      setemailIsValid(true);
    } else {
      setemailIsValid(false);
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailIsValid) {
      await api
        .getUserByEmail(email)
        .then((res, req) => {
          console.log(res);
          if (res.data.length === 0) {
            setNotFound(true);
            setShowModal(true);
          }
          // SUCCESS
          else if (res.data[0].password === password) {
            setNotFound(false);
            localStorage.setItem("useremail", email);
            history.push("/account");
          } else {
            setNotFound(true);
            setShowModal(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const NotFoundModal = () => {
    return (
      <div
        className={showModal ? styles.mainContainerModal : styles.closedModal}
        onClick={closeModal}
      >
        <div className={styles.internalContainerModal}>
          <span className={styles.closeButton} onClick={closeModal}>
            X
          </span>
          <p>We could not find you...</p>
          <p>Your email address or your password might be wrong. Try again!</p>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container className={styles.mainContainer}>
        <Form className={styles.mainForm} onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmail}
              required="true"
            />
            {emailIsValid === false && (
              <Form.Text>This email is not valid</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              required="true"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {notFound && showModal && <NotFoundModal />}
      </Container>
    </>
  );
};

export default Login;
