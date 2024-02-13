import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProtectedRoute from './utils/ProtectedRoute';
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import PaymentPage from "./pages/PaymentPage"
import ErrorPage from "./pages/ErrorPage"
import EditProductPage from "./pages/EditProductPage"
import RootPage from "./pages/RootPage"
import { AuthProvider } from "./context/authContextProduct";

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute redirectPath='/login'/>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App
