import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import MyContext from './Context/MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <MyContext>
    <RouterProvider router={router} />
    </MyContext>
    {/* <RouterProvider router={router} /> */}
    
  </React.StrictMode>,
)
