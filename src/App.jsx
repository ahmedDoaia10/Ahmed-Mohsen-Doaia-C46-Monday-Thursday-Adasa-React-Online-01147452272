import React from 'react'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import routes from './Route/Route'
createBrowserRouter
export default function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

