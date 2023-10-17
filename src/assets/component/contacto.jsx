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
        <p className='texto'>Espero que hayas disfrutado explorando mi portfolio y 
        conociendo más sobre mi trabajo. No dudes en ponerte en contacto conmigo si 
        tienes alguna pregunta o deseas discutir oportunidades de colaboración. 
        Estoy emocionado por lo que el futuro me depara y ansioso por conectar con 
        otros apasionados de la tecnología y el desarrollo web. 
        ¡Gracias por visitar mi portfolio!</p>
    <div className="social">
            <a href="https://github.com/Zunilda-Encina"> <ion-icon name="logo-github"></ion-icon> {/* Icono */} </a>
            <a href="www.linkedin.com/in/zunilda-encina"> <ion-icon name="logo-linkedin"></ion-icon> {/*correo */} </a>
            <a href='https://mail.google.com/mail/u/1/#inbox?compose=new'><ion-icon name="mail-outline"></ion-icon></a>
  </div>
  </div>
  </>
  )
}

export default iconos
