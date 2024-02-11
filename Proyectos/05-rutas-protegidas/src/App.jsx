import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import About from './pages/About';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute isActive={false} redirectPath='login'/>,
          children: [
            { index: true, element: <Home/> },
            { index: 'about', element: <About/> },
          ]
        },
        {
          path: "login", element: <Login/>
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
