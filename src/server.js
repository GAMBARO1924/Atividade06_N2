import express from "express"
import routes from "../src/routes/index.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3080

app.use(express.json())
app.use(cors())

app.use("/api", routes)

app.listen( PORT, ()=>{
    console.log(`Servidor inicializado em: http://localhost:${PORT}`)

})