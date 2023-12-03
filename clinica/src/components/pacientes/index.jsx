import React, { useEffect, useState } from "react";
import API from "/src/API/api.jsx"
import axios from "axios";


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
                <h2>Email: {paciente.email}</h2>
                <h2>Nome: {paciente.cpf}</h2>
                <button>Marcar consulta</button>
                 <button onClick={() => removerPaciente(paciente.cpf)}>Deletar</button>
        
            </div>
        )
    }

    function removerPaciente(cpf){

        let url = `paciente-ms/pacientes/apagar/${cpf}`;
        async function apiDelete(){
                API.delete(url).then((response) => {
                    if(response.status == 202){
                        let listaAtualizada = pacientes.filter(paciente => paciente.cpf != cpf)
                        setPaciente(listaAtualizada);
                    }
            }).catch((error) => {
                console.log("Entrei no error");
                console.log(error.response.data.message)
                //console.log(error.data);
            })
        }

        apiDelete();
    }

    return(
        <>
        {pacientes.map((paciente) => <a key={paciente.cpf}> {listarPacientes(paciente)} </a>)}
        </>
    )

}export default Paciente