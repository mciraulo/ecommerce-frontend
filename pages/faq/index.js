import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import s from './Faq.module.scss'
import Head from "next/head";

const Index = () => {

  const handleScroll = (elementId) => {
    const element = document.querySelector(`#${elementId}`);
    element.scrollIntoView({behavior: 'smooth'});
    
  }

  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="description" content="Beautifully designed web application template built with React and Bootstrap to create modern apps and speed up development" />
        <meta name="keywords" content="flatlogic, react templates" />
        <meta name="author" content="Flatlogic LLC." />
        <meta charSet="utf-8" />


        <meta property="og:title" content="Flatlogic - React, Vue, Angular and Bootstrap Templates and Admin Dashboard Themes"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://flatlogic-ecommerce.herokuapp.com/"/>
        <meta property="og:image" content="https://flatlogic-ecommerce-backend.herokuapp.com/images/blogs/content_image_six.jpg"/>
        <meta property="og:description" content="Beautifully designed web application template built with React and Bootstrap to create modern apps and speed up development"/>
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="fb:app_id" content="712557339116053" />

        <meta property="og:site_name" content="Flatlogic"/>
        <meta name="twitter:site" content="@flatlogic" />
      </Head>
      <Container className={"mb-5"} style={{ paddingTop: 32 }}>
        <Row className="d-flex justify-content-between">
          <Col sm={3} style={{position: 'sticky', top: 100, height: '100%'}}>
            <h1 className="fw-bold text-uppercase mb-4">faq</h1>
            <p className={`${s.pageSubtitle} mb-5`}>
              Successful brands get into the mind slowly. A blurb in a magazine.
              A mention in a newspaper. A comment from a friend. A display in a
              retail
            </p>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`} onClick={() => handleScroll("company")}>Company Policies</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`} onClick={() => handleScroll("payment")}>Payment Options</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`} onClick={() => handleScroll("terms")}>Terms & Conditions</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}>Positioning</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}>Efficient</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}>Conditions</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}>Mind Procedure</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`} onClick={() => handleScroll("delivery")}>Delivery Job</Button>
            <Button className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}>Marketplace</Button>
          </Col>
          <Col sm={8}>
            <div id={"company"}>
              <h6 className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}>
                company Policies
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Differentiate Yourself And Attract More Attention, Sales, And
                Profits
              </h4>
              <p className="text-muted">
                There is no denying that the success of an advertisement lies
                mostly in the headline. The headline should catch the reader’s
                attention and make him read the rest of the advertisement. the
                reader’s attention and make him read the rest of the
                advertisement.{" "}
              </p>
            </div>
            <hr className="mb-5" />
            <div id={"payment"}>
              <h6 className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}>
                payment options
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Differentiate Yourself And Attract More Attention, Sales, And
                Profits
              </h4>
              <p className="text-muted">
                There is no denying that the success of an advertisement lies
                mostly in the headline. The headline should catch the reader’s
                attention and make him read the rest of the advertisement. the
                reader’s attention and make him read the rest of the
                advertisement.{" "}
              </p>
            </div>
            <hr className="mb-5" />
            <div id={"terms"}>
              <h6 className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}>
                terms & conditions
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Differentiate Yourself And Attract More Attention, Sales, And
                Profits
              </h4>
              <p className="text-muted">
                There is no denying that the success of an advertisement lies
                mostly in the headline. The headline should catch the reader’s
                attention and make him read the rest of the advertisement. the
                reader’s attention and make him read the rest of the
                advertisement.{" "}
              </p>
            </div>
            <hr className="mb-5" />
            <div id={"delivery"}>
              <h6 className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}>
                delivery job
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Differentiate Yourself And Attract More Attention, Sales, And
                Profits
              </h4>
              <p className="text-muted">
                There is no denying that the success of an advertisement lies
                mostly in the headline. The headline should catch the reader’s
                attention and make him read the rest of the advertisement. the
                reader’s attention and make him read the rest of the
                advertisement.{" "}
              </p>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
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
