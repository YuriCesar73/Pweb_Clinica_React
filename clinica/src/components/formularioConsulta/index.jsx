import { useState } from "react";
import { useLocation } from "react-router-dom";

function FormularioConsulta(){
    const location = useLocation();
    const userData = location.state;

    const [consultaInfo, setConsultaInfo] = useState({
        horario: "",
        data: ""
    });



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        console.log(value);
        setConsultaInfo((prevValues) => ({
          ...prevValues,
          [id]: value
        }));
      };

    return(
        <div>
            <form>
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
                            <option value="20:00">20:00 - 21:00</option>
                            <option value="21:00">21:00 - 22:00</option>
                        </select>
                    </div>
                </fieldset>
                <button type="submit">Marcar consulta</button>
            </form>
        </div>
    )
}export default FormularioConsulta;