import { useLocation, useNavigate } from "react-router-dom";
import API from "/src/API/api.jsx"
import { useEffect, useState } from "react";
import "./index.css"
import { toast } from "react-toastify";

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

        const editInfo = () => {
            history("/formulario/consulta/edit", {
                state: {
                user: "medico",
                identificador: userData.crm,
                rota: "/HomeMedico"
                },
            });
            };



        const cancelarConsulta = (consulta) => {
            history("/formulario/consulta/cancelar", {
                state: {
                paciente: consulta.paciente,
                data: consulta.data,
                horario: consulta.horario,
                rota: "/HomeMedico",
                crm: userData.crm,
                nome: userData.nome
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

    function removerMedico(crm){

        let url = `medico-ms/medicos/apagar/${crm}`;
        async function apiDelete(){
                API.delete(url).then((response) => {
                    if(response.status == 202){

                        toast.success("Conta removida com sucesso!");
                        setTimeout(() => {
                            history("/")
                        }, 3000);
                    }
            }).catch((error) => {
                toast.error("Não foi possível remover a conta")
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
            <h2>Pacientes cadastrados</h2>
            {pacientes.length !== 0 ? (
              pacientes.map((paciente) => (
                <a key={paciente.cpf}> {listarPacientes(paciente)} </a>
              ))
            ) : (
              <h3>Não existem pacientes cadastrados ainda</h3>
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
          <button onClick={editInfo} type="submit">
            Atualizar meus dados
          </button>
          <br />
          <button onClick={() => removerMedico(userData.crm)} type="submit">
            Desativar minha conta
          </button>
        </div>
      </>
    )
}export default HomeMedico;