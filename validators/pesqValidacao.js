const {check} = require("express-validator")

const arrayValidacaoP = [
    check('id').escape().withMessage('Não encontramos esta busca')
   
        
    ]

module.exports = arrayValidacaoP;