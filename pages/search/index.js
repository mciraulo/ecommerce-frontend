import React, { useState } from "react";
import { useRouter } from 'next/router';
import { Container, Row, Col, Label, Input, FormGroup } from "reactstrap";

import Header from "components/e-commerce/Header";
import Head from "next/head";

const Index = () => {
  const router = useRouter()
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        router.push({
          pathname: '/search-results',
          query: { searchValue: value },
        })
    }
  }
  const handleClick = () => {
    if (value && value.length >= 3) {
        router.push({
          pathname: '/search-results',
          query: { searchValue: value },
        })
    }
  }
  const [value, setValue] = useState('');
  return (
    <div className={"h-100"}>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container style={{ height: "100vh" }}>
        <Row
          className={
            "d-flex justify-content-center align-items-center flex-column"
          }
          style={{ height: "100vh" }}
        >
          <FormGroup style={{ width: 880 }}>
            <Input
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              type="text"
              value={value}
              onChange={event => setValue(event.target.value)}
              name="text"
              id="exampleEmail"
              className="search w-100"
              placeholder={"Index For ..."}
            />
          </FormGroup>
        </Row>
        <p className={"text-muted"} style={{ marginTop: -50 }}>
          © 2020-21 powered by Flatlogic
        </p>
      </Container>
    </div>
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
