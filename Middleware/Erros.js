// Verificar se tem algum erro na requisição Validation
const {validationResult} = require('express-validator')
function Erros(req, res, next){
    const errors = validationResult(req)
    if(errors.isEmpty()){

       return next()
    }
    return res.status(406).json({
        mensagem:'essa requisição deu erro seu cabeçudo',
        errors: errors.array()
    })

}
module.exports = Erros