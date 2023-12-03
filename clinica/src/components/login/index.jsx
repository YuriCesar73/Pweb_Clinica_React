import { useState } from "react";
import API from "/src/API/api.jsx"
import { Link, Navigate } from "react-router-dom";

function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        senha: "",
        tipo: ""
    });

    const handleInputChange = async (e)  => {
        console.log("Cheguei aqui handleInput");
        const { id, value } = e.target;
        setLoginInfo((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };


      const onSubmit = (e) => {
        console.log("Cheguei aqui antes do prevent");
        e.preventDefault();

        console.log("Cheguei aqui");
        let url;
        if(loginInfo.tipo == "medico"){
            url = "medico-ms/medicos/listar/" + loginInfo.senha;
        }
        else {
            url = "paciente-ms/pacientes/listar/" + loginInfo.senha;
        }
        
        async function apiGetUser(){
            API.get(url).then((response) => {
                if(response.status == 202){
                    console.log(Object.keys(response));
                    console.log(response);
                }
                }).catch((error) => {
                    console.log("Entrei no error");
                    console.log(error)
                    //console.log(error.data);
                })
    }
     apiGetUser();
            
    };


    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {onSubmit(e)}}>
            <input 
                type="text"
                id="email"
                placeholder="Insira seu email" 
                value={loginInfo.email} 
                onChange={handleInputChange}
                required
                />
            <br />
            <input 
                type="password"
                id="senha" 
                value={loginInfo.senha} 
                onChange={handleInputChange} 
                placeholder={loginInfo.tipo === "" ? "Insira sua senha" : loginInfo.tipo === "paciente" ? "Insira seu cpf" : "Insira seu crm"}
                required
                />
            <br />
            <select id="tipo" name="tipo" required placeholder="Você é um(a): " value={loginInfo.tipo} onChange={handleInputChange}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="medico">Medico</option>
                <option value="paciente">Paciente</option>
            </select>
            <button type="submit">Enviar</button>
            </form>

            <div>
                <Link to={'/formulario/medico'}>
                    <p>Você é um médico? Cadastre-se aqui</p>
                </Link>
            
                <Link to={'/formulario/paciente'}>
                    <p>Você é um paciente? Cadastre-se aqui</p>
                </Link>

            </div>

            
        </div>
        
    )
}export default Login;