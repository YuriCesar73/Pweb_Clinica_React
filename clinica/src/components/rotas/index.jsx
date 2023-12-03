import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioMedico from "../formularioMedico";
import Login from "../login";
import FormularioPaciente from "../formularioPaciente";


function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/formulario/medico" element={<FormularioMedico/>} />
            <Route path="/formulario/paciente" element={<FormularioPaciente/>} />
            {/* <Route path="*" element={<Erro/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}export default Rotas;