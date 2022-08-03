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
    }
}