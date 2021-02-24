import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'next/router'
import Link from 'next/link'
import s from "./Sidebar.module.scss";
import LinksGroup from "components/e-commerce/Sidebar/LinksGroup";
import {
  openSidebar,
  closeSidebar,
  changeActiveSidebarItem,
} from "redux/actions/navigation";
import { logoutUser } from "redux/actions/auth";

import HomeIcon from "public/images/e-commerce/sidebar/home";
import DownloadIcon from "public/images/e-commerce/sidebar/download";
import BarIcon from "public/images/e-commerce/sidebar/bar";
import FileIcon from "public/images/e-commerce/sidebar/file";
import GiftIcon from "public/images/e-commerce/sidebar/gift";
import GridIcon from "public/images/e-commerce/sidebar/grid";
import PersonIcon from "public/images/e-commerce/sidebar/person";
import PricetagIcon from "public/images/e-commerce/sidebar/pricetag";
import SettingsIcon from "public/images/e-commerce/sidebar/settings";
import ShoppingIcon from "public/images/e-commerce/sidebar/shopping";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    router: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarOpened: true,
    activeItem: "",
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
        <div
            className={`${
                !this.props.sidebarOpened && !this.props.sidebarStatic
                    ? s.sidebarClose
                    : ""
            } ${s.sidebarWrapper}`}
        >
          <nav className={s.root}>
            <header className={s.logo}>
            <span className={`${s.logoStyle} mx-1`}>
              Flatlogic<i>.</i>
            </span>
            </header>
            <ul className={s.nav}>
              <LinksGroup
                  onActiveSidebarItemChange={(activeItem) =>
                      this.props.dispatch(changeActiveSidebarItem(activeItem))
                  }
                  activeItem={this.props.activeItem}
                  header="Index"
                  link="/"
                  isHeader
              />
              <LinksGroup
                  onActiveSidebarItemChange={(activeItem) =>
                      this.props.dispatch(changeActiveSidebarItem(activeItem))
                  }
                  activeItem={this.props.activeItem}
                  header="Pages"
                  link="/app/dashboard"
                  isHeader
                  childrenLinks={[
                    {
                      header: 'Analytics', link: '/app/main/analytics',
                    },
                    {
                      header: 'Visits', link: '/app/main/dashboard',
                    },
                    {
                      header: 'Widgets', link: '/app/main/widgets',
                    },
                  ]}
              />
              <LinksGroup
                  onActiveSidebarItemChange={(activeItem) =>
                      this.props.dispatch(changeActiveSidebarItem(activeItem))
                  }
                  activeItem={this.props.activeItem}
                  header="Index"
                  link="/shop"
                  isHeader
                  childrenLinks={[
                    {
                      header: 'Analytics', link: '/app/main/analytics',
                    },
                    {
                      header: 'Visits', link: '/app/main/dashboard',
                    },
                    {
                      header: 'Widgets', link: '/app/main/widgets',
                    },
                  ]}
              />
            </ul>
            <div className={s.accountBtn}>
              <Link href={"/account"}>
                My Account
              </Link>
            </div>
          </nav>
        </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
