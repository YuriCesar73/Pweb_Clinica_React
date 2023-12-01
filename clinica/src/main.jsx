import React from 'react'
import ReactDOM from 'react-dom/client'
import Paciente from './components/pacientes'
import FormularioPaciente from './components/formularioPaciente'
import FormularioMedico from './components/formularioMedico'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormularioMedico/>
  </React.StrictMode>,
)
