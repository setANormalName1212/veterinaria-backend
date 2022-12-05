// DAO
import userDAO from "../model/DAO/UserDAO.js"

const user = {
    get: async (req, res) => {
        const { id } = req.params
        
        res.send(`${id}`)
    },
    getAll: async (req, res) => {
        const users = await userDAO.get()

        res.json(users)
    },
    add: async (req, res) => {
        res.send("add")
    },
    put: async (req, res) => {
        res.send("update")
    },
    delete: async (req, res) => {
        res.send("delete")
    },
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

            /* IMPLEMENT DAO */
            res.json({
                msg: "Login success"
            })
        }
    },
    register: async(req, res) => {
        let { firstName, lastName, email, password, password2 } = req.body
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
    }
}

export default user