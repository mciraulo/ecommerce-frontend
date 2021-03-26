import React, { Component } from "react";
import FeedbackListTable from "./FeedbackListTable";

class Index extends Component {
  render() {
    return (
      <div>
        <FeedbackListTable />
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
