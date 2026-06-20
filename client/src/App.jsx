import {createBrowserRouter, RouterProvider} from 'react-router'
import AuthLayout from './layouts/AuthLayout'
import Login from './features/auth/ui/Login'
import Register from './features/auth/ui/Register'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AuthLayout/>,
      children: [
        {
          path:"",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
