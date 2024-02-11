import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootPage from "./pages/RootPage"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  
  const [login, setLogin] = useState(false);

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirectPath='/login'/>,
          children: [
            { index: true, element: <Home/> },
          ]
        },
      ]
    },
    { path: "/login", element: <Login setLogin={setLogin}/> }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
