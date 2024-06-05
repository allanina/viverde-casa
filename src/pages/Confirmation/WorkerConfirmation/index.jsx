import React from "react";
import HeaderForm from "../../../components/HeaderForm";
import "./styles.css";
import FormConfirm from "../../../components/FormConfirm";

function WorkerConfirmation() {
  return (
    <div className="worker-confirmation-container">
      <HeaderForm />
      <div className="form-confirmation-container">
        <FormConfirm
          title="Bem-vindo(a) a nossa rede!"
          message="Cadastro realizado com sucesso! Aguarde o nosso contato."
        />

        <FormConfirm
          title="Não esqueça de enviar seus certificados para o e-mail:"
          message="cadastro@viverdecasa.com"
        />
      </div>
    </div>
  );
}

export default WorkerConfirmation;
