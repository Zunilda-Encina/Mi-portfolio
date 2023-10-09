import React from 'react'
import './proyecto.css'
function Proyectos() {
  return (
      <div className="card-container">
  <div className="cartas">
    <img className='proyect' src="https://drive.google.com/uc?id=1njhjI6rCBQAgtejs_5ZJmK0wisizbWwt" alt="Juego clasico"></img>
      <div className='boton'>
       <button>Demo</button>
       <button>Repositorio</button>
        <p></p>
        </div>
  </div>
  <div className="cartas">
       <img className='proyect' src='https://drive.google.com/uc?id=1YidnvdHkWG-Wk3MwqvQxcz0egFtjib1v' alt="Lista de tareas"></img>
       <div className='boton'>
       <button>Demo</button>
       <button>Repositorio</button>
        <p></p>
        </div>
   </div>
   <div className="cartas">
       <img className='proyect' src='https://drive.google.com/uc?id=149gYqhwq5AIVyXHIG8maOjOdweXRVu7C' alt="Cuestionario de BTS"></img>
       <div className='boton'>
       <button>Demo</button>
       <button>Repositorio</button>
        <p></p>
        </div>
   </div>
 </div>
  )
}

export default Proyectos
