import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProtectedRoute from './utils/ProtectedRoute';
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import PaymentPage from "./pages/PaymentPage"
import ErrorPage from "./pages/ErrorPage"
import EditProductPage from "./pages/EditProductPage"
import RootPage from "./pages/RootPage"
import { ProductosProvider } from "./context/ProductosProvider";

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirectPath='/login'/>,
          children: [
            { index: true, element: <HomePage/> },
            { path: 'productos/:productId', element: <EditProductPage/> },
            { path: 'payment', element: <PaymentPage/> },
          ]
        },
        { path: "/login", element: <Login/> }
      ]
    }
  ])

  return (
    <>
      <ProductosProvider>
      <RouterProvider router={router} />
    </ProductosProvider>
    </>
  )
}

export default App
