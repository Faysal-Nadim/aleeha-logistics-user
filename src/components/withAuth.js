"use client";

import React from "react";

/**
 * @author
 * @function withAuth
 **/

const withAuth = (Component) => {
  const authentication = (props) => {
    const token = window.localStorage.getItem("token");
    if (token && token !== null) {
      return <Component {...props} />;
    } else {
      window.location.replace("/login");
    }
  };
  return authentication;
};

export default withAuth;
