import React, { Component } from "react";
import BlogsListTable from "./BlogsListTable";

class Index extends Component {
  render() {
    return (
      <div>
        <BlogsListTable />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/blogs");
  // const blogs = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default Index;
