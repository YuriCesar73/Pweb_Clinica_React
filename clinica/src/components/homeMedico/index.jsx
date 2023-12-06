import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import { useEffect, useState } from "react";
import "./index.css"

function HomeMedico(){
    const location = useLocation();
    const [pacientes, setPacientes] = useState([])
    const [consultas, setConsultas] = useState([])
    const userData = location.state;
    const history = useNavigate();

    useEffect(()=>{
        let url = "paciente-ms/pacientes/listar/?page=0"
        API.get(url).then((response) =>{
            setPacientes(response.data);
        })

        let path = "consulta-ms/consulta/listar/medico/" + userData.crm
        API.get(path).then((response) =>{
            setConsultas(response.data);
        })
        },[]);

    const handleClick = (paciente) => {
        history("/formulario/consulta", {
            state: {
            paciente: paciente.cpf,
            medico: userData.crm,
            },
        });
        };




        const cancelarConsulta = (consulta) => {
            history("/formulario/consulta/cancelar", {
                state: {
                paciente: consulta.paciente,
                data: consulta.data,
                horario: consulta.horario,
                rota: "/HomeMedico"
                },
            });
            };


    function listarPacientes(paciente){
        return(
            <div className="card">
                <div className="card-content">
                    <h2>Nome: {paciente.nome}</h2>
                    <h2>Email: {paciente.email}</h2>
                    <h2>Cpf: {paciente.cpf}</h2>
                    <button onClick={() => handleClick(paciente)}>Marcar consulta</button>
                    {/* <button onClick={() => removerPaciente(paciente.cpf)}>Deletar</button> */}
                </div>
                
        
            </div>
        )
    }

    function listarConsultas(consulta){
        return(
        
            <div className="card-consulta">
                <div className="card-content-consulta">
                    <h2>Paciente: {consulta.paciente}</h2>
                    <h2>Data: {consulta.data}</h2>
                    <h2>Horario: {consulta.horario}</h2>
                    <button onClick={() => cancelarConsulta(consulta)}>Desmarcar consulta</button>
                </div>
            </div>
        )
    }

    function removerPaciente(cpf){

        let url = `paciente-ms/pacientes/apagar/${cpf}`;
        async function apiDelete(){
                API.delete(url).then((response) => {
                    if(response.status == 202){
                        let listaAtualizada = pacientes.filter(paciente => paciente.cpf != cpf)
                        setPacientes(listaAtualizada);
                    }
            }).catch((error) => {
                console.log(error.response.data.message)
                //console.log(error.data);
            })
        }

        apiDelete();
    }

    return(
        <>
        <div className="welcome-message">
            Olá, {userData.nome}!
        </div>

         Pacientes cadastrados
        {pacientes.length != 0 ? pacientes.map((paciente) => <a key={paciente.cpf}> {listarPacientes(paciente)} </a>) : <h1>Não existem pacientes cadastrados ainda</h1>}
        <br />
        <br />
        <h3>Minhas consultas</h3>
        {consultas.length != 0 ? consultas.map((consulta) => <a key={consulta.cpf + consulta.data}> {listarConsultas(consulta)} </a>) : <h1>Você não tem consultas marcadas</h1>}
       
        </>
    )
}export default HomeMedico;