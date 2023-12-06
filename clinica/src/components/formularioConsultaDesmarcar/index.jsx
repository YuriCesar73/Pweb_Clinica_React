import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function FormularioConsultaCancelar(){
    const location = useLocation();
    const consultaData = location.state;
    const history = useNavigate();

    const [motivo, setMotivo] = useState("")

    const onSubmit = (e) => {

        e.preventDefault();
        
        let data = {
            "paciente": consultaData['paciente'],
            "data": consultaData['data'],
            "horario": consultaData['horario'],
            "motivo": motivo
        }   

        let url = "consulta-ms/consulta/cancelar";
        async function apiDelete(){
            API.delete(url, {data: data}).then((response) => {
                if(response.status === 202){
                    toast.success("Consulta cancelada com sucesso!");
                }
                }).catch((error) => {
                    toast.error("Não foi possível cancelar a consulta")
                    toast.info(error.response.data.message)
                    toast.warning(error.response.data.error)
                })
    }

         apiDelete();
            
            


    };

    const handleInputChange = (e) => {
        let novoMotivo = e.target.value;
        setMotivo(novoMotivo);
      };

    return(
        <div>
            <form onSubmit={(e) => {onSubmit(e)}}>
                <fieldset>
                <div>
                    <label htmlFor="cpf"></label>
                    <input type="text" id="cpf" value={"CPF: " + consultaData['paciente']} onChange={() => {}} readOnly/>
                </div>
                <div>
                    <label htmlFor="data"></label>
                    <input type="text" id="data" value={"Data: " + consultaData['data']} onChange={() => {}} readOnly/>
                </div>

                <div>
                    <label htmlFor="horario"></label>
                    <input type="text" id="horario" value={"Horario: " + consultaData['horario']} onChange={() => {}} readOnly/>
                </div>
                
                <div>
                        <label htmlFor="motivo"></label>
                        <select id="motivo" name="motivo" value={consultaData.motivo} onChange={handleInputChange} required>
                            <option value="" disabled>Escolha o motivo do cancelamento</option>
                            <option value="PACIENTE_DESISTIU">Paciente Desistiu</option>
                            <option value="MEDICO_CANCELOU">Medico Cancelou</option>
                            <option value="OUTROS">Outros</option>
                        </select>
                    </div>
                </fieldset>
                <button type="submit">Cancelar consulta</button>
            </form>
        
            <div>
            <ToastContainer/>
            </div>
        </div>
    )
}export default FormularioConsultaCancelar;