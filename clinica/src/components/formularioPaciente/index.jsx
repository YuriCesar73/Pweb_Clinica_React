import axios from "axios";
import API from "/src/API/api.jsx"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function FormularioPaciente() {


    const [pacienteFormulario, setPacienteFormulario] = useState({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
        UF: "",
        cidade: "",
        bairro: "",
        CEP: "",
        logradouro: "",
        numero: "",
        complemento: ""
    })

    const history = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setPacienteFormulario((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };
      

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            "dadosPessoais": {
                "nome": pacienteFormulario.nome,
                "telefone": pacienteFormulario.telefone,
                "email": pacienteFormulario.email
            },
            "endereco": {
                "logradouro": pacienteFormulario.logradouro,
                "numero": pacienteFormulario.numero == "" ? null : pacienteFormulario.numero,
                "complemento": pacienteFormulario.complemento == "" ? null : pacienteFormulario.complemento,
                "bairro": pacienteFormulario.bairro,
                "cidade": pacienteFormulario.cidade,
                "uf": pacienteFormulario.UF,
                "cep": pacienteFormulario.CEP
            },
            "cpf": pacienteFormulario.cpf
        }

        let url = "paciente-ms/pacientes/cadastrar";
        async function apiPost(){
            API.post(url, body).then((response) => {
                if(response.status == 201){
                    console.log(Object.keys(response));
                    console.log(response);
                    toast.success("Cadastro feito com sucesso!");
                    toast.info("Sua senha de acesso é o seu crm");

                    setTimeout(() => {
                        history("/")
                    }, 4000);

                }
                }).catch((error) => {
                    toast.error("Não foi possível realizar o cadastro!");
                    toast.error("Verifique as informações inseridas")
                    console.log(error)
                })
    }
            apiPost();
    };

    return(
        <div>
            <h1>Formulário de cadastro</h1>
            <p>Insira suas informações</p>
            <br />
            <form action="" onSubmit={(e) => {onSubmit(e)}}>
                <fieldset>
                    <div>
                        <label htmlFor="Nome"></label>
                        <input type="text" placeholder="* Nome" id="nome" value={pacienteFormulario.nome} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="CPF"></label>
                        <input type="text" pattern="\d{3}\\d{3}\\d{3}\d{2}" placeholder="* CPF (apenas números)" id="cpf" value={pacienteFormulario.cpf} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Email"></label>
                        <input type="email" placeholder="* Email" id="email" value={pacienteFormulario.email} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Telefone"></label>
                        <input type="tel" placeholder="* Telefone" id="telefone" value={pacienteFormulario.telefone} onChange={handleInputChange} required/>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="UF"></label>
                        <input type="text" placeholder="* UF" id="UF" value={pacienteFormulario.UF} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Cidade"></label>
                        <input type="text" placeholder="* Cidade" id="cidade" value={pacienteFormulario.cidade} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Bairro"></label>
                        <input type="text" placeholder="* Bairro" id="bairro" value={pacienteFormulario.bairro} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="CEP"></label>
                        <input type="text" placeholder="* CEP" id="CEP" value={pacienteFormulario.CEP} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Logradouro"></label>
                        <input type="text" placeholder="* Logradouro" id="logradouro" value={pacienteFormulario.logradouro} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Numero"></label>
                        <input type="number" placeholder="Numero" id="numero" value={pacienteFormulario.numero} min={0} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="Complemento"></label>
                        <input type="text" placeholder="Complemento" id="complemento" value={pacienteFormulario.complemento} onChange={handleInputChange} />
                    </div>
                </fieldset>   
                <button type="submit">Enviar</button>
            </form>
            <div>
                <ToastContainer/>
            </div>

        </div>
    )
    
}export default FormularioPaciente;

