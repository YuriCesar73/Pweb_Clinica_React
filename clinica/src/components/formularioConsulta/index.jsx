import { useState } from "react";
import { useLocation } from "react-router-dom";
import API from "/src/API/api.jsx"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function FormularioConsulta(){
    const location = useLocation();
    const userData = location.state;

    const [consultaInfo, setConsultaInfo] = useState({
        horario: "",
        data: ""
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const dataSelecionada = new Date(`${consultaInfo.data}T00:00:00Z`);
        let dataFormatada = dataSelecionada.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        dataFormatada = dataFormatada.replace(/\//g, '-'); 

        let body = {
            "medico": userData['medico'],
            "paciente": userData['paciente'],
            "data": dataFormatada,
            "horario": consultaInfo.horario
        }

        let url = "consulta-ms/consulta/cadastrar";
        async function apiPost(){

            API.post(url, body).then((response) => {
                if(response.status === 200){
                    toast.success("Consulta marcada com sucesso!");
                }
                }).catch((error) => {
                    toast.error("Não foi possível marcar a consulta")
                    toast.info(error.response.data.message)
                    toast.warning   (error.response.data.error)
                })
    }

            apiPost();
    };



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setConsultaInfo((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };

    return(
        <div>
            <form onSubmit={(e) => {onSubmit(e)}}>
                <fieldset>
                <div>
                    <label htmlFor="crm"></label>
                    <input type="text" id="crm" value={"CRM: " + userData['medico']} onChange={() => {}} readOnly/>
                </div>
                <div>
                    <label htmlFor="cpf"></label>
                    <input type="text" id="nome" value={"CPF: " + userData['paciente']} onChange={() => {}} readOnly/>
                </div>

                <div>
                    <label htmlFor="data"></label>
                    <input type="date" placeholder="Escolha a data da consulta" name="data"  id="data" value={consultaInfo.data} onChange={handleInputChange} required/>
                </div>
                
                <div>
                        <label htmlFor="horario"></label>
                        <select id="horario" name="horario" value={consultaInfo.horario} onChange={handleInputChange} required>
                            <option value="" disabled>Escolha o horário</option>
                            <option value="07:00">07:00 - 08:00</option>
                            <option value="08:00">08:00 - 09:00</option>
                            <option value="09:00">09:00 - 10:00</option>
                            <option value="10:00">10:00 - 11:00</option>
                            <option value="11:00">11:00 - 12:00</option>
                            <option value="12:00">12:00 - 13:00</option>
                            <option value="13:00">13:00 - 14:00</option>
                            <option value="14:00">14:00 - 15:00</option>
                            <option value="15:00">15:00 - 16:00</option>
                            <option value="16:00">16:00 - 17:00</option>
                            <option value="17:00">17:00 - 18:00</option>
                            <option value="18:00">18:00 - 19:00</option>
                            <option value="19:00">19:00 - 20:00</option>
                        </select>
                    </div>
                </fieldset>
                <button type="submit">Marcar consulta</button>
            </form>

            <div>
            <ToastContainer/>
            </div>
        </div>
    )
}export default FormularioConsulta;