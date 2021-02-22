import React, { Component } from "react";
import OrdersListTable from "./OrdersListTable";

class Index extends Component {
  render() {
    return (
      <div>
        <OrdersListTable />
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
