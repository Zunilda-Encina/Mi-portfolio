import { useState } from 'react'
import './App.css';
import Iconos from './assets/componentes/iconos';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
 <header>
        <div className="logo">
          <a href="#">Desarrollador FULL-STACK</a>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="bi bi-list"></i>
          </div>
        </label>
        <nav>
    <a href="#" className="active"> Inicio</a>
          <a href="#">Projectos</a>
          <a href="#">Skills</a>
          <a href="#">About</a>
          <a href="#">Contacto</a>
        </nav>
</header>

  <section>
        <div className="main">
          <Iconos />
     <div className="detail">
            <h1>
              <span>Hola,</span> <br /> me llamo{' '}
              <span style={{ color: '#113D6B' }}>Zunilda</span>
            </h1>
            <p>  Soy programadora en busca de mi primer empleo. <br />
            Estoy emocionada por la oportunidad 
            de aplicar mis habilidades y conocimientos en el mundo laboral, 
           contribuyendo de manera positiva a proyectos desafiantes y 
            creciendo como profesional en la industria de la programación.
            </p>
            <div className="button"> <button>Descargar CV</button> </div>
          </div>
          <div className="images">
            <img src="https://task025.w3spaces.com/self3.png" alt="Foto de porfolio"  width="100%"  />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App

