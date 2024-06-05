import React from "react";
import HeaderForm from "../../../components/HeaderForm";
import "./styles.css";
import FormConfirm from "../../../components/FormConfirm";

function CompanyConfirmation() {
  return (
    <div className="company-confirmation-container">
      <HeaderForm />
      <FormConfirm
        title="Bem-vindo(a) a nossa rede!"
        message="Cadastro realizado com sucesso! Aguarde o nosso contato."
      />
    </div>
  );
}

export default CompanyConfirmation;
