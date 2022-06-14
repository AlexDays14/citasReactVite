const Error = ({mensaje}) => {
  return (

     <div className='bg-red-500 p-3 rounded-xl mb-4'>
          <p className='text-center text-white font-bold text-lg'>{mensaje}</p>
     </div>
  )
}

export default Error