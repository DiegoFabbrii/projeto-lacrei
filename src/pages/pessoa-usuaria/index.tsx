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

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="pt-BR" />
      <title>Pessoa Usuária</title>
      <meta
        name="description"
        content="Página que descreve como é o atendimento que a Lacrei Saúde garante a pessoas LGBTQIAPN+"
      />
    </>
  );
};
