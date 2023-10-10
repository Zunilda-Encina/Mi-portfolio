import React from 'react'
import { Route, Routes } from 'react-router-dom';
//pages
import Proyectos from './assets/component/Proyectos';
import Tecnologias from './assets/component/tecnologias';
import Contacto from './assets/component/contacto'
import Estudios from './assets/component/estudios'

function router() {
  return (
    <>
      <Routes>
          <Route path="/"  element={<Home user={user} setUser={setUser} modelos={modelos} />}
          />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/estudios"  element={<Estudios />}/>
          <Route path="/contacto" element={<Contacto />} />
          
        </Routes>
    </>
  )
}

export default router
