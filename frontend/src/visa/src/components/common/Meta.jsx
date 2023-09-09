import React from "react";
import { Helmet } from "react-helmet";

export default function Meta({ title, keyword, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keyword" keyword={keyword} />
      <meta name="description" description={description} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Welcome | Delivery Pass",
  description: "We offer visa services",
  keyword: "Visa, buy quality visa, rare ones",
};
