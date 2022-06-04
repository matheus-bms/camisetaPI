const {check} = require("express-validator")

const arrayDeValidacao = [
    check('email').trim().isEmail().notEmpty(),
    check('senha').trim()
        .isString().withMessage('Este campo precisar ser uma string')
        .isLength({min:8}).withMessage('Este campo precisar ter no minimo 8 caracters')
    ]

module.exports = arrayDeValidacao;