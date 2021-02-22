import React, { Component } from "react";
import UsersListTable from "./UsersListTable";

class Index extends Component {
  render() {
    return (
      <div>
        <UsersListTable />
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
