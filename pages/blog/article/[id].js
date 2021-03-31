import React from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import headerImg from "public/images/e-commerce/blog/article/header.png";
import articleImg from "public/images/e-commerce/blog/article/article-image.png";
import person from "public/images/e-commerce/blog/article/person.svg";
import s from "./Article.module.scss";
import article1 from "public/images/e-commerce/home/article1.png";
import article2 from "public/images/e-commerce/home/article2.png";
import article3 from "public/images/e-commerce/home/article3.png";
import Head from "next/head";

const Id = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title && post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {console.log(post)}
      <img
        src={post.hero_image[0] && post.hero_image[0].publicUrl}
        alt={"header"}
        className={"w-100"}
        style={{ marginTop: 32, maxHeight: 440 }}
      />
      <Container className={"mb-5 mt-5 d-flex flex-column align-items-center"}>
        <Row style={{ width: 700 }}>
          <h1 className={"fw-bold mb-0"}>
            {post.title && post.title}
          </h1>
          <blockquote
            className={"d-flex"}
            style={{ marginTop: 35, marginBottom: 40 }}
          >
            <div className={"d-flex flex-column"}>
              <div
                className={"d-flex align-items-center"}
                style={{ marginBottom: 35 }}
              >
                <img src={post.author_avatar[0] && post.author_avatar[0].publicUrl} alt="person" className={"mr-3"} />
                <p className={"text-uppercase fw-bold text-primary mb-0"}>
                  By {post.author_name && post.author_name}
                </p>
              </div>
              <h5 className={"fw-bold mb-0"}>
                {post.epigraph && post.epigraph}
              </h5>
            </div>
          </blockquote>
       
        </Row>
        <Row className={"mt-5"}>
          <Col xs={12}>
            <img src={post.blog_image_one[0] && post.blog_image_one[0].publicUrl} alt={"article"} />
            <p className={"text-muted mt-3"}>
              {post.blog_image_one_annotation && post.blog_image_one_annotation}
            </p>
          </Col>
        </Row>
        <Row style={{ width: 700 }} className={"mt-5"}>
          <h5>
            {post.first_paragraph && post.first_paragraph}
          </h5>
        </Row>
        <Row className={"mt-5"}>
          <Col xs={12}>
            <img src={post.blog_image_two[0] && post.blog_image_two[0].publicUrl} alt={"article"} />
            <p className={"text-muted mt-3"}>
              {post.blog_image_two_annotation && post.blog_image_two_annotation}
            </p>
          </Col>
        </Row>
        <Row style={{ width: 700 }} className={"mt-5"}>
          <h5>
            {post.second_paragraph && post.second_paragraph}
          </h5>
        </Row>
        <Row className={"mt-5"}>
          <Col xs={12}>
            <img src={post.blog_image_three[0] && post.blog_image_three[0].publicUrl} alt={"article"} />
            <p className={"text-muted mt-3"}>
              {post.blog_image_three_annotation && post.blog_image_three_annotation}
            </p>
          </Col>
        </Row>
        <Row style={{ width: 700 }} className={"mt-5"}>
          <h5>
            {post.third_paragraph && post.third_paragraph}
          </h5>
        </Row>
        <Row style={{ width: 700 }} className={"mt-5"}>
          <hr className={"mt-5"} />

          <div className={"d-flex flex-column w-100"}>
          {post.point_one_title && (
            <div className={"d-flex justify-content-center mt-4"}>
            <div className={s.number}>{post.point_one_title && 1}</div>
            <div style={{ width: 600 }}>
              <h6 className={"fw-bold mb-4"}>
              {post.point_one_title && post.point_one_title}
              </h6>
              <p>
              {post.point_one_description && post.point_one_description}
              </p>
            </div>
          </div>
          )}
          
            {post.point_two_title && (
            <div className={"d-flex justify-content-center mt-4"}>
              <div className={s.number}>{post.point_two_title && 2}</div>
              <div style={{ width: 600 }}>
                <h6 className={"fw-bold mb-4"}>
                {post.point_two_title && post.point_two_title}
                </h6>
                <p>
                {post.point_two_description && post.point_two_description}
                </p>
              </div>
            </div>              
            )}

            {post.point_three_title && (
            <div className={"d-flex justify-content-center mt-4"}>
              <div className={s.number}>{post.point_three_title && 3}</div>
              <div style={{ width: 600 }}>
                <h6 className={"fw-bold mb-4"}>
                {post.point_three_title && post.point_three_title}
                </h6>
                <p>
                {post.point_three_description && post.point_three_description}
                </p>
              </div>
            </div>              
            )}

            {post.point_four_title && (
            <div className={"d-flex justify-content-center mt-4"}>
            <div className={s.number}>{post.point_four_title && 4}</div>
            <div style={{ width: 600 }}>
              <h6 className={"fw-bold mb-4"}>
              {post.point_four_title && post.point_four_title}
              </h6>
              <p>
              {post.point_four_description && post.point_four_description}
              </p>
            </div>
          </div>
            )}

            {post.point_four_title && (
            <div className={"d-flex justify-content-center mt-4"}>
              <div className={s.number}>{post.point_four_title && 5}</div>
              <div style={{ width: 600 }}>
                <h6 className={"fw-bold mb-4"}>
                {post.point_five_title && post.point_five_title}
                </h6>
                <p>
                {post.point_five_description && post.point_five_description}
                </p>
              </div>
            </div>              
            )}

          </div>
          <hr />
        </Row>
      </Container>
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={"text-center fw-bold mb-4"}>More From Our Blog</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <img src={article1} className={"img-fluid"} />
            <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              What is Lorem Ipsum?
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              Read More
            </h6>
          </Col>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <img src={article2} className={"img-fluid"} />
            <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              What is Lorem Ipsum?
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              Read More
            </h6>
          </Col>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <img src={article3} className={"img-fluid"} />
            <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              What is Lorem Ipsum?
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              Read More
            </h6>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: 80, marginBottom: 80 }}
        className={"d-flex flex-column align-items-center"}
      >
        <Row style={{ width: 700 }}>
          <h5>
            {post.fourth_paragraph && post.fourth_paragraph}
          </h5>

          <h5 className={"mt-5"}>
            {post.fifth_paragraph && post.fifth_paragraph}
          </h5>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`/blogs/${context.query.id}`);
  const post = res.data;

  return {
    props: { post }, // will be passed to the page component as props
  };
}

export default Id;
