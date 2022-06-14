const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const { nombre, propietario, email, fecha, sintomas, id} = paciente;

  function handleEliminar(){
    const respuesta = confirm('¿Desea eliminar este paciente?')

    if(respuesta)eliminarPaciente(id)
  }

  return (
     <div className="m-5 bg-white shadow-lg rounded-xl px-5 py-10">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-between mt-8">
            <button onClick={() => setPaciente(paciente) } className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase transition-all rounded-lg" type="button">Editar</button>

            <button onClick={handleEliminar} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase transition-all rounded-lg" type="button">Eliminar</button>
          </div>
   </div>
  )
}

export default Paciente