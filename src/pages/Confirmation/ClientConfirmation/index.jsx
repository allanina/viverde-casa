import React from "react";
import HeaderForm from "../../../components/HeaderForm";
import "./styles.css";
import FormConfirm from "../../../components/FormConfirm";

function ClientConfirmation() {
  return (
    <div className="client-confirmation-container">
      <HeaderForm />
      <FormConfirm
        title="Bem-vindo(a) a nossa rede!"
        message="Cadastro realizado com sucesso! Aguarde o nosso contato."
      />
    </div>
  );
}

export default ClientConfirmation;
