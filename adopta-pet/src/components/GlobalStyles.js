import React from "react"

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      /* Estilos para navegadores WebKit (Chrome, Safari, etc.) */
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background: #fcd0a1;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #8b4513;
        border-radius: 10px;
        border: 3px solid #fcd0a1;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #a690a4;
      }

      /* Estilos para Firefox */
      * {
        scrollbar-width: big;
        scrollbar-color: #8b4513 #fcd0a1;
      }

      /* Estilos para IE y Edge */
      body {
        -ms-overflow-style: none;
      }

      /* Ocultar la barra de desplazamiento predeterminada en IE y Edge */
      body::-ms-scrollbar {
        display: none;
      }
    `}</style>
  )
}
