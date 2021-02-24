import React from "react";
import { Container, Row, Col, Table, Button } from "reactstrap";
import product1 from "public/images/e-commerce/home/product1.png";
import product2 from "public/images/e-commerce/home/product2.png";
import product3 from "public/images/e-commerce/home/product3.png";
import cart from "public/images/e-commerce/shopping-cart.svg";
import close from "public/images/e-commerce/close.svg";
import s from "pages/index.module.scss";
import car from "public/images/e-commerce/home/car.svg";
import call from "public/images/e-commerce/home/headphones.svg";
import moneyBack from "public/images/e-commerce/home/Sync.svg";
import insta1 from "public/images/e-commerce/home/insta1.png";
import insta2 from "public/images/e-commerce/home/insta2.png";
import insta3 from "public/images/e-commerce/home/insta3.png";
import insta4 from "public/images/e-commerce/home/insta4.png";
import insta5 from "public/images/e-commerce/home/insta5.png";
import insta6 from "public/images/e-commerce/home/insta6.png";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import s1 from "./Wishlist.module.scss";
import Head from "next/head";
import {toast, ToastContainer} from "react-toastify";
import productsListActions from "../../redux/actions/products/productsListActions";

const Cart = () => {
  const [test, setTest] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const currentUser = useSelector((store) => store.auth.currentUser);
  const dispatchStore = useDispatch()
  React.useEffect(() => {
    if (currentUser) {
      axios.get(`/users/${currentUser.id}`).then((res) => {
        res.data.wishlist.map((item) => {
          axios.get(`/products/${item.id}`).then((res) => {
            setProducts((prevState) => [...prevState, res.data]);
          });
        });
      });
    }
    if (localStorage.getItem("wishlist") && !currentUser) {
      JSON.parse(localStorage.getItem("wishlist")).map((item, index) => {
        axios.get(`/products/${item.product}`).then((res) => {
          setProducts((prevState) => [...prevState, res.data]);
        });
      });
    }
  }, [test]);

  const removeFromWishlist = (id) => {
    if (currentUser) {
      axios.put(`/users/${currentUser.id}`, {
        id: currentUser.id,
        data: {
          ...currentUser,
          wishlist: [],
        },
      });
      setTest(true);
    } else {
      typeof window !== 'undefined' && localStorage.removeItem("wishlist")
      setProducts([])
    }
  };

  const addToCart = (id) => {
    if (currentUser) {
      axios.post(`/orders/`, {
        data: {
          amount: 1,
          order_date: new Date(),
          product: id,
          status: "in cart",
          user: currentUser.id,
        },
      });
      return;
    }
    const localProducts =
        (typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("products"))) ||
        [];
    localProducts.push({
      amount: 1,
      order_date: new Date(),
      product: id,
      status: "in cart",
    });
    typeof window !== "undefined" &&
    localStorage.setItem("products", JSON.stringify(localProducts));
    dispatchStore(productsListActions.doAdd(localProducts))
    localStorage.removeItem("wishlist");
    setProducts([])
  };

  return (
    <>
      <Head>
        <title>Wishlist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <ToastContainer />
        <Row className={"mb-5"} style={{ marginTop: 32 }}>
          <Col xs={12}>
            <h2 className={"fw-bold mt-4 mb-4"}>Wishlist</h2>
            <Table borderless>
              <thead>
                <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                  <th className={"bg-transparent text-dark px-0"}>Product</th>
                  <th className={"bg-transparent text-dark px-0"}>Price</th>
                  <th className={"bg-transparent text-dark px-0"}>
                    Stock status
                  </th>
                  <th className={"bg-transparent text-dark px-0"} />
                  <th className={"bg-transparent text-dark px-0"} />
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <h5 className={"fw-bold mt-3"}>No items</h5>
                ) : (
                  <>
                    {products.map((item, index) => (
                      <tr className={"mt-2"}>
                        <td className={"px-0 pt-4"}>
                          <div className={"d-flex align-items-center"}>
                            <img
                              src={item.image[0].publicUrl}
                              width={100}
                              className={"mr-4"}
                            />
                            <div>
                              <h6 className={"text-muted"}>
                                {item.categories[0].title[0].toUpperCase() +
                                  item.categories[0].title.slice(1)}
                              </h6>
                              <h5 className={"fw-bold"}>{item.title}</h5>
                            </div>
                          </div>
                        </td>
                        <td className={"px-0 pt-4"}>
                          <h6 className={"fw-bold mb-0"}>${item.price}</h6>
                        </td>
                        <td className={"px-0 pt-4"}>
                          <h6
                            className={`fw-bold mb-0 text-uppercase ${
                              item.status === "out of stock" && "text-muted"
                            }`}
                          >
                            {item.status}
                          </h6>
                        </td>
                        <td className={"px-0 pt-4"}>
                          {item.status === "out of stock" ? null : (
                            <Button
                              color={"primary"}
                              outline
                              className={`text-uppercase d-flex align-items-center ${s1.addToCartBtn}`}
                              size={"sm"}
                              onClick={() => {
                                addToCart(item.id)
                                toast.info(
                                    "product successfully added to your cart"
                                );
                              }}
                            >
                              <div className={`mr-2 ${s1.addToCart}`} />
                              add to cart
                            </Button>
                          )}
                        </td>
                        <td className={"px-0 pt-4"}>
                          <Button
                            className={"bg-transparent border-0 p-0"}
                            onClick={() => {
                              removeFromWishlist(item.id)
                              toast.info(
                                  "product successfully removed"
                              );
                            }}
                          >
                            <img src={close} alt={"close"} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className={`${s.info}`}>
        <Container className={"h-100"}>
          <Row
            className={"h-100 justify-content-between flex-column flex-md-row"}
          >
            <Col
              xs={12}
              md={4}
              className={`h-100 d-flex align-items-center ${s.info__item} justify-content-center`}
            >
              <section className={"d-flex align-items-center"}>
                <img src={car} className={"mr-3"} />
                <div>
                  <h5 className={"fw-bold text-uppercase"}>free shipping</h5>
                  <p className={"text-muted mb-0"}>On all orders of $ 150</p>
                </div>
              </section>
            </Col>
            <Col
              xs={12}
              md={4}
              className={`h-100 d-flex align-items-center ${s.info__item} justify-content-center`}
            >
              <section className={"d-flex align-items-center"}>
                <img src={call} className={"mr-3"} />
                <div>
                  <h5 className={"fw-bold text-uppercase"}>24/7 support</h5>
                  <p className={"text-muted mb-0"}>Get help when you need it</p>
                </div>
              </section>
            </Col>
            <Col
              xs={12}
              md={4}
              className={`h-100 d-flex align-items-center ${s.info__item} justify-content-center`}
            >
              <section className={"d-flex align-items-center"}>
                <img src={moneyBack} className={"mr-3"} />
                <div>
                  <h5 className={"fw-bold text-uppercase"}>100% money back</h5>
                  <p className={"text-muted mb-0"}>
                    30 day money back guarantee
                  </p>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
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

export default Cart;
