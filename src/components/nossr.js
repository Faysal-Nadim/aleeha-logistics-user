import dynamic from "next/dynamic";
import React from "react";

const NoSSRWrapper = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
