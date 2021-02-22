import React from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import {useSelector} from 'react-redux'
import s from "./Account.module.scss";
import product from "public/images/e-commerce/account/products.svg";
import settings from "public/images/e-commerce/account/settings.svg";
import avatar from "public/images/e-commerce/account/avatar.svg";
import edit from "public/images/e-commerce/account/edit.svg";
import visa from "public/images/e-commerce/account/visa.svg";

const Index = () => {
  const currentUser = useSelector(store => store.auth.currentUser)
  console.log(currentUser)
  return (
    <Container className={"mb-5"} style={{ marginTop: 32 }}>
      <Row>
        <Col xs={8}>
          <h3 className={"fw-bold mb-4"}>My Account</h3>
          <Row>
            <Col xs={6}>
              <section className={s.promo1}>
                <h3 className={"text-muted fw-bold mb-0"}>sale up to</h3>
                <h1 className={"text-primary fw-bold mb-3"}>30%</h1>
                <p className={"fw-bold"}>Read More</p>
              </section>
            </Col>
            <Col xs={6}>
              <section className={s.promo2}>
                <h3 className={"text-muted fw-bold mb-0"}>sale up to</h3>
                <h1 className={"text-primary fw-bold mb-3"}>30%</h1>
                <p className={"fw-bold"}>Read More</p>
              </section>
            </Col>
          </Row>
          <Row className={"mt-5"}>
            <Col xs={12}>
              <h3 className={"fw-bold mb-4"}>My Orders</h3>
              <Table borderless>
                <thead>
                  <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                    <th className={"bg-transparent text-dark px-0"}>Date</th>
                    <th className={"bg-transparent text-dark px-0"}>Product</th>
                    <th className={"bg-transparent text-dark px-0"}>
                      Delivery
                    </th>
                    <th className={"bg-transparent text-dark px-0"}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={"mt-2"}>
                    <td className={"px-0 pt-4"}>
                      <p className={"text-muted"}>16.06.2020</p>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <div className={"d-flex align-items-center"}>
                        <img src={product} width={100} className={"mr-4"} />
                        <div>
                          <h6 className={"text-muted"}>Delivered</h6>
                          <h5 className={"fw-bold"}># 123345</h5>
                        </div>
                      </div>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <h6 className={"fw-bold mb-0"}>$5</h6>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <h6 className={"fw-bold mb-0"}>$70</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className={"px-0 pt-4"}>
                      <p className={"text-muted"}>16.06.2020</p>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <div className={"d-flex align-items-center"}>
                        <img src={product} width={100} className={"mr-4"} />
                        <div>
                          <h6 className={"text-muted"}>Delivered</h6>
                          <h5 className={"fw-bold"}># 123345</h5>
                        </div>
                      </div>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <h6 className={"fw-bold mb-0"}>$5</h6>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <h6 className={"fw-bold mb-0"}>$70</h6>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                    <td className={"px-0 pt-4"}>
                      <p className={"text-muted"}>16.06.2020</p>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <div className={"d-flex align-items-center"}>
                        <img src={product} width={100} className={"mr-4"} />
                        <div>
                          <h6 className={"text-muted"}>Delivered</h6>
                          <h5 className={"fw-bold"}># 123345</h5>
                        </div>
                      </div>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <h6 className={"fw-bold mb-0"}>$5</h6>
                    </td>
                    <td className={"px-0 pt-4"}>
                      <h6 className={"fw-bold mb-0"}>$70</h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <section className={s.profile}>
            <Button className={"bg-transparent border-0 p-0"}>
            <img src={settings} alt={"settings"} className={s.settingsIcon} />
            </Button>
            <img src={avatar} alt={"avatar"} />
            <h5 className={"text-primary fw-bold mt-4"}>Michael Daineka</h5>
            <p className={"text-muted"}>michaeldaineka@gmail.com</p>
            <div className={"d-flex justify-content-between w-100 mt-4"}>
              <div className={"d-flex flex-column align-items-center"}>
                <h6 className={"fw-bold text-muted text-uppercase"}>Title</h6>
                <p className={"fw-bold"}>65</p>
              </div>
              <div className={"d-flex flex-column align-items-center"}>
                <h6 className={"fw-bold text-muted text-uppercase"}>Title</h6>
                <p className={"fw-bold"}>0</p>
              </div>
              <div className={"d-flex flex-column align-items-center"}>
                <h6 className={"fw-bold text-muted text-uppercase"}>Title</h6>
                <p className={"fw-bold"}>145</p>
              </div>
            </div>
            <hr />
            <div className={"w-100 mt-3"}>
              <div
                className={"d-flex justify-content-between align-items-start"}
              >
                <div style={{ width: 170 }}>
                  <h6 className={"fw-bold"}>Delivery Address</h6>
                  <p className={"text-muted mt-4"}>
                    Mr. Robbie Williams 94 Kings Road, London SW39 6AZ
                  </p>
                </div>
                <Button className={"bg-transparent border-0 p-0"}>
                <img src={edit} alt={"edit"} />
                </Button>
              </div>
            </div>
            <hr />
            <div className={"w-100 mt-3"}>
              <div
                className={"d-flex justify-content-between align-items-start"}
              >
                <div style={{ width: 170 }}>
                  <h6 className={"fw-bold"}>Payment Method</h6>
                  <div className={"d-flex align-items-center mt-4 mb-3"}>
                    <img src={visa} alt={"visa"} className={"mr-3"} />
                    <p className={"mb-0"}>•••• •••• •••• 5632</p>
                  </div>
                </div>
                <Button className={"bg-transparent border-0 p-0"}>
                <img src={edit} alt={"edit"} />
                </Button>
              </div>
            </div>
            <hr />
            <div className={"w-100 mt-3"}>
              <div
                className={"d-flex justify-content-between align-items-start"}
              >
                <div style={{ width: 170 }}>
                  <h6 className={"fw-bold"}>Billing Address</h6>
                  <p className={"text-muted mt-4"}>
                    Mr. Robbie Williams 94 Kings Road, London SW39 6AZ
                  </p>
                </div>
                <Button className={"bg-transparent border-0 p-0"}>
                <img src={edit} alt={"edit"} />
                </Button>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
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
