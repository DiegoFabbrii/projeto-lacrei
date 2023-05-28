import { HeadFC } from "gatsby";
import * as React from "react";
import { Layout } from "../../components/layout";
import { ProfessionalPage } from "../../components/professionalPage";

const Professional = () => {
  return (
    <Layout>
      <ProfessionalPage />
    </Layout>
  );
};

export default Professional;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="pt-BR" />
      <title>Pessoa Profissional</title>
      <meta
        name="description"
        content="Página que descreve que tipo de profissionais da saúde a lacrei Saúde busca recrutar"
      />
    </>
  );
};
