const { check } = require("express-validator")

const arrayValidateCadastro = [
    check("nome").escape().not().isEmpty().withMessage("Nome Obrigatório"),
    check("email")
        .escape()
        .not()
        .isEmpty()
        .withMessage("Email é Obrigatório"),
    check("senha")
        .isLength({min:8})
        .escape()
        .not()
        .isEmpty()
        .withMessage("Senha é Obrigatória")
]

module.exports = arrayValidateCadastro;