import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Card from './components/Card'
import Login from './components/login'
import Signup from './components/Signup'
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './providers/PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/category/:id',
        element: <PrivateRoute><Card></Card></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Signup></Signup>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
