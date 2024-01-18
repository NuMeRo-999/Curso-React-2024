// --- IMPORTS ---
// import './App.css';
import GitHubUsers from './components/UseEffect/GitHubUserCardApi/GitHubUsers';

// --- VARIABLES GLOBALES ---

export const App = () => {

  return (
    <>
      <GitHubUsers></GitHubUsers>
    </>
  )

  // // --- HOOKS ---

  // // --- VARIABLES LOCALES ---
  // const texto = "Hola mundo";
  // const numero = 4;
  // const array = ['Manzana', 'Platano', 'Pera', 'Fresa', 'Uva'];
  // const objeto = {
  //   nombre: 'Pedro',
  //   edad: 20,
  // };

  // // --- FUNCTIONES DEL COMPONENTE ---
  // return (
  //   <>
  //     <h1>Ejemplo básico JSX</h1>
  //     <h2>Variables en JSX y objetos</h2>
  //     <div>
  //       <h3>La variable texto vale: {texto}</h3>
  //       <h3>La variable numero vale: {numero}</h3>
  //       <h3>La variable array vale: 
  //         <ul>
  //           {array.map((fruta, index) => (
  //             <li key={index}>{fruta}</li>
  //           ))}
  //         </ul>
  //       </h3>
  //       <h3>La variable objeto vale: {objeto.nombre} y {objeto.edad}</h3>
  //     </div>
  //   </>
  // )
}

export default App;
