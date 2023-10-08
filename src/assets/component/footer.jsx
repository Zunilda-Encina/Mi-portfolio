import React, { useEffect } from 'react'
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
    <div className="social">
            <a href="#"> <ion-icon name="logo-github"></ion-icon> {/* Icono */} </a>
            <a href="#"> <ion-icon name="logo-github"></ion-icon> {/*correo */} </a>
            <a href="#"> <ion-icon name="logo-github"></ion-icon> </a>
            <a href="#"> <ion-icon name="logo-github"></ion-icon> </a>
  </div>
  )
}

export default iconos
