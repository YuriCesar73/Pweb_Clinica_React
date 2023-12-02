import { useState } from "react";
import API from "/src/API/api.jsx"

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
        if(loginInfo.tipo == "Medico"){
            url = "medico-ms/medicos/listar/" + loginInfo.senha;
        }
        else {
            url = "paciente-ms/pacientes/listar/" + loginInfo.senha;
        }
        
        async function apiGetUser(){
            API.get(url).then((response) => {
                if(response.status == 200){
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
                onChange={handleInputChange}/>
            <br />
            <input 
                type="password"
                id="senha" 
                value={loginInfo.senha} 
                onChange={handleInputChange} 
                placeholder={loginInfo.tipo === "" ? "Insira sua senha" : loginInfo.tipo === "Paciente" ? "Insira seu cpf" : "Insira seu crm"}/>
            <br />
            <select id="tipo" name="tipo" required placeholder="Você é um(a): " value={loginInfo.tipo} onChange={handleInputChange}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="Medico">Medico</option>
                <option value="Paciente">Paciente</option>
            </select>
            <button type="submit">Enviar</button>
            </form>
            
            <button>Cadastrar-se</button>
        </div>
        
    )
}export default Login;