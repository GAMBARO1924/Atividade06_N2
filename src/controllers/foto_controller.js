import {validationResult} from "express-validator"
import Foto from "../models/foto_models.js"

export default class FotoController{
    static async index(req,res){
        const fotos = await Foto.findMany()
        res.json(fotos)
    }
    static async create(req,res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()){
            return res.static(400).json({erros: erros.array() })
        }
    
        const foto = await Foto.create({
            data: req.body
        })
        res.json(foto)
        }
    
}