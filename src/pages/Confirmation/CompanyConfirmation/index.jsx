import React from "react";
import HeaderForm from "../../../components/HeaderForm";
import "./styles.css";
import FormConfirm from "../../../components/FormConfirm";

function CompanyConfirmation() {
  return (
    <div className="company-confirmation-container">
      <HeaderForm />
      <div className="form-confirmation-container">
        <FormConfirm
          title="Bem-vindo(a) a nossa rede!"
          message="Cadastro realizado com sucesso! Aguarde o nosso contato."
        />
      </div>
    </div>
  );
}

export default CompanyConfirmation;
