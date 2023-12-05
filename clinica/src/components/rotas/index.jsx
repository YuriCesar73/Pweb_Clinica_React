import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioMedico from "../formularioMedico";
import Login from "../login";
import FormularioPaciente from "../formularioPaciente";
import HomeMedico from "../homeMedico";
import FormularioConsulta from "../formularioConsulta";
import HomePaciente from "../homePaciente";

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/formulario/medico" element={<FormularioMedico/>} />
            <Route path="/formulario/paciente" element={<FormularioPaciente/>} />
            <Route path="/HomeMedico" element={<HomeMedico/>} />
            <Route path="/HomePaciente" element={<HomePaciente/>} />
            <Route path="/formulario/consulta" element={<FormularioConsulta/>} />
            {/* <Route path="*" element={<Erro/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}export default Rotas;