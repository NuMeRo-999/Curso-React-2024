import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootMovieLayout from './pages/RootMovieLayout';
import ErrorMoviePage from './pages/ErrorMoviePage';
import MovieDetailPage from './pages/MovieDetailPage';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';

function App(){

  const router=createBrowserRouter([
    {
      path:'/',
      element: <RootMovieLayout/>, // loader: () => {} <- de router-dom
      errorElement: <ErrorMoviePage/>,
      children: [
        { index: true, element: <Home/> },
        // { path:'peliculas', element: <Products/> },
        { path:'peliculas/:movieId', element: <MovieDetailPage/> },
      ]
    },
    {
      path: 'acerca_de',
      element: <AcercaDe/>,
    }
    
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
