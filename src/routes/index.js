import { Router } from "express";
import ProdutoRouter from '../controllers/produto_controllers.js'
import FotoRouter from '../controllers/foto_controller.js'


const router = Router()

router.use("/produtos", ProdutoRouter)
router.use("/foto", FotoRouter)

export default router