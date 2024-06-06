import React from "react";
import "./styles.css";

function FormConfirm({ title, asset, message }) {
  return (
    <div className="box-confirmacao">
      <p className="bem-vindo">{title}</p>
      <p className="mensagem-confirmacao">{message}</p>
    </div>
  );
}

export default FormConfirm;
