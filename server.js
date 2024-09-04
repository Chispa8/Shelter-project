const express = require("express")
const path = require("path")
const app = express()

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname)))

// Rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

// Iniciar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
