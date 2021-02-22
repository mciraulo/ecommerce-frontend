import React, { Component } from "react";
import ProductsListTable from "./ProductsListTable";

class Index extends Component {
  render() {
    return (
      <div>
        <ProductsListTable />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default Index;
