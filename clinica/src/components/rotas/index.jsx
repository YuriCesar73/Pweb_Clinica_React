import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioMedico from "../formularioMedico";
import Login from "../login";
import FormularioPaciente from "../formularioPaciente";
import HomeMedico from "../homeMedico";
import FormularioConsulta from "../formularioConsulta";
import HomePaciente from "../homePaciente";
import FormularioConsultaCancelar from "../formularioConsultaDesmarcar";

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/formulario/medico" element={<FormularioMedico/>} />
            <Route path="/formulario/paciente" element={<FormularioPaciente/>} />
            <Route path="/HomeMedico" element={<HomeMedico/>} />
            <Route exact path="/HomePaciente" element={<HomePaciente/>} />
            <Route path="/formulario/consulta" element={<FormularioConsulta/>} />
            <Route path="/formulario/consulta/cancelar" element={<FormularioConsultaCancelar/>} />
            {/* <Route path="*" element={<Erro/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}export default Rotas;