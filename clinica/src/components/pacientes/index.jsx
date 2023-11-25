import React, { useEffect, useState } from "react";
import API from "/src/API/api.jsx"


function Paciente(){

    const [pacientes, setPaciente] = useState([])

    useEffect(()=>{
        let url = "paciente-ms/pacientes/listar/?page=0"

        API.get(url).then((response) =>{
            setPaciente(response.data);
        })
        },[]);


    function listarPacientes(paciente){
        return(
            <div>
                <h2>Nome: {paciente.nome}</h2>
                <h2>Email: {paciente.paciente}</h2>
                <h2>Nome: {paciente.cpf}</h2>
            </div>
        )
    }

    function apagarMedico(){
        console.log("Cheguei aqui")

        let url = "paciente-ms/pacientes/apagar/12345678909"

        async function apiDelete(){
            await API.delete(url).then((response) => {
                console.log(response.data);
                console.log(response.status);
                
            })
        }

        apiDelete();
    }

    return(
        <>
        <h1>Olá</h1>
        {pacientes.map((paciente) => <a key={paciente.cpf}> {listarPacientes(paciente)} </a>)}
        <button>Adicionar</button>
        <button onClick={() => apagarMedico()}>Deletar</button>
        
        </>
    )

}export default Paciente