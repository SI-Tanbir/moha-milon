import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import Root from './components/Root.jsx';
import { RouterProvider } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import Dashboard from './components/Dashboard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';



let router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },

]);






createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>

 <RouterProvider router={router} />

</AuthProvider>

  </StrictMode>,
)
