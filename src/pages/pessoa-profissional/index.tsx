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

export const Head: HeadFC = () => <title>Pessoa Profissional</title>;
