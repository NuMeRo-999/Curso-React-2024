import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootPage from "./pages/RootPage"
import ErrorPage from "./pages/ErrorPage"
import ProtectedRoute from "./utils/ProtectedRoute"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ProductDetailPage from "./pages/ProductDetailPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useState } from "react"

function App() {
  const [login, setLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        { index: true, element: <Home/> },
        { path:'product/:productId', element: <ProductDetailPage/> },
        {
          element: <ProtectedRoute isActive={login} redirectPath='login'/>,
          children: [
            { path: '/cart', element: <Cart/> },
          ]
        },
      ]
    },
    { path: 'login', element: <Login setLogin={setLogin}/> },
    { path: 'register', element: <Register setLogin={setLogin} /> },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;

