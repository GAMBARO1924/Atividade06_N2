import {body} from "express-validator"

export const FotoValidator =[
    body('titulo').isString().withMessage("titulo e obrigatorio"),
    body('url').isNumeric().withMessage("url e obrigatorio"),
    body('produtoId').isString().withMessage("Produto ID e obrigatorio"),

]

export const FotoUpdateValidator =[
    body('id').isInt().withMessage("ID e obrigatorio"),
    body('titulo').isString().withMessage("titulo e obrigatorio"),
    body('url').isNumeric().withMessage("url e obrigatorio"),
    body('produtoId').isString().withMessage("Produto ID e obrigatorio"),

]

export const FotoIdValidator =[
    param('id').isInt().withMessage("ID e obrigatorio"),

]