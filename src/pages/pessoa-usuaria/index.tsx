import * as React from "react";
import { Layout } from "../../components/layout";
import { HeadFC } from "gatsby";

const User = () => {
  return <Layout></Layout>;
};

export default User;

export const Head: HeadFC = () => <title>Home Page</title>;
