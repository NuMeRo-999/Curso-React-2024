import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const RegistrarFormulario = () => {

  const [formData, setFormData] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(formData);
    setFormData(initialState)
  }

  
  function handleChange(e) {
    e.preventDefault();

    const {name, value} = e.target;

    setFormData({...formData, [name] : value})
  }

  return (
    <div className='max-w-md mx-auto mt-8 p-6 shadow-md rounded-md'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-2xl mb-4 font-bold text-center'>Formulario de registro</h1>
        <div className='max-w-md mx-auto mt-4 p-6 shadow-md rounded-md bg'>
          <label className='mx-4 text-2xl mb-4'>
            Nombre:
            <input type="text" name='name' value={formData.name} onChange={handleChange} className='flex-1 mr-2 mt-4 p-2 border rounded-md focus:outline-none focus:border-blue-500'/>
          </label>
        </div>

        <div className='max-w-md mx-auto mt-4 p-6 shadow-md rounded-md'>
          <label className='mx-4 text-2xl mb-4'>
            Email:
            <input type="email" value={formData.email} onChange={handleChange} name='email' className='flex-1 mr-2 mt-4 p-2 border rounded-md focus:outline-none focus:border-blue-500'/>
          </label>
        </div>

        <div className='max-w-md mx-auto mb-5 mt-4 p-6 shadow-md rounded-md'>
          <label className='mx-4 text-2xl mb-4'>
            Password:
            <input type="password" value={formData.password} onChange={handleChange} name='password' className='flex-1 mr-2 mt-4 p-2 border rounded-md focus:outline-none focus:border-blue-500'/>
          </label>
        </div>

        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Registrar Usuario</button>

      </form>
    </div>
  )
}

export default RegistrarFormulario;
