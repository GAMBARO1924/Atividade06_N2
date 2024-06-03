import { Router } from "express";
import { FotoUpdateValidator, FotoValidator, FotoIdValidator } from "../validators/foto_validator.js";
import FotoController from "../controllers/foto_controller.js";

const router = Router()

router.get("/", FotoController.index)
router.post("/",FotoValidator, FotoController.create)
//router.get("/id:", produtoIdValidator,ProdutoController.show)
//router.put("/id:", produtoUpdateValidator,ProdutoController.update)
//router.delete("/id:", produtoIdValidator, ProdutoController.delete)//

export default router