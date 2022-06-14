import {useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

/*   useEffect(() =>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
      console.log(pacientesLS);
      
    }

    obtenerLS()
  }, []); */

  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  function eliminarPaciente(id){
    const pacientesActualizados = pacientes.filter(pacienteFiltro => pacienteFiltro.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-12">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        />
        <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
