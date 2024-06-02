import Produto from  "../models/produto_models.js"
import {validationResult} from "express-validator"

export default class ProdutoController{
    static async index(req,res){
        const produtos = await Produto.findMany()
        res.json(produtos)
    }

    static async create(req,res) {
    const erros = validationResult(req)
    if (!erros.isEmpty()){
        return res.static(400).json({erros: erros.array() })
    }

    const produto = await Produto.create({
        data: req.body
    })
    res.json(produto)
    }


static async show(req,res){
    const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(400).json({ erros: erros.array})
    }
    const produto = await Produto.findUnique({
        where:{
            id: parseInt(req.params.id)
        }
    })
    if(!produto) {
        return res.status(404).json({ message:'Usuario nao encontrado'})
    }
    res.json(produto)
}

static async update(req,res){
    const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(400).json({ erros: erros.array})
    }
    const produto = await Produto.findUnique({
        where:{
            id: parseInt(req.params.id)
        }
    })
    if(!produto) {
        return res.status(404).json({ message:'Produto nao encontrado'})
    }
    const updatedUser = await Produto.update({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(updatedUser)
}

static async delete(req,res){
    const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(400).json({ erros: erros.array})
    }
    const produto = await Produto.findUnique({
        where:{
            id: parseInt(req.params.id)
        }
    })
    if(!produto) {
        return res.status(404).json({ message:'Produto nao encontrado'})
    }
    await Produto.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json({message:"Produto deletado com sucesso"})
}
}