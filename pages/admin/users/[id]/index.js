import React, { Component } from "react";
import UsersView from "./UsersView";
import actions from "redux/actions/users/usersFormActions";
import { connect } from "react-redux";
import { withRouter } from 'next/router'

class UsersPage extends Component {
  componentDidMount() {
    const { dispatch, router } = this.props;
    dispatch(actions.doFind(router.query.id));
  }

  render() {
    return (
      <React.Fragment>
        <UsersView loading={this.props.loading} record={this.props.record} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default withRouter(connect(mapStateToProps)(UsersPage));
