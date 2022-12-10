import cartDAO from '../model/DAO/CartDAO.js'
import productDAO from '../model/DAO/ProductDAO.js'

const cart = {
    // SEND an cart by ID
    get: async (req, res) => {
        const cart = await cartDAO.get(req.user.cartID)
        
        if(!cart) {
            res.json({
                ERROR: "Cart dont exist"
            })
        } else {
            res.json(cart)
        }
    },

    // ADD a product to cart
    add: async (req, res) => {
        const { id } = req.params
        const { cartID } = req.user

        const product = await productDAO.get(id)
        const cart = await cartDAO.get(cartID)

        if(!cart) {
            res.json({
                ERROR: "Cart no exist"
            })
        } else {
            res.json(cart)
        }
    },

    // TAKE a product from cart
    take: (req, res) => {

    },

    // DELETE a cart
    delete: (req, res) => {
        
    }
}

export default cart