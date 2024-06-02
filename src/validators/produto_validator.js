import {body} from "express-validator"

export const produtoValidator =[
    body('nome').isString().withMessage("nome e obrigatorio"),
    body('preco').isNumeric().withMessage("preco e obrigatorio"),
    body('descricao').isString().withMessage("descricao e obrigatorio"),

]

export const produtoUpdateValidator =[
    body('id').isInt().withMessage("ID e obrigatorio"),
    body('nome').isString().withMessage("nome e obrigatorio"),
    body('preco').isNumeric().withMessage("preco e obrigatorio"),
    body('descricao').isString().withMessage("descricao e obrigatorio"),

]

export const produtoIdValidator =[
    param('id').isInt().withMessage("ID e obrigatorio"),

]