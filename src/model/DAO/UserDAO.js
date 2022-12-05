import userDB from '../Schema/User.js'

class UserDAO {
    async get(id) {
        try {
            if(!id) {
                return await userDB.find()
            }
    
            return await userDB.findById(id)
        } catch(e) {
            throw e
        }
    }

    async add(data) {
        try {
            return 1
        } catch(e) {
            throw e
        }
    }

    async update(data) {
        try{
            
        } catch(e) {
            throw e
        }
    }
}