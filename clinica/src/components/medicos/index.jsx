import React, { useEffect, useState } from "react";
import API from "/src/API/api.jsx"
import axios from "axios";


function Medico(){

    const [medicos, setMedicos] = useState([])

    useEffect(()=>{
        let url = "medico-ms/medicos/listar/?page=0"

        API.get(url).then((response) =>{
            console.log(response.data)
            setMedicos(response.data);
        })
        },[]);


    function listarMedicos(medico){
        return(
            <div>
                <h2>Nome: {medico.nome}</h2>
                <h2>Email: {medico.email}</h2>
                <h2>Crm: {medico.crm}</h2>
                <button>Marcar consulta</button>
                 <button onClick={() => removerMedico(medico.crm)}>Deletar</button>
        
            </div>
        )
    }

    function removerMedico(crm){
        let url = `medico-ms/medicos/apagar/${crm}`;
        async function apiDelete(){
                API.delete(url).then((response) => {
                    if(response.status == 202){
                        let listaAtualizada = medicos.filter(medico => medico.crm != crm)
                        setMedicos(listaAtualizada);
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
        {medicos.map((medico) => <a key={medico.crm}> {listarMedicos(medico)} </a>)}
        </>
    )

}export default Medico