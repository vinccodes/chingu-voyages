const bcrypt = require('bcrypt')


module.exports = {
    hashPassword: async(password) =>{
        try {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        return passwordHash
        }
        catch(err) {
            if (err) {
                console.log(err)
                return null
            }
        }
    },
    getBearerToken: (request)=>{
        // get the "Bearer" token from request Authorization header
        const token = request.get('Authorization')

        // check if the token exists and follows Bearer scheme
        if (token && token.toLowerCase().startsWith("bearer")) {
            
            return token.substring(7)
        }
        return null
    }
}