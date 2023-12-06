import API from "/src/API/api.jsx"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function FormularioEdit() {
    const [userFormulario, setUserFormulario] = useState({
        nome: "",
        telefone: "",
        UF: "",
        cidade: "",
        bairro: "",
        CEP: "",
        logradouro: "",
        numero: "",
        complemento: ""
    })

    const location = useLocation();
    const tipo = location.state;
    const history = useNavigate();

    

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserFormulario((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };
      

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            "nome": userFormulario.nome,
            "telefone": userFormulario.telefone,
            "endereco": {
                "logradouro": userFormulario.logradouro,
                "numero": userFormulario.numero == "" ? null : userFormulario.numero,
                "complemento": userFormulario.complemento == "" ? null : userFormulario.complemento,
                "bairro": userFormulario.bairro,
                "cidade": userFormulario.cidade,
                "uf": userFormulario.UF,
                "cep": userFormulario.CEP
            },
        }

        let url;
        if(tipo.user == "paciente"){
            url = "paciente-ms/pacientes/atualizar/" + tipo.identificador;
        }
        else {
            url = "medico-ms/medicos/atualizar/" + tipo.identificador;
        }
    
        async function apiPut(){
            API.put(url, body).then((response) => {
                if(response.status == 202){
                    toast.success("Atualização feita com sucesso!");
                    setTimeout(() => {
                        history(tipo.rota, {
                            state: response.data
                        })
                    }, 3000);
                }
                }).catch((error) => {
                    toast.error("Não foi possível atualizar o cadastro!");
                    toast.error("Verifique as informações inseridas")
                    console.log(error)
                })
    }
            apiPut();
    };

    return(
        <div>
            <h1>Formulário de edição</h1>
            <p>Insira suas informações</p>
            <br />
            <form action="" onSubmit={(e) => {onSubmit(e)}}>
                <fieldset>
                    <div>
                        <label htmlFor="Nome"></label>
                        <input type="text" placeholder="* Nome" id="nome" value={userFormulario.nome} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Telefone"></label>
                        <input type="tel" placeholder="* Telefone" id="telefone" value={userFormulario.telefone} onChange={handleInputChange} required/>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="UF"></label>
                        <input type="text" placeholder="* UF" id="UF" value={userFormulario.UF} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Cidade"></label>
                        <input type="text" placeholder="* Cidade" id="cidade" value={userFormulario.cidade} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Bairro"></label>
                        <input type="text" placeholder="* Bairro" id="bairro" value={userFormulario.bairro} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="CEP"></label>
                        <input type="text" placeholder="* CEP" id="CEP" value={userFormulario.CEP} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Logradouro"></label>
                        <input type="text" placeholder="* Logradouro" id="logradouro" value={userFormulario.logradouro} onChange={handleInputChange} required/>
                    </div>

                    <div>
                        <label htmlFor="Numero"></label>
                        <input type="number" placeholder="Numero" id="numero" value={userFormulario.numero} min={0} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="Complemento"></label>
                        <input type="text" placeholder="Complemento" id="complemento" value={userFormulario.complemento} onChange={handleInputChange} />
                    </div>
                </fieldset>   
                <button type="submit">Enviar</button>
            </form>
            <div>
                <ToastContainer/>
            </div>

        </div>
    )
    
}export default FormularioEdit;

