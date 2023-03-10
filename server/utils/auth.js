const jwt = require('jsonwebtoken')

const secret = 'my super secret secret!'
const expiration = '2h'

module.exports = {
    signToken: function({username, _id}){
        const payload = {username, _id};
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration} )
    }
}