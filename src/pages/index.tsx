import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { Layout } from "../components/layout";
import { HomePage } from "../components/homePage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="pt-BR" />
      <title>Home Page</title>
      <meta name="description" content="Página inicial da Lacrei saúde" />
    </>
  );
};
