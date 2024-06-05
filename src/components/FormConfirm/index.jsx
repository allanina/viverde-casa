import "./styles.css";
import clienteimg from "../../assets/Bem-vindo(a) Cliente.png"
import empresaimg from "../../assets/Bem-vindo(a) Empresa.png"
import prestadorimg from "../../assets/Aviso e-mail Prestador.png"

function FormConfirm() {

    return (
        <div className="box-confirmacao">
            <p className="bem-vindo">Bem vindo(a) à nossa rede!</p>
            <img src="assets/img/linha.png" alt="vetor de uma linha" />
            <p className="mensagem-confirmacao">Cadastro realizado com sucesso! Aguarde o nosso contato.</p>
        </div>
    )
}

export default FormConfirm