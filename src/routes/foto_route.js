import { Router } from "express";
import { produtoIdValidator, produtoValidator, produtoUpdateValidator } from "../validators/produto_validator.js";
import FotoController from "../controllers/foto_controller.js";

const router = Router()

router.get("/", FotoController.index)
router.post("/",produtoValidator, FotoController.create)
//router.get("/id:", produtoIdValidator,ProdutoController.show)
//router.put("/id:", produtoUpdateValidator,ProdutoController.update)
//router.delete("/id:", produtoIdValidator, ProdutoController.delete)//

export default router