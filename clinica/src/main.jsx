import React from 'react'
import ReactDOM from 'react-dom/client'
import Paciente from './components/pacientes'
import FormularioPaciente from './components/formularioPaciente'
import FormularioMedico from './components/formularioMedico'
import Login from './components/login'
import Rotas from './components/rotas'
import Medico from './components/medicos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>,
)
