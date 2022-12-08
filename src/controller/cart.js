import cartDAO from '../model/DAO/CartDAO.js'

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
    add: (req, res) => {
    },

    // TAKE a product from cart
    take: (req, res) => {

    },

    // DELETE a cart
    delete: (req, res) => {
        
    }
}

export default cart