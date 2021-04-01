import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import product from "public/images/e-commerce/home/product5.png";
import productRight from "public/images/e-commerce/details/1-right.png";
import productCenter from "public/images/e-commerce/details/1-center.png";
import productLeft from "public/images/e-commerce/details/1-left.png";
import rating from "public/images/e-commerce/details/stars.svg";
import person1 from "public/images/e-commerce/details/person1.jpg";
import person2 from "public/images/e-commerce/details/person2.jpg";
import person3 from "public/images/e-commerce/details/person3.jpg";
import product1 from "public/images/e-commerce/home/product1.png";
import product2 from "public/images/e-commerce/home/product2.png";
import product3 from "public/images/e-commerce/home/product3.png";
import product4 from "public/images/e-commerce/home/product4.png";
import mainBanner from "public/images/e-commerce/main_banner.jpg"
import s from "./Categories.module.scss";
import car from "public/images/e-commerce/home/car.svg";
import call from "public/images/e-commerce/home/headphones.svg";
import moneyBack from "public/images/e-commerce/home/Sync.svg";
import insta1 from "public/images/e-commerce/home/insta1.png";
import insta2 from "public/images/e-commerce/home/insta2.png";
import insta3 from "public/images/e-commerce/home/insta3.png";
import insta4 from "public/images/e-commerce/home/insta4.png";
import insta5 from "public/images/e-commerce/home/insta5.png";
import insta6 from "public/images/e-commerce/home/insta6.png";
import chevronRightIcon from "public/images/e-commerce/details/chevron-right.svg";
import chevronLeftIcon from "public/images/e-commerce/details/chevron-left.svg";
import actions from "redux/actions/products/productsFormActions";
import Head from "next/head";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const products = [
  {
    id: 0,
    img: product1,
  },
  {
    id: 1,
    img: product2,
  },
  {
    id: 2,
    img: product3,
  },
  {
    id: 3,
    img: product4,
  },
  {
    id: 3,
    img: product1,
  },
  {
    id: 4,
    img: product2,
  },
  {
    id: 5,
    img: product3,
  },
  {
    id: 6,
    img: product4,
  },
];

const Categories = () => {




  return (
    <>
      <Head>
        <title>Categories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer />
      <Container className={s.bannersContainer}>
        <Row>
          <Col md={12}>
            <Link href="/">
              <div className={s.mainBanner}>
                <img src={mainBanner} alt="banner" />
                <h2>NEW ARRIVALS</h2>
              </div>
            </Link>
          </Col>
          <Col md={6} xs={12}>
            <Link href="/">
              <div className={`${s.categoryBlock}`}>
                <div className={s.rightDiscount}>SPRING SALE</div>
              </div>
            </Link>
          </Col>
          <Col md={6} xs={12}>
            <Link href="/">
              <div className={`${s.livingRoomBanner}`}>
                <div className={s.textContent}>
                  <div>
                    <span>Accessories</span>
                    <strong>For Living Room</strong>
                    <b>View Collection</b>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} xs={12}>
            <Link href="/">
              <div className={s.pillows}>
                <div>
                  <span>up to 60%</span>
                  <strong>Pillows</strong>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} xs={12}>
          <Link href="/">
              <div className={`${s.kitchenBanner}`}>
                <div className={s.textContent}>
                  <div>
                    <span>Accessories</span>
                    <strong>For Living Room</strong>
                    <b>View Collection</b>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} xs={12}>
            <Link href="/">
              <div className={s.bedLinen}>
                <strong>Bed Linen</strong>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={"mb-5"} style={{ position: "relative" }}>
          <h2 className={s.relatedTitle}>You may also like:</h2>
          <CarouselProvider
              totalSlides={8}
              visibleSlides={4}
              style={{width: '100%'}}
              infinite
              dragEnabled
              naturalSlideHeight={400}
              naturalSlideWidth={300}
          >
            <ButtonBack style={{position: 'absolute', top: '35%', zIndex: 99, left: -20}} className={"btn bg-transparent border-0 p-0"}>
              <img src={chevronLeftIcon}/>
            </ButtonBack>
            <Slider>
              {products.map((c, index) => (
                  <Slide index={index} key={index}>
                    <Col className={`${s.product}`}>
                      <Link href={`/products/afaf98d5-4060-4408-967b-c4f4af3d186${index + 1}`}>
                        <a>
                          <img
                              src={c.img}
                              className={"img-fluid"}
                              style={{ width: "100%" }}
                          />
                        </a>
                      </Link>
                      <p className={"mt-3 text-muted mb-0"}>Category</p>
                      <Link href={`/products/afaf98d5-4060-4408-967b-c4f4af3d1861`}>
                        <a>
                          <h6
                              className={"fw-bold font-size-base mt-1"}
                              style={{ fontSize: 16 }}
                          >
                            Awesome Product Name
                          </h6>
                        </a>
                      </Link>
                      <h6 style={{ fontSize: 16 }}>$70</h6>
                    </Col>
                  </Slide>
              ))}
            </Slider>
            <ButtonNext style={{position: 'absolute', top: '35%', zIndex: 99, right: -20}} className={"btn bg-transparent border-0 p-0"}>
              <img src={chevronRightIcon}/>
            </ButtonNext>
          </CarouselProvider>
        </Row>
      </Container>
      <hr />
      <div className={s.info}>
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


export default Categories;
