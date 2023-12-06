import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function HomePaciente(){
    const location = useLocation();
    const [medicos, setMedicos] = useState([])
    const [consultas, setConsultas] = useState([])
    const userData = location.state;
    const history = useNavigate();

    useEffect(() =>{
        console.count()
        let url = "medico-ms/medicos/listar/?page=0"
        let path = "consulta-ms/consulta/listar/paciente/" + userData.cpf
         API.get(url).then((response) =>{
            setMedicos(response.data);
        })

         API.get(path).then((response) =>{
            setConsultas(response.data);
        })
        },[]);

    const editInfo = () => {
        history("/formulario/consulta/edit", {
            state: {
            user: "paciente",
            identificador: userData.cpf,
            rota: "/HomePaciente"
            },
        });
        };



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
            rota: "/HomePaciente",
            nome: userData.nome
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
                </div>
            </div>
        )
    }

     function removerPaciente(cpf) {
         let url = `paciente-ms/pacientes/apagar/${cpf}`;
         async function apiDelete(){
                 API.delete(url).then((response) => {
                     if(response.status == 202){
                        toast.success("Conta removida com sucesso!");
                        setTimeout(() => {
                            history("/")
                        }, 3000);
                    }
             }).catch((error) => {
                 toast.error("Não foi possível remover a conta");
             })
         }

          apiDelete();
     }

    return(
        <>
        <div className="welcome-message">
          <h1>Olá, {userData.nome}!</h1>
        </div>
  
        <div className="column-container">
          <div className="column">
            <h2>Médicos cadastrados</h2>
            {medicos.length !== 0 ? (
              medicos.map((medico) => (
                <a key={medico.crm}> {listarMedicos(medico)} </a>
              ))
            ) : (
              <h3>Não existem médicos cadastrados ainda</h3>
            )}
          </div>
  
          <div className="column">
            <h2>Minhas consultas</h2>
            {consultas.length !== 0 ? (
              consultas.map((consulta) => (
                <a key={consulta.cpf + consulta.data}>
                  {" "}
                  {listarConsultas(consulta)}{" "}
                </a>
              ))
            ) : (
              <h3>Você não tem consultas marcadas</h3>
            )}
          </div>
        </div>
  
        <div>
          <button onClick={editInfo}>Atualizar meus dados</button>
          <br />
          <button onClick={() => removerPaciente(userData.cpf)}>
            Excluir conta
          </button>
        </div>
      </>
    )
}export default HomePaciente;