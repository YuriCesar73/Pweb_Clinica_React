import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import { useEffect, useState } from "react";
import "./index.css"


function HomeMedico(){
    const location = useLocation();
    const [pacientes, setPacientes] = useState([])
    const userData = location.state;
    const history = useNavigate();

    useEffect(()=>{
        let url = "paciente-ms/pacientes/listar/?page=0"

        API.get(url).then((response) =>{
            setPacientes(response.data);
        })
        },[]);





        const handleClick = (paciente) => {
            history("/formulario/consulta/medico", {
              pathname: '/formulario/consulta/medico',
              state: {
                paciente: paciente.cpf,
                medico: userData.crm,
              },
            });
          };


    function listarPacientes(paciente){
        return(
            <div className="card">
                <div className="card-content">
                    <h2>Nome: {paciente.nome}</h2>
                    <h2>Email: {paciente.email}</h2>
                    <h2>Nome: {paciente.cpf}</h2>
                    <button onClick={() => handleClick(paciente)}>Marcar consulta</button>
                    {/* <button onClick={() => removerPaciente(paciente.cpf)}>Deletar</button> */}
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
        {pacientes.map((paciente) => <a key={paciente.cpf}> {listarPacientes(paciente)} </a>)}
        </>
    )
}export default HomeMedico;