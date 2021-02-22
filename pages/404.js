import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import img from "public/images/e-commerce/404/404.png";
import s from "pages/error/Error.module.scss";
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
                <title>404</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>
                <Row className={"mb-5"} style={{ marginTop: 32 }}>
                    <section className={s.error}>
                        <Container className={"h-100"}>
                            <Row className={"h-100"}>
                                <Col sm={6}></Col>
                                <Col
                                    sm={6}
                                    className={
                                        "d-flex flex-column justify-content-center align-items-start"
                                    }
                                >
                                    <h3 className={"fw-bold text-primary mb-3"}>OOPS!</h3>
                                    <h2 className={"fw-bold mb-4"}>Something’s Missing</h2>
                                    <p style={{ width: 300 }} className={"mb-5"}>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry
                                    </p>
                                    <Button outline color={"primary"} className={"fw-bold"}>
                                        TAKE ME AWAY
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </section>
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

export const getStaticProps = () => {
    return {
        props: {}
    };
}

export default Index;
