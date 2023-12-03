import { useState } from "react";
import API from "/src/API/api.jsx"
import { Link, Navigate, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        senha: "",
        tipo: ""
    });

    const history = useNavigate();

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
                    toast.success("Login realizado com sucesso")
                }
                }).catch((error) => {
                    console.log("Entrei no error");
                    console.log(error.response.data.message)    
                    toast.error(error.response.data.message)//vermelho
                    toast.warning("Aviso")//amarelo
                    toast.info("informação é boa viu")//azul
                })
    }
     apiGetUser();
            
     setTimeout(() => {
        history("/home")
    }, 3000);

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
            <div>
                <ToastContainer/>
            </div>
            
            
        </div>
        
    )
}export default Login;