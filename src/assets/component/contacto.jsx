import React, { useEffect } from 'react'
import './footer.css'

function iconos() {
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
  return (
    <>
     <h1 className='h1'>Contacto</h1>
    <div className="icon-container">
        <p className='texto'>Si estás en busca de un especialista en desarrollo front-end con conocimientos en back-end, 
        te invito a contactarme a través de mis redes sociales o directamente a 
        mi correo electrónico.</p>
    <div className="social">
            <a href="https://github.com/Zunilda-Encina"> <ion-icon name="logo-github"></ion-icon> {/* Icono */} </a>
            <a href="www.linkedin.com/in/zunilda-encina"> <ion-icon name="logo-linkedin"></ion-icon> {/*correo */} </a>
            <a href="#"> <ion-icon name="logo-instagram"></ion-icon> </a>
            <a href=''><ion-icon name="mail-outline"></ion-icon></a>
  </div>
  </div>
  </>
  )
}

export default iconos
