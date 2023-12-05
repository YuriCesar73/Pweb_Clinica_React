import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import { useEffect, useState } from "react";



function HomePaciente(){
    const location = useLocation();
    const [medicos, setMedicos] = useState([])
    const userData = location.state;
    const history = useNavigate();

    useEffect(()=>{
        let url = "medico-ms/medicos/listar/?page=0"

        API.get(url).then((response) =>{
            setMedicos(response.data);
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


    function listarMedicos(medico){

        console.log(Object.keys(medico))
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
        {medicos.map((medico) => <a key={medico.crm}> {listarMedicos(medico)} </a>)}
        </>
    )
}export default HomePaciente;