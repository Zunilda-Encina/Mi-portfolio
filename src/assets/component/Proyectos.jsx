import React from 'react'
import './proyecto.css'
function Proyectos() {
  return (
     <>
     <h1 className='h1'>Proyectos</h1>
        <p className='texto'>En esta sección, podrás ver una muestra de mis trabajos.</p>
     <div className="card-container">
      <div className="cartas">
        <img className='proyect' src="https://drive.google.com/uc?id=1njhjI6rCBQAgtejs_5ZJmK0wisizbWwt" alt="Juego clasico"></img>
        <p className='parrafo'>Este juego sigue un estilo clásico en 2D y fue desarrollado utilizando
          los lenguajes de programación HTML, CSS y JavaScript.</p>
        <div className='boton'>
          <a href="https://juego-clasico-2d.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button>Demo</button> </a>
          <a href='https://github.com/Zunilda-Encina/Juego-en-2D.git'>
            <button>Repositorio</button></a>
        </div>
      </div>
      <div className="cartas">
        <img className='proyect' src='https://drive.google.com/uc?id=1YidnvdHkWG-Wk3MwqvQxcz0egFtjib1v' alt="Lista de tareas"></img>
        <p className='parrafo'>Este proyecto consiste en una lista simple de tareas y fue
          desarrollado utilizando React y CSS. Permite añadir, modificar o eliminar una tarea.</p>
        <div className='boton'>
          <a href="https://lista-de-tarea963.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button>Demo</button> </a>
          <a href='https://github.com/Zunilda-Encina/Lista-de-tareas.git'>
            <button>Repositorio</button></a>
        </div>
      </div>
      <div className="cartas">
        <img className='proyect' src='https://drive.google.com/uc?id=149gYqhwq5AIVyXHIG8maOjOdweXRVu7C' alt="Cuestionario de BTS"></img>
        <p className='parrafo'>Este proyecto es un cuestionario acerca de BTS, y 
            fue desarrollado utilizando HTML, CSS y JavaScript"</p>
        <div className='boton'>
          <a href="https://cuanto-sabes-de-bts.netlify.app/">
            <button>Demo</button> </a>
          <a href='https://github.com/Zunilda-Encina/Cuanto-Sabes-BTS.git'>
            <button>Repositorio</button></a>
        </div>
      </div>
    </div></>
  )
}

export default Proyectos
