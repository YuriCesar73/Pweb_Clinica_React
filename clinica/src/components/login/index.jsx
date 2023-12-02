import { useState } from "react";

function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        senha: "",
        tipo: ""
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setLoginInfo((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };

    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" />
            <br />
            <input type="senha" placeholder={loginInfo.tipo == "" ? "Insira sua senha" : loginInfo.tipo == "Paciente" ? "Insira seu cpf" : "Insira seu crm"} />
            <br />
            <select id="tipo" name="tipo" required placeholder="Você é um(a): " value={loginInfo.tipo} onChange={handleInputChange}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="Medico">Medico</option>
                <option value="Paciente">Paciente</option>
            </select>
            <button>Enviar</button>
            <button>Cadastrar-se</button>
        </div>
        
    )
}export default Login;