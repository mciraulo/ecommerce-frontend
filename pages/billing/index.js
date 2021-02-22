import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import Link from "next/link";
import s from "./Billing.module.scss";
import heartIcon from "public/images/e-commerce/heart.svg";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";


import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Index = () => {
  const [selected, setSelected] = React.useState(1);

  return (
    <Container className={"mb-5"} style={{ marginTop: 32 }}>
      <Row>
        <Col sm={12}>
          <section className={`${s.loginSection} py-4`}>
            <p className={"mb-0 mr-2"}>Returning customer?</p>
            <Link href={"/login"} className={"text-primary fw-bold"}>
              Click here to Login
            </Link>
          </section>
        </Col>
      </Row>
      <Row className={"my-5"}>
        <Col sm={12}>
          <h3 className={"fw-bold"}>Billing Info</h3>
          <p>
            Choose a payment option below and fill out the aproriate infomation
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ButtonGroup className={`${s.btnGroup}`}>
            <Button
              outline
              color={"primary"}
              active={selected === 1}
              onClick={() => setSelected(1)}
              className={`mr-4 fw-bold ${s.btn}`}
            >
              <img src={heartIcon} className={"mr-3"} />
              Credit Card
            </Button>
            <Button
              outline
              color={"primary"}
              active={selected === 2}
              onClick={() => setSelected(2)}
              className={"mr-4 fw-bold"}
            >
              <img src={heartIcon} className={"mr-3"} />
              PayPal
            </Button>
            <Button
              outline
              color={"primary"}
              active={selected === 3}
              onClick={() => setSelected(3)}
              className={"mr-4 fw-bold"}
            >
              <img src={heartIcon} className={"mr-3"} />
              Cash
            </Button>
            <Button
              outline
              color={"primary"}
              active={selected === 4}
              onClick={() => setSelected(4)}
              className={"fw-bold"}
            >
              <img src={heartIcon} className={"mr-3"} />
              Other
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className={"mt-5"}>
        <Col lg={8} xs={12}>
          <h3 className={"fw-bold mb-5"}>Billing Address</h3>
          <Form className={s.form}>
            <FormGroup>
              <Label for="exampleEmail" className="fw-bold">
                First Name*
              </Label>
              <Input
                type="text"
                name="text"
                id="exampleEmail"
                className="w-100"
              />
            </FormGroup>
            <FormGroup className="d-flex">
              <div className="flex-fill mr-5">
                <Label for="exampleEmail" className="fw-bold">
                  Country*
                </Label>
                <Input type="select" name="text" id="exampleEmail" />
              </div>
              <div className="flex-fill">
                <Label for="exampleEmail" className="fw-bold">
                  City*
                </Label>
                <Input type="select" name="text" id="exampleEmail" />
              </div>
            </FormGroup>
            <FormGroup className="d-flex">
              <div className="flex-fill mr-5">
                <Label for="exampleEmail" className="fw-bold">
                  Street
                </Label>
                <Input type="text" name="text" id="exampleEmail" />
              </div>
              <div className="flex-fill">
                <Label for="exampleEmail" className="fw-bold">
                  Apt / Suite / Other
                </Label>
                <Input type="text" name="text" id="exampleEmail" />
              </div>
            </FormGroup>
            <FormGroup className={`d-flex`}>
              <div className="flex-fill mr-5">
                <Label for="exampleEmail" className="fw-bold">
                  Postcode
                </Label>
                <Input type="text" name="text" id="exampleEmail" />
              </div>
              <div className="flex-fill mr-5">
                <Label for="exampleEmail" className="fw-bold">
                  Phone
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder={"+ 375 (29) "}
                />
              </div>
              <div className="flex-fill">
                <Label for="exampleEmail" className="fw-bold">
                  ZIP Code
                </Label>
                <Input type="text" name="text" id="exampleEmail" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail" className="fw-bold">
                Email*
              </Label>
              <Input type="email" name="text" id="exampleEmail" />
            </FormGroup>
          </Form>
        </Col>
        <Col lg={4} xs={12}>
          <section className={s.paymentInfo}>
            <h3 className={"fw-bold mb-0"}>Credit Card Info</h3>
            <Form className={`${s.form} mt-4`}>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold">
                  Name On Card
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  className="w-100"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold">
                  Card Number
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  className="card w-100"
                  placeholder={"0000 - 0000 - 0000 - 0000"}
                />
              </FormGroup>
              <FormGroup className={`d-flex`}>
                <div className="flex-fill mr-2">
                  <Label for="exampleEmail" className="fw-bold">
                    Exp.Month
                  </Label>
                  <Input type="select" name="text" id="exampleEmail" />
                </div>
                <div className="flex-fill">
                  <Label for="exampleEmail" className="fw-bold">
                    Exp. Year
                  </Label>
                  <Input
                    type="select"
                    name="text"
                    id="exampleEmail"
                    placeholder={"+ 375 (29) "}
                  />
                </div>
              </FormGroup>
              <FormGroup className={"d-flex"}>
                <div className="mr-4">
                  <Label for="exampleEmail" className="fw-bold">
                    CVV
                  </Label>
                  <Input
                    type="text"
                    name="text"
                    id="exampleEmail"
                    placeholder={"123"}
                    className={"info"}
                    style={{ maxWidth: "78%", minWidth: "78%" }}
                  />
                </div>
                <Label check className={"d-flex align-items-center"}>
                  <Input
                    type="checkbox"
                    style={{ marginTop: 26, marginLeft: -21 }}
                  />
                  <p className={"mb-0 align-self-end"}>
                    Set as default payment method
                  </p>
                </Label>
              </FormGroup>
            </Form>
            <ElementsProvider />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

const CheckoutForm = () => {
  const [success, setSuccess] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    toast.info("products successfully bought");

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <CardElement />
      <Button
        color={"primary"}
        className={`${s.checkOutBtn} text-uppercase mt-auto fw-bold`}
      >
        <Link href={"/billing"}>PLACE ORDER</Link>
      </Button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51HUCprJMc0TzjdrX6UigiucFDTS68cRAy45Y8zHj6eGm89KhvOZXCRRqaPAKThswy2UbeQ65rrjFZH8x2w50feSo00uRmReo8U"
);

const ElementsProvider = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default Index;
