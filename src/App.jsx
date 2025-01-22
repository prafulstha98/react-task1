import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { RouterProvider } from 'react-router'


export const App = () => {
  const routerFuture = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: '/about',
          element: <About/>,
        },
        {
          path: '/contact',
          element: <Contact/>,
        },
      ]
    },
    {},
  ])
  return <RouterProvider router={routerFuture}/> 
}
