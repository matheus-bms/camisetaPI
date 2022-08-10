const { param } = require("express-validator")

const cartValidacao = [
    param("id")
        .notEmpty()
        .withMessage("Este Campo Precisa ser Preenchido")
        .escape()
        .toInt()
        .isInt({allow_leading_zeroes: false,min: 1})
        .withMessage("Voçe Precisa passar um numero Igual ou maior que 1")



]

module.exports = cartValidacao;