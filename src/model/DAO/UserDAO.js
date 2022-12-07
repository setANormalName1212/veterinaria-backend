import bcrypt from 'bcrypt'
import userDB from '../Schema/User.js'
import cartDB from '../Schema/Cart.js'
import { Types } from 'mongoose'

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

    async getEmail(email) {
        try {
            return await userDB.findOne({ email: email })
        } catch(e) {
            throw e
        }
    }

    async add({firstName, lastName, email, password}) {
        try {
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    const newUser = new userDB({
                        fullName: firstName + " " + lastName,
                        email: email,
                        password: hash,
                        cartID: new Types.ObjectId()
                    })

                    const newCart = new cartDB({
                        _id: newUser.cartID
                    })

                    newUser.save()
                    newCart.save()
                })
            })
            return;
        } catch(e) {
            throw e
        }
    }

    async update(data) {
        try{
            await userDB.updateOne({ _id: data.id }, data)
        } catch(e) {
            throw e
        }
    }

    async deleteOne(id) {
        try {
            await userDB.deleteOne({ _id: id })
        } catch(e) {
            throw e
        }
    }
}

const userDAO = new UserDAO()

export default userDAO