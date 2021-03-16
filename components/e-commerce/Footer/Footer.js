import React from "react";
import s from "./Footer.module.scss";
import { Container, Row, Col, Input, Button } from "reactstrap";
import Link from 'next/link'

import logo from "public/images/e-commerce/logo-white.svg";
import google from "public/images/e-commerce/google.svg";
import twitter from "public/images/e-commerce/twitter.svg";
import linkedin from "public/images/e-commerce/linkedin.svg";
import facebook from "public/images/e-commerce/facebook.svg";

const Footer = () => {
  const [innerWidth, setInnerWidth] = React.useState(1440);

  React.useEffect(() => {
    typeof window !== "undefined" && window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  return (
    <footer className={s.footer}>
      <Container>
        <Row className={"justify-content-between"}>
          <Col sm={5}>
            <h5 className={"text-white fw-bold"}>Many desktop publishing</h5>
            <p className={"text-muted mt-3"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </Col>
          <Col sm={5} className={"d-flex align-items-center"}>
            <Input
              type={"email"}
              placeholder={"Enter your email"}
              className={"mr-3 border-0"}
              style={{ height: 51 }}
            />
            <Button color={"primary"} className={"fw-bold"}>
              Subscribe
            </Button>
          </Col>
        </Row>
        {innerWidth >= 768 && (
          <>
            <hr className={s.footer__hr} />
            <Row className={"my-5 justify-content-between"}>
              <Col
                sm={5}
                className={"d-flex flex-column justify-content-between"}
              >
                <div>
                  <img alt="img" src={logo} className={"mb-4"} />
                  <p className={"text-white fw-thin mb-0"}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </div>
                <div>
                <Link href="https://flatlogic.com/">
                  <a className={s.socialLink} target="_blank" rel="noopener noreferrer">
                    <img src={google} alt="google" className={"mr-4"} />
                  </a>
                  </Link>
                  <Link href="https://twitter.com/flatlogic">
                    <a className={s.socialLink} target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt="twitter" className={"mr-4"} />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/flatlogic/">
                    <a className={s.socialLink} target="_blank" rel="noopener noreferrer">
                      <img src={linkedin} alt="linkedin" className={"mr-4"} />
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/flatlogic/">
                    <a className={s.socialLink} target="_blank" rel="noopener noreferrer">
                      <img src={facebook} alt="facebook" className={"mr-4"} />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col sm={7}>
                <Row className={"justify-content-end flex-nowrap"}>
                  <Col sm={"auto"}>
                    <h5 className={"text-white fw-bold text-uppercase mb-4"}>
                      company
                    </h5>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>What We Do</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Available Services</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Latest Posts</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>FAQs</h6></Link>
                  </Col>
                  <Col sm={"auto"}>
                    <h5 className={"text-white fw-bold text-uppercase mb-4"}>
                      my account
                    </h5>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Sign In</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>View Cart</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Order Tracking</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Help & Support</h6></Link>
                  </Col>
                  <Col sm={"auto"}>
                    <h5
                      className={
                        "text-white fw-bold text-uppercase text-nowrap mb-4"
                      }
                    >
                      customer service
                    </h5>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Help & Contact Us</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Returns & Refunds</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Online Stores</h6></Link>
                    <Link href="/"><h6 className={`mb-3 ${s.navigationLink}`}>Terms & Conditions</h6></Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
        <hr className={`${s.footer__hr} mb-0`} />
        <Row style={{ padding: "30px 0" }}>
          <Col sm={12}>
            <p className={"text-muted mb-0"}>© 2020-{new Date().getFullYear()} powered by <Link href="https://flatlogic.com"><span className={s.navigationLink}>Flatlogic</span></Link></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

