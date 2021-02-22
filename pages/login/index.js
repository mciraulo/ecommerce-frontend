import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Link from 'next/link'
import { connect } from "react-redux";
import {
  Container,
  Alert,
  Button,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import Widget from "components/admin/Widget";
import { loginUser, receiveToken, doInit } from "redux/actions/auth";
import jwt from "jsonwebtoken";
import microsoft from "public/images/microsoft.png";
import { push } from "connected-react-router";
import img from "public/images/e-commerce/login/bg.svg";
import logo from "public/images/e-commerce/logo.svg";

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated() {
    const token = typeof window !== "undefined" && localStorage.getItem("token");
    if (!token) return;
    const date = new Date().getTime() / 1000;
    const data = jwt.decode(token);
    if (!data) return;
    return date < data.exp;
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "admin@flatlogic.com",
      password: "password",
    };

    this.doLogin = this.doLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.microsoftLogin = this.microsoftLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doLogin(e) {
    e.preventDefault();
    this.props.dispatch(
      loginUser({ email: this.state.email, password: this.state.password })
    );
  }

  googleLogin() {
    this.props.dispatch(loginUser({ social: "google" }));
  }

  microsoftLogin() {
    this.props.dispatch(loginUser({ social: "microsoft" }));
  }

  componentDidMount() {
    // const params = new URLSearchParams(this.props.location.search);
    // const token = params.get("token");
    // if (token) {
    //   this.props.dispatch(receiveToken(token));
    //   this.props.dispatch(doInit());
    // }
  }

  signUp() {
    this.props.dispatch(push("/register"));
  }

  render() {

    if (typeof window !== 'undefined' && Login.isAuthenticated()) {
      console.log('here')
      this.props.router.push('/admin/dashboard');
    }

    return (
      <Row className={"no-gutters"} style={{ height: "100vh" }}>
        <Col
          xs={12}
          md={6}
          className={
            "d-flex flex-column justify-content-center align-items-center h-100"
          }
        >
          <Container>
            <Row className={"d-flex justify-content-center"}>
              <Col xs={"auto"}>
                <Link href={"/"}>
                  <img src={logo} alt={"logo"} style={{ marginBottom: 120 }} />
                </Link>
                <h5 className={"fw-bold mb-5"}>Login</h5>
                <Form className={"w-100"} onSubmit={this.doLogin}>
                  <FormGroup>
                    <Label for="exampleEmail" className="fw-bold">
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="text"
                      id="exampleEmail"
                      style={{ width: 440 }}
                      placeholder={"Email"}
                      value={this.state.email}
                      onChange={this.changeEmail}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail" className="fw-bold">
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="text"
                      id="exampleEmail"
                      className="w-100"
                      placeholder={"Password"}
                      value={this.state.password}
                      onChange={this.changePassword}
                      required
                    />
                  </FormGroup>
                  <div
                    className={
                      "d-flex justify-content-between align-items-center mt-5"
                    }
                  >
                    <Link href={"/register"} className={"fw-bold text-primary"}>
                      Create an account
                    </Link>
                    <Button
                      color={"primary"}
                      className={"fw-bold text-uppercase"}
                    >
                      Login
                    </Button>
                  </div>
                </Form>
                <footer
                  style={{ marginTop: 180 }}
                  className={"d-flex justify-content-between"}
                >
                  <Link href={"#"} className={"fw-bold text-dark"}>
                    Terms & Conditions
                  </Link>
                  <Link href={"#"} className={"fw-bold text-dark"}>
                    Privacy Policy
                  </Link>
                  <Link href={"#"} className={"fw-bold text-dark"}>
                    Help
                  </Link>
                </footer>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={6} className={"d-none d-md-inline-block h-100"}>
          <img
            src={img}
            style={{ position: "absolute", right: 0, height: "100vh" }}
          />
        </Col>
      </Row>
    );
  }
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
