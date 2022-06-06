const { body } = require("express-validator")
// bail interrompe a cadeia de validações
const arrayValidateCadastro = [
    body("nome").escape().not().isEmpty().withMessage("Nome Obrigatório"),
    body("email")
        .escape()
        .not()
        .isEmpty()
        .withMessage("Email é Obrigatório"),
    body("senha")
        .isLength({min:8})
        .escape()
        .not()
        .isEmpty()
        .withMessage("Senha é Obrigatória")
]

module.exports = arrayValidateCadastro;