import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Proyectos from './assets/component/Proyectos';
import Tecnologias from './assets/component/tecnologias';
import Contacto from './assets/component/contacto'
import Estudios from './assets/component/estudios'


import './App.css'
function App() {
  useEffect(() => {
    // Se crea elemento script para cargar el script externo
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@latest/dist/ionicons.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
   // Función para manejar la descarga del archivo
   const handleDownload = () => {
    // Ruta al archivo que deseas descargar
    const fileUrl = './src/ZUNILDA-ENCINA-ACUÑA.pdf';

    // Crea un elemento <a> temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ZUNILDA-ENCINA-ACUÑA.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  };
  return (
    <>
      <div>
 <header>
        <div className="logo">
          <a href="#">Developer FULL-STACK</a>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="bi bi-list"></i>
          </div> 
        </label>
        <nav>
    <a href="#" className="active"> Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Tecnologias</a>
          <a href="#">Formación</a>
          <a href="#">Contacto</a>
        </nav>
</header>

  <section>
        <div className="main">
        <div className="social">
            <a href="https://github.com/Zunilda-Encina"> <ion-icon name="logo-github"></ion-icon> {/* Icono */} </a>
            <a href="www.linkedin.com/in/zunilda-encina"> <ion-icon name="logo-linkedin"></ion-icon> {/*correo */} </a>
            <a href="#"> <ion-icon name="logo-instagram"></ion-icon> </a>
          </div>
     <div className="detail">
            <h1>
              <span>Hola,</span> <br /> me llamo{' '}
              <span style={{ color: '#3f023f' }}>Zunilda Encina</span>
            </h1>
            <p>  Soy programadora en busca de mi primer empleo. <br />
            Estoy emocionada por la oportunidad de aplicar mis habilidades y conocimientos en el mundo laboral, 
           contribuyendo de manera positiva a proyectos desafiantes y 
            creciendo como profesional en la industria de la programación.
            </p>
            <p>Actualmente, estoy cursando la Diplomatura en Programación 
              Web Full Stack en la UTN gracias a una beca otorgada por la 
              Fundación Empujar. En la UTN, adquiero conocimientos relacionados 
              con la programación y sus herramientas, mientras que la Fundación 
              me brinda formación en habilidades blandas. </p>
            <div className="button"> 
            <button onClick={handleDownload}><ion-icon name="download-outline"></ion-icon> 
             Descargar CV </button> </div>
          </div>
          <div className="images">
            <img className='foto' src="https://drive.google.com/uc?id=1FcwtptB71jJp8IizEWrTH4_Dfzh29d-n" alt="Foto de porfolio"  width="100%"  />
          </div>
        </div>
      </section>
    <Proyectos />
    <Tecnologias />
    <Estudios />
    <Contacto />
    </div>
    </>
  )
}

export default App
