import * as React from "react";
import { Layout } from "../../components/layout";
import { HeadFC } from "gatsby";
import { UserPage } from "../../components/userPage";

const User = () => {
  return (
    <Layout>
      <UserPage />
    </Layout>
  );
};

export default User;

export const Head: HeadFC = () => <title>Home Page</title>;
