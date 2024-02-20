import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Clientes'
import {obtenerClientes} from '../data/clientes'

export  function loader() {
  const clientes =  obtenerClientes()
  console.log(clientes)
  return  clientes
}

const Index = () => {
  const clientes = useLoaderData()
  return (
    <>
      <h1 className='font-black text-4xl text-green-900'>Clientes</h1>
      <p className='mt-3 '>Administra tus Clientes</p>
      {clientes.length > 0 ? (
        <table className='w-full bg-white shodow mt-5 table-auto'>
          <thead className='bg-green-800 text-white '>
            <tr>
              <th className='p-2'> Cliente</th>
              <th className='p-2'> Contacto</th>
              <th className='p-2'> Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => (
              <Cliente
              cliente={cliente}
              key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10 '>No hay Clientes</p>
      )}
    </>
  )
}

export default Index
