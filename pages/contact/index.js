import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import img from "public/images/e-commerce/contact/img.png";
import insta1 from "public/images/e-commerce/home/insta1.png";
import insta2 from "public/images/e-commerce/home/insta2.png";
import insta3 from "public/images/e-commerce/home/insta3.png";
import insta4 from "public/images/e-commerce/home/insta4.png";
import insta5 from "public/images/e-commerce/home/insta5.png";
import insta6 from "public/images/e-commerce/home/insta6.png";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Row className={"mb-5"} style={{ marginTop: 32 }}>
          <Col sm={6} className="d-flex flex-column justify-content-between">
            <div>
              <h2 className={"fw-bold"}>Contact Us</h2>
              <h6 className={"text-muted"}>
                Choose a payment option below and fill out
              </h6>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold text-muted">
                  Name
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
                  <Label for="exampleEmail" className="fw-bold text-muted">
                    Email
                  </Label>
                  <Input type="email" name="email" id="exampleEmail1" />
                </div>
                <div className="flex-fill">
                  <Label for="exampleEmail" className="fw-bold text-muted">
                    Phone
                  </Label>
                  <Input type="phone" name="text" id="exampleEmail" />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold text-muted">
                  Your Message
                </Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleEmail"
                  className="w-100"
                  style={{ height: 155 }}
                />
              </FormGroup>
            <FormGroup>
            <Button
              color="primary"
              className="text-uppercase fw-bold align-self-start"
              type={"submit"}
              onClick={e => e.preventDefault()}
            >
              send message
            </Button>
            </FormGroup>
            </Form>
          </Col>
          <Col sm={6} className="d-flex justify-content-end">
            <img src={img} alt="" />
          </Col>
        </Row>
      </Container>
      <section style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={"text-center fw-bold mb-4"}>Follow us on Instagram</h3>
        <Row className={"no-gutters"}>
          <Col md={2} xs={12}>
            <img src={insta1} className={"w-100"} />
          </Col>
          <Col md={2} xs={12}>
            <img src={insta2} className={"w-100"} />
          </Col>
          <Col md={2} xs={12}>
            <img src={insta3} className={"w-100"} />
          </Col>
          <Col md={2} xs={12}>
            <img src={insta4} className={"w-100"} />
          </Col>
          <Col md={2} xs={12}>
            <img src={insta5} className={"w-100"} />
          </Col>
          <Col md={2} xs={12}>
            <img src={insta6} className={"w-100"} />
          </Col>
        </Row>
      </section>
    </>
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
