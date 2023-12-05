import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import { useEffect, useState } from "react";



function HomePaciente(){
    const location = useLocation();
    const [medicos, setMedicos] = useState([])
    const [consultas, setConsultas] = useState([])
    const userData = location.state;
    const history = useNavigate();

    useEffect(() =>{
        let url = "medico-ms/medicos/listar/?page=0"
        let path = "consulta-ms/consulta/listar/paciente/" + userData.cpf
        /* API.get(url).then((response) =>{
            setMedicos(response.data);
        })*/

         API.get(path).then((response) =>{
            setConsultas(response.data);
        })

        },[]);





    const handleClick = (medico) => {
        history("/formulario/consulta", {
            state: {
            medico: medico.crm,
            paciente: userData.cpf,
            },
        });
        };

        const cancelarConsulta = (consulta) => {
            history("/formulario/consulta/cancelar", {
                state: {
                paciente: userData.cpf,
                data: consulta.data,
                horario: consulta.horario,
                rota: "/HomePaciente"
                },
            });
            };

    
    function listarConsultas(consulta){
        return(
        
            <div className="card-consulta">
                <div className="card-content-consulta">
                    <h2>Medico: {consulta.medico}</h2>
                    <h2>Data: {consulta.data}</h2>
                    <h2>Horario: {consulta.horario}</h2>
                    <button onClick={() => cancelarConsulta(consulta)}>Desmarcar consulta</button>
                </div>
            </div>
        )
    }


    function listarMedicos(medico){

     
        return(
            <div className="card">
                <div className="card-content">
                    <h2>Nome: {medico.nome}</h2>
                    <h2>Email: {medico.email}</h2>
                    <h2>Crm: {medico.crm}</h2>
                    <h2>Especialidade: {medico.especialidade}</h2>
                    <button onClick={() => handleClick(medico)}>Marcar consulta</button>
                    {/* <button onClick={() => removerPaciente(paciente.cpf)}>Deletar</button> */}
                </div>
                
        
            </div>
        )
    }

    // function removerPaciente(cpf){

    //     let url = `paciente-ms/pacientes/apagar/${cpf}`;
    //     async function apiDelete(){
    //             API.delete(url).then((response) => {
    //                 if(response.status == 202){
    //                     let listaAtualizada = pacientes.filter(paciente => paciente.cpf != cpf)
    //                     setPacientes(listaAtualizada);
    //                 }
    //         }).catch((error) => {
    //             console.log(error.response.data.message)
    //             //console.log(error.data);
    //         })
    //     }

    //     apiDelete();
    // }

    return(
        <>
        <div className="welcome-message">
            Olá, {userData.nome}!
        </div>
        {console.log(medicos)}
        {console.log(consultas)}
        {medicos.length != 0 ? medicos.map((medico) => <a key={medico.crm}> {listarMedicos(medico)} </a>) : <h1>Deu erro</h1>}
        <br />
        <br />
        Minhas consultas
        {consultas.length != 0 ? consultas.map((consulta) => <a key={consulta.cpf}> {listarConsultas(consulta)} </a>): <h1>Deu erro</h1>}
        </>
    )
}export default HomePaciente;