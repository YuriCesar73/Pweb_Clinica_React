import API from "/src/API/api.jsx"
import { useState } from "react";
import "../formularioMedico/index.css"
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../formularioMedico/index.css"

function FormularioMedico() {


    const [medicoFormulario, setMedicoFormulario] = useState({
        nome: "",
        crm: "",
        especialidade: "",
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
        setMedicoFormulario((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };

    
      

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            "dadosPessoais": {
                "nome": medicoFormulario.nome,
                "telefone": medicoFormulario.telefone,
                "email": medicoFormulario.email
            },
            "endereco": {
                "logradouro": medicoFormulario.logradouro,
                "numero": medicoFormulario.numero == "" ? null : medicoFormulario.numero,
                "complemento": medicoFormulario.complemento == "" ? null : medicoFormulario.complemento,
                "bairro": medicoFormulario.bairro,
                "cidade": medicoFormulario.cidade,
                "uf": medicoFormulario.UF,
                "cep": medicoFormulario.CEP
            },
            "crm": medicoFormulario.crm,
            "especialidade": medicoFormulario.especialidade
        }

        let url = "medico-ms/medicos/cadastrar";
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
                    console.log(error)
                    toast.error("Erro ao cadastrar verifique as informações inseridas")

                })
    }
            apiPost();
            
    };

    return(
        <div className="container">
            <h1>Formulário de cadastro</h1>
            <p>Insira suas informações</p>
            <br />
            <form className="form" action="" onSubmit={(e) => {onSubmit(e)}}>
                <fieldset>
                    <div>
                        <label htmlFor="Nome"></label>
                        <input type="text" placeholder="* Nome" id="nome" value={medicoFormulario.nome} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="CRM"></label>
                        <input type="text" placeholder="* CRM" id="crm" value={medicoFormulario.crm} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label htmlFor="Especialidade"></label>
                        <select id="especialidade" name="especialidade" value={medicoFormulario.especialidade} onChange={handleInputChange} required>
                            <option value="" disabled>Selecione sua especialidade</option>
                            <option value="ORTOPEDIA">Ortopedia</option>
                            <option value="CARDIOLOGIA">Cardiologia</option>
                            <option value="GINECOLOGIA">Ginecolocia</option>
                            <option value="DERMATOLOGIA">Dermatologia</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Email"></label>
                        <input type="email" placeholder="* Email" id="email" value={medicoFormulario.email} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Telefone"></label>
                        <input type="tel" placeholder="* Telefone" id="telefone" value={medicoFormulario.telefone} onChange={handleInputChange} required/>
                    </div>
                </fieldset>
                <br />

                <fieldset>
                    <div>
                        <label htmlFor="UF"></label>
                        <input type="text" placeholder="* UF" id="UF" value={medicoFormulario.UF} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Cidade"></label>
                        <input type="text" placeholder="* Cidade" id="cidade" value={medicoFormulario.cidade} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Bairro"></label>
                        <input type="text" placeholder="* Bairro" id="bairro" value={medicoFormulario.bairro} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="CEP"></label>
                        <input type="text" placeholder="* CEP" id="CEP" value={medicoFormulario.CEP} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Logradouro"></label>
                        <input type="text" placeholder="* Logradouro" id="logradouro" value={medicoFormulario.logradouro} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Numero"></label>
                        <input type="number" placeholder="Numero" id="numero" value={medicoFormulario.numero} min={0} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="Complemento"></label>
                        <input type="text" placeholder="Complemento" id="complemento" value={medicoFormulario.complemento} onChange={handleInputChange} />
                    </div>
                </fieldset>   
                <button className="btn" type="submit">Enviar</button>
            </form>

            <ToastContainer/>
        </div>
    )
    
}export default FormularioMedico;

