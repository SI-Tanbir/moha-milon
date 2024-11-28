import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import Root from './components/Root.jsx';
import { RouterProvider } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';



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
      }
    ]
  },

]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />

  </StrictMode>,
)
