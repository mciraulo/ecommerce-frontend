import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Toast,
  ToastBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
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
import s from "./Product.module.scss";
import car from "public/images/e-commerce/home/car.svg";
import call from "public/images/e-commerce/home/headphones.svg";
import moneyBack from "public/images/e-commerce/home/Sync.svg";
import insta1 from "public/images/e-commerce/home/insta1.png";
import insta2 from "public/images/e-commerce/home/insta2.png";
import insta3 from "public/images/e-commerce/home/insta3.png";
import insta4 from "public/images/e-commerce/home/insta4.png";
import insta5 from "public/images/e-commerce/home/insta5.png";
import insta6 from "public/images/e-commerce/home/insta6.png";
import closeIcon from "public/images/e-commerce/details/close.svg";
import preloaderImg from 'public/images/e-commerce/preloader.gif'
import axios from "axios";
import close from "public/images/e-commerce/close.svg";
import chevronRightIcon from "public/images/e-commerce/details/chevron-right.svg";
import chevronLeftIcon from "public/images/e-commerce/details/chevron-left.svg";
import actions from "redux/actions/products/productsFormActions";
import Head from "next/head";
import productsListActions from "redux/actions/products/productsListActions";
import ReactImageMagnify from 'react-image-magnify';
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

const Id = ({ product: serverSideProduct }) => {
  const [isOpen, setOpen] = React.useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState(serverSideProduct);
  const [quantity, setQuantity] = React.useState(1);
  const [fetching, setFetching] = React.useState(true)
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    window.setTimeout(() => {
      setFetching(false)
    }, 1000)
  }, [])

  const addToCart = () => {
    dispatch(actions.doFind(id));
    if (currentUser) {
      axios.post(`/orders/`, {
        data: {
          amount: quantity,
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
      amount: quantity,
      order_date: new Date(),
      product: id,
      status: "in cart",
    });
    typeof window !== "undefined" &&
      localStorage.setItem("products", JSON.stringify(localProducts));
    dispatch(productsListActions.doAdd(localProducts))
  };

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer />
      <Container>
        { fetching ? (
            <div style={{height: 480}} className={"d-flex justify-content-center align-items-center"}>
              <img src={preloaderImg} alt={"fetching"}/>
          </div>
            ) : (          <Row className={"mb-5"} style={{marginTop: 32}}>
            <Col
                xs={12}
                lg={product.image.length > 1 ? 7 : 6}
                className={"d-flex"}
            >
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: product.image[0].publicUrl,
                },
                largeImage: {
                  src: product.image[0].publicUrl,
                  width: 1200,
                  height: 1200
                }
              }}
              className={`${product.image.length && 'mr-3'}`}
              />
              {product.image.length > 1 ? (
                  <div
                      className={`d-flex flex-column h-100 justify-content-between ${s.dMdNone}`}
                      style={{width: 160}}
                  >
                    <img src={productRight} width={160}/>
                    <img src={productCenter} width={160}/>
                    <img src={productLeft} width={160}/>
                  </div>
              ) : null}
            </Col>
            <Col
                xs={12}
                lg={product.image.length > 1 ? 5 : 6}
                className={"d-flex flex-column justify-content-between"}
            >
              <h6 className={`text-muted ${s.detailCategory}`}>
                {product.categories[0].title[0].toUpperCase() +
                product.categories[0].title.slice(1)}
              </h6>
              <h4 className={"fw-bold"}>{product.title}</h4>
              <div className={"d-flex align-items-center"}>
                <img src={rating} className={s.detailRating}/>
                <p className={"text-primary ml-3 mb-0"}>12 reviews</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
                Vestibulum ultricies aliquam.
              </p>
              <div className={"d-flex"}>
                <div
                    className={"d-flex flex-column mr-5 justify-content-between"}
                >
                  <h6 className={"fw-bold text-muted text-uppercase"}>
                    Quantity
                  </h6>
                  <div className={"d-flex align-items-center"}>
                    <Button
                        className={`bg-transparent border-0 p-1 fw-bold mr-3 ${s.quantityBtn}`}
                        onClick={() => {
                          if (quantity === 1) return;
                          setQuantity((prevState) => prevState - 1);
                          setProduct((prevState) => ({
                            ...prevState,
                            price: Number(prevState.price) - 70,
                          }));
                        }}
                    >
                      -
                    </Button>
                    <p className={"fw-bold mb-0"}>{quantity}</p>
                    <Button
                        className={`bg-transparent border-0 p-1 fw-bold ml-3 ${s.quantityBtn}`}
                        onClick={() => {
                          if (quantity < 1) return;
                          setQuantity((prevState) => prevState + 1);
                          setProduct((prevState) => ({
                            ...prevState,
                            price: Number(prevState.price) + 70,
                          }));
                        }}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className={"d-flex flex-column justify-content-between"}>
                  <h6 className={"fw-bold text-muted text-uppercase"}>Price</h6>
                  <h6 className={"fw-bold"}>{product.price}$</h6>
                </div>
              </div>
              <div className={"d-flex mt-5"}>
                <Button
                    outline
                    color={"primary"}
                    className={"flex-fill mr-4 text-uppercase fw-bold"}
                    style={{width: "50%"}}
                    onClick={() => {
                      toast.info("products successfully added to your cart");
                      addToCart();
                    }}
                >
                  Add to Cart
                </Button>
                <Link href={"/billing"} className={"d-inline-block flex-fill"}>
                  <Button
                      color={"primary"}
                      className={"text-uppercase fw-bold"}
                      style={{width: "50%"}}
                  >
                    Buy now
                  </Button>
                </Link>
              </div>
            </Col>
          </Row> )
        }
        <hr />
        <Row className={"mt-5 mb-5"}>
          <Modal
            isOpen={isOpen}
            toggle={() => setOpen((prevState) => !prevState)}
            style={{ width: 920 }}
          >
            <div className={"p-5"}>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
              <Button
                className={"border-0 bg-transparent"}
                style={{ padding: "15px 15px" }}
                onClick={() => setOpen((prevState) => !prevState)}
              >
                <img src={closeIcon} />
              </Button>
            </div>
            <ModalBody>
              <h3 className={"fw-bold mb-5"}>Leave Your Feedback</h3>
              <div
                className={` ${s.modalProduct} d-flex justify-content-between align-items-center`}
              >
                <div className={"d-flex align-items-center"}>
                  <img
                    src={product.image[0].publicUrl}
                    width={100}
                    className={"mr-4"}
                  />
                  <div>
                    <h6 className={"text-muted"}>
                      {product.categories[0].title[0].toUpperCase() +
                        product.categories[0].title.slice(1)}
                    </h6>
                    <h5 className={"fw-bold"}>{product.title}</h5>
                  </div>
                </div>
                <div className={"d-flex align-items-center"}>
                  <Button
                    className={`bg-transparent border-0 p-1 fw-bold mr-3 ${s.quantityBtn}`}
                    onClick={() => {
                      if (quantity === 1) return;
                      setQuantity((prevState) => prevState - 1);
                      setProduct((prevState) => ({
                        ...prevState,
                        price: Number(prevState.price) - 70,
                      }));
                    }}
                  >
                    -
                  </Button>
                  <p className={"fw-bold mb-0"}>{quantity}</p>
                  <Button
                    className={`bg-transparent border-0 p-1 fw-bold ml-3 ${s.quantityBtn}`}
                    onClick={() => {
                      if (quantity < 1) return;
                      setQuantity((prevState) => prevState + 1);
                      setProduct((prevState) => ({
                        ...prevState,
                        price: Number(prevState.price) + 70,
                      }));
                    }}
                  >
                    +
                  </Button>
                </div>
                <h6 className={"fw-bold mb-0"}>{product.price}$</h6>
                <Button
                  className={"bg-transparent border-0 p-0"}
                  onClick={() => {}}
                >
                  <img src={close} alt={"close"} />
                </Button>
              </div>
              <div className={"d-flex align-items-center my-4"}>
                <h6 className={"fw-bold mr-4 mb-0"}>Rate Product</h6>
                <img src={rating} className={s.detailRating} />
              </div>
              <Input
                type="textarea"
                name="text"
                id="exampleEmail"
                className="w-100"
                style={{ height: 155 }}
                placeholder={"Add your comment"}
              />
              <div className={"d-flex justify-content-center"}>
                <Button
                  color={"primary fw-bold text-uppercase"}
                  style={{ marginTop: 48 }}
                >
                  LEAVE FEEDBACK
                </Button>
              </div>
            </ModalBody>
            </div>
          </Modal>
          <Col sm={12} className={"d-flex justify-content-between"}>
            <h4 className={"fw-bold"}>Reviews:</h4>
            <Button
              className={`bg-transparent border-0 fw-bold text-primary p-0 ${s.leaveFeedbackBtn}`}
              onClick={() => setOpen(true)}
            >
              + Leave Feedback
            </Button>
          </Col>
          <Col sm={12} className={"d-flex mt-5"}>
            <img
              src={person1}
              style={{ borderRadius: 65 }}
              className={`mr-5 ${s.reviewImg}`}
            />
            <div
              className={`d-flex flex-column justify-content-between align-items-start`}
            >
              <div
                className={`d-flex justify-content-between w-100 ${s.reviewMargin}`}
              >
                <h6 className={"fw-bold mb-0"}>Philip Daineka</h6>
                <p className={"text-muted mb-0"}>01.01.2020</p>
              </div>
              <img src={rating} className={s.reviewMarginImg} />
              <p className={"mb-0"}>
                Hi see in the Avada theme options panel under Typography that
                you refer to heading elements as “headers”. Please change to
                “headings” to help your users, a “header” is not a typography
                element. Thank you. Typography that you refer to heading
                elements as “headers”. Please change to “headings” to help your
                users, a “header” is not a typography element. Thank you.
              </p>
            </div>
          </Col>
          <Col sm={12} className={"d-flex mt-5"}>
            <img
              src={person2}
              style={{ borderRadius: 65 }}
              className={`mr-5 ${s.reviewImg}`}
            />
            <div
              className={
                "d-flex flex-column justify-content-between align-items-start"
              }
            >
              <div
                className={`d-flex justify-content-between w-100 ${s.reviewMargin}`}
              >
                <h6 className={"fw-bold mb-0"}>Alexey Vertel</h6>
                <p className={"text-muted mb-0"}>01.01.2020</p>
              </div>
              <img src={rating} className={s.reviewMarginImg} />
              <p className={"mb-0"}>
                Hi see in the Avada theme options panel under Typography that
                you refer to heading elements as “headers”. Please change to
                “headings” to help your users, a “header” is not a typography
                element. Thank you. Typography that you refer to heading
                elements as “headers”. Please change to “headings” to help your
                users, a “header” is not a typography element. Thank you.
              </p>
            </div>
          </Col>
          <Col sm={12} className={"d-flex mt-5"}>
            <img
              src={person3}
              style={{ borderRadius: 65 }}
              className={`mr-5 ${s.reviewImg}`}
            />
            <div
              className={
                "d-flex flex-column justify-content-between align-items-start"
              }
            >
              <div
                className={`d-flex justify-content-between w-100 ${s.reviewMargin}`}
              >
                <h6 className={"fw-bold mb-0"}>Michael Daineka</h6>
                <p className={"text-muted mb-0"}>01.01.2020</p>
              </div>
              <img src={rating} className={s.reviewMarginImg} />
              <p className={"mb-0"}>
                Hi see in the Avada theme options panel under Typography that
                you refer to heading elements as “headers”. Please change to
                “headings” to help your users, a “header” is not a typography
                element. Thank you. Typography that you refer to heading
                elements as “headers”. Please change to “headings” to help your
                users, a “header” is not a typography element. Thank you.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={"justify-content-center"}>
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </Row>
        <hr />
        <Row className={"mt-5 mb-5"}>
          <Col sm={12}>
            <h5 className={"fw-bold"}>You may also like:</h5>
          </Col>
        </Row>
        <Row className={"mb-5"} style={{ position: "relative" }}>
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
                  <Slide index={index}>
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

export async function getServerSideProps(context) {
  const res = await axios.get(`/products/${context.query.id}`);
  const product = res.data;

  return {
    props: { product }, // will be passed to the page component as props
  };
}

export default Id;
