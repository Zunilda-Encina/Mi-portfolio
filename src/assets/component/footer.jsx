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
    <div className="icon-container">
    <div className="social">
            <a href="#"> <ion-icon name="logo-github"></ion-icon> {/* Icono */} </a>
            <a href="#"> <ion-icon name="logo-linkedin"></ion-icon> {/*correo */} </a>
            <a href="#"> <ion-icon name="logo-instagram"></ion-icon> </a>
  </div>
  </div>
  )
}

export default iconos
