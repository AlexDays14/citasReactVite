import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() =>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])
  
  function generarId(){
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  function handleSubmit(e){
    e.preventDefault()
    
    //Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }

    setError(false);

    //Objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //Nuevo registro
      objetoPaciente.id = generarId();
        //Copia de pacientes y se le agrega el nuevo paciente
        setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar formulario (dejar en blanco el state y el form)
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y <span className="text-indigo-600 font-bold">Adminístralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5 md:mx-3"> 
        {error && <Error mensaje={'Todos los campos son Obligatorios'}/>}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
            <input className="border-2 w-full p-2 mt-2 rounded-md" type="text" id="mascota" placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) =>{setNombre(e.target.value)}} />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
            <input className="border-2 w-full p-2 mt-2 rounded-md" type="text" id="propietario" placeholder="Nombre del Propietario" value={propietario}
            onChange={(e) =>{setPropietario(e.target.value)}} />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
            <input className="border-2 w-full p-2 mt-2 rounded-md" type="email" id="email" placeholder="Email" value={email}
            onChange={(e) =>{setEmail(e.target.value)}} />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
            <input className="border-2 w-full p-2 mt-2 rounded-md" type="date" id="alta" value={fecha}
            onChange={(e) =>{setFecha(e.target.value)}} />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
            <textarea className="border-2 w-full p-2 mt-2 rounded-md" id="sintomas" placeholder="Describe los síntomas" value={sintomas}
            onChange={(e) =>{setSintomas(e.target.value)}}></textarea>
          </div>

          <input className={paciente.id ? 'bg-green-500 w-full rounded-md p-3 text-white uppercase font-bold cursor-pointer hover:bg-green-700 transition-all' : 'bg-indigo-600 w-full rounded-md p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all'} type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
        </form>
    </div>
  )
}

export default Formulario