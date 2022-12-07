import cartDAO from '../model/DAO/CartDAO.js'

const cart = {
    // SEND an cart by ID
    get: async (req, res) => {
        res.json(req.user)
    },

    // SEND all carts
    getAll: (req, res) => {
        res.json({
            success: "An array of carts"
        })
    },

    // ADD a product to a cart
    add: (req, res) => {
        const { title, price, qty } = req.body
        const errors = []

        // ERROR: An ID is needed
        if(!id) {
            errors.push({ id: "An ID is needed"})
        }

        // ERROR: Cart don't found
        if(!id) {
            errors.push({
                find: "cart don't exist"
            })
        }

        // ERROR: Fill all inputs
        if(!title || !price || !qty) {
            errors.push({ inputs: "Fill all inputs"})
        }

        // ERROR: Errors exist
        if(errors.length > 0) {
            res.json(errors)
        } else {
            res.json()
        }
    },

    // UPDATE an cart
    update: (req, res) => {

    },

    // DELETE an cart
    delete: (req, res) => {
        
    }
}

export default cart