import jsonwebtoken from "jsonwebtoken"
import bcrypt from 'bcrypt'

// DAO
import userDAO from "../model/DAO/UserDAO.js"

const user = {
    // SEND a user by ID
    get: async (req, res) => {
        const { id } = req.params
        
        res.send(`${id}`)
    },

    // SEND ALL users
    getAll: async (req, res) => {
        const users = await userDAO.get()

        res.json(users)
    },

    // UPDATE a user
    put: async (req, res) => {
        res.send("update")
    },

    // DELETE a product by ID
    delete: async (req, res) => {
        res.send("delete")
    },

    // LOGIN
    login: async (req, res) => {
        const { email, password } = req.body
        const errors = []

        // fill all inputs
        if(!email || !password) {
            errors.push({ msg: "fill all inputs"})
        }

        // errors exist
        if(errors.length > 0) {
            res.json(errors)
        } else {
            const user = await userDAO.getEmail(email)

            if(!user) {
                res.json({
                    ERROR_FIND: "User doesn't exist"
                })
            } else {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(isMatch) {
                        const ACCESS_TOKEN = jsonwebtoken.sign({
                            userID: user._id,
                            cartID: user.cartID
                        }, process.env.ACCESS_TOKEN)

                        res.cookie("user", ACCESS_TOKEN)
                        res.json({
                            success: "Loged"
                        })
                    }
                })

            }
        }
    },

    // REGISTER
    register: async(req, res) => {
        // recived inputs
        let { firstName, lastName, email, password, password2 } = req.body
        
        // Array of errors
        const errors = []

        // fill all inputs
        if( !firstName || !lastName || !email || !password || !password2 ) {
            errors.push({msg: "Fill all inputs"})
        }

        // passwords length > 7
        if(password.length < 8) {
            errors.push({msg: "passwords should be at least 8 characters long"})
        }

        // passwords dont match
        if(password !== password2) {
            errors.push({msg: "Passwords dont match"})
        }

        // errors exist
        if(errors.length > 0) {
            res.json(errors)
        } else {
            await userDAO.add(req.body)

            res.json({
                success: "register success"
            })
        }
    },

    logout: async (req, res) => {
        res.clearCookie("user")
        res.json({
            success: "cookies deleted"
        })
    }
}

export default user