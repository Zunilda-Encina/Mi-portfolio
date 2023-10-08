import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Proyectos from './assets/component/Proyectos';
import Tecnologias from './assets/component/tecnologias';
import Footer from './assets/component/footer'
import Estudios from './assets/component/estudios'
import './App.css'
function App() {
  useEffect(() => {
    // Crear un elemento <script> para cargar el script externo
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@latest/dist/ionicons.js';
    script.async = true;

    // Agregar el script al final del <body>
    document.body.appendChild(script);

    // Limpieza: eliminar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);
   // Función para manejar la descarga del archivo
   const handleDownload = () => {
    // Ruta al archivo que deseas descargar
    const fileUrl = '/mi-cv.pdf';

    // Crea un elemento <a> temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'mi-cv.pdf';

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
          <a href="#">Projectos</a>
          <a href="#">Tecnologias</a>
          <a href="#">Estudios</a>
          <a href="#">Contacto</a>
        </nav>
</header>

  <section>
        <div className="main">
        <div className="social">
            <a href="#"> <ion-icon name="logo-github"></ion-icon> {/* Icono */} </a>
            <a href="#"> <ion-icon name="logo-linkedin"></ion-icon> {/*correo */} </a>
            <a href="#"> <ion-icon name="logo-instagram"></ion-icon> </a>
          </div>
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
            <div className="button"> 
            <button onClick={handleDownload}><ion-icon name="download-outline"></ion-icon> 
             Descargar CV </button> </div>
          </div>
          <div className="images">
            <img src="https://task025.w3spaces.com/self3.png" alt="Foto de porfolio"  width="100%"  />
          </div>
        </div>
      </section>
    <Proyectos />
    <Tecnologias />
    <Estudios />
    <Footer />
    </div>
    </>
  )
}

export default App
