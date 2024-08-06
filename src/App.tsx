import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouteComponent from './routes/RouteComponent'
import React from 'react'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RouteComponent.map(({ path, component }, index) =>
          (
            <Route key={index} path={path} element={React.createElement(component)}/>
          )
        )}
      </Routes>
    </BrowserRouter>
  )
}
