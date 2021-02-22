import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import Link from "next/link";
import img1 from "public/images/e-commerce/blog/img1.png";
import img2 from "public/images/e-commerce/blog/img2.png";
import article1 from "public/images/e-commerce/home/article1.png";
import article2 from "public/images/e-commerce/home/article2.png";
import article3 from "public/images/e-commerce/home/article3.png";
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
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className={"mb-5"} style={{ marginTop: 32 }}>
        <Row>
          <Col xs={12} lg={8}>
            <h3 className="fw-bold mb-5">Blog</h3>
            <Link href={"blog/article"}>
              <a>
                <img src={img1} alt="img1" className="mb-4 img-fluid" />
              </a>
            </Link>
            <h6 className="fw-bold text-primary mb-3 text-uppercase mt-3">
              Technology
            </h6>
            <Link href={"blog/article"}>
              <a className={"text-dark"}>
                <h4 className="fw-bold mb-4">
                  Differentiate Yourself And Attract More Attention
                </h4>
              </a>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s but also the leap{" "}
            </p>
            <p className={"text-muted mt-2"}>June 30, 2017</p>
            <Link href={"blog/article"}>
              <a>
                <img src={img2} alt="img2" className="mb-4 mt-5 img-fluid" />
              </a>
            </Link>
            <h6 className="fw-bold text-primary mb-3 text-uppercase mt-3">
              Technology
            </h6>
            <Link href={"blog/article"}>
              <a className={"text-dark"}>
                <h4 className="fw-bold mb-4">
                  Differentiate Yourself And Attract More Attention
                </h4>
              </a>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s but also the leap{" "}
            </p>
            <p className={"text-muted mt-2"}>June 30, 2017</p>
          </Col>
          <Col xs={12} lg={4}>
            <h3 className="fw-bold mb-4">Search</h3>
            <Input
              type="search"
              name="text"
              id="exampleEmail"
              className="w-100 blog-search"
              placeholder={"Index in blog"}
            />
            <hr className={"my-5"} />
            <h6 className={"text-uppercase fw-bold mb-4"}>Cathegories</h6>
            <div className={"d-flex justify-content-between mt-3"}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  <p style={{ fontWeight: 500 }} className={"mb-0"}>
                    Basic
                  </p>
                </a>
              </Link>
              <p style={{ fontWeight: 500 }} className={"mb-0"}>
                3
              </p>
            </div>
            <div className={"d-flex justify-content-between mt-3"}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  <p style={{ fontWeight: 500 }} className={"mb-0"}>
                    Creative
                  </p>
                </a>
              </Link>
              <p style={{ fontWeight: 500 }} className={"mb-0"}>
                6
              </p>
            </div>
            <div className={"d-flex justify-content-between mt-3"}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  <p style={{ fontWeight: 500 }} className={"mb-0"}>
                    Offers & Deals
                  </p>
                </a>
              </Link>
              <p style={{ fontWeight: 500 }} className={"mb-0"}>
                1
              </p>
            </div>
            <div className={"d-flex justify-content-between mt-3"}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  <p style={{ fontWeight: 500 }} className={"mb-0"}>
                    Decorations
                  </p>
                </a>
              </Link>
              <p style={{ fontWeight: 500 }} className={"mb-0"}>
                12
              </p>
            </div>
            <div className={"d-flex justify-content-between mt-3"}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  <p style={{ fontWeight: 500 }} className={"mb-0"}>
                    Gift Cards
                  </p>
                </a>
              </Link>
              <p style={{ fontWeight: 500 }} className={"mb-0"}>
                3
              </p>
            </div>
            <div className={"d-flex justify-content-between mt-3"}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  <p style={{ fontWeight: 500 }} className={"mb-0"}>
                    Classic Collection
                  </p>
                </a>
              </Link>
              <p style={{ fontWeight: 500 }} className={"mb-0"}>
                2
              </p>
            </div>
            <hr className={"my-5"} />
            <h3 className={"fw-bold mb-5"}>Recent Posts</h3>
            <Row>
              <Col xs={12} className={"mb-4 d-flex flex-column"}>
                <Link href={"/blog/article"}>
                  <a>
                    <img src={article1} className={"img-fluid"} />
                  </a>
                </Link>
                <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      className={"fw-bold font-size-base mt-1"}
                      style={{ fontSize: 16, color: "#232323" }}
                    >
                      What is Lorem Ipsum?
                    </h6>
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      style={{ fontSize: 16 }}
                      className={"fw-bold text-primary"}
                    >
                      Read More
                    </h6>
                  </a>
                </Link>
              </Col>
              <Col xs={12} className={"mb-4 d-flex flex-column"}>
                <Link href={"/blog/article"}>
                  <a>
                    <img src={article2} className={"img-fluid"} />
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      className={"fw-bold font-size-base mt-1"}
                      style={{ fontSize: 16, color: "#232323" }}
                    >
                      What is Lorem Ipsum?
                    </h6>
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      style={{ fontSize: 16 }}
                      className={"fw-bold text-primary"}
                    >
                      Read More
                    </h6>
                  </a>
                </Link>
              </Col>
            </Row>
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
