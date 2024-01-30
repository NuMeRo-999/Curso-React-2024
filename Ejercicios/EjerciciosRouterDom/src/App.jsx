import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPostLayout from './pages/RootPostLayout'
import ErrorPostPage from './pages/ErrorPostPage'
import Home from './pages/Home'
import PostDetailPage from './pages/PostDetailPage'

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element: <RootPostLayout/>,
      errorElement: <ErrorPostPage/>,
      children: [
        { index: true, element: <Home/> },
        { path:'post/:postId', element: <PostDetailPage/> },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
