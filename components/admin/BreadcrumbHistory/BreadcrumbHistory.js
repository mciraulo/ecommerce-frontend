import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import uuid from "uuid/v4";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const BreadcrumbHistory = ({ url }) => {
  const router = useRouter();

  const renderBreadCrumbs = () => {
    const [route, setRoute] = React.useState([]);
    React.useEffect(() => {
      if (router.pathname.includes("products")) {
        const { id } = router.query;
        axios.get(`/products/${id}`).then((res) => {
          setRoute([
            "products",
            res.data.categories[0].title[0].toUpperCase() +
              res.data.categories[0].title.slice(1),
            res.data.title,
          ]);
        });
      } else {
        if (router.pathname.includes("category")) {
          var { categoryName } = router.query;
        }
        const newUrl = url
          .split("/")
          .slice(1)
          .map((route, index) => {
            console.log(route);
            if (router.pathname.includes("category") && index === 1) {
              return categoryName[0].toUpperCase() + categoryName.slice(1);
            } else {
              return route[0].toUpperCase() + route.slice(1);
            }
            // return route
            //     .split(" ")
            //     .map((word, index) => {
            //
            //       if (router.pathname.includes("category") && index === 1) {
            //         return categoryName;
            //       }
            //       return word[0].toUpperCase() + word.slice(1);
            //     })
            //     .join(" ")
          });
        setRoute(newUrl);
      }
    }, [router]);
    const length = route.length;
    return route.map((item, index) => {
      let middlewareUrl =
        "/" +
        url
          .split("/")
          .slice(1, index + 2)
          .join("/");
      if (router.pathname.includes("products") && index === 0) {
        middlewareUrl = "/shop";
      } else if (router.pathname.includes("products") && index === 1) {
        middlewareUrl = `/category/${
          route[1][0].toLowerCase() + route[1].slice(1)
        }`;
      }
      return (
        <BreadcrumbItem key={uuid()}>
          {length === index + 1 ? (
            item
          ) : (
            <Link href={middlewareUrl}>{item}</Link>
          )}
        </BreadcrumbItem>
      );
    });
  };
  return (
    <div>
      <Breadcrumb
        tag="nav"
        listTag="div"
        style={{
          marginTop: router.pathname.includes("admin") ? 0 : 85,
          borderBottom: "1px solid #d9d9d9",
          marginBottom: router.pathname.includes("admin") ? 32 : 0,
        }}
      >
        {renderBreadCrumbs()}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHistory;
