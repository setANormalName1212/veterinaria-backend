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

    getAll: async (req, res) => {
        const carts = await cartDAO.getAll()

        res.json(carts)
    },

    // ADD a product to cart
    add: async (req, res) => {
        const { id } = req.params
        const { cartID } = req.user
        const { qty } = req.body

        const product = await productDAO.get(id)
        const cart = await cartDAO.get(cartID)

        // Product to add NO exist
        if (!product) {
            res.json({ ERROR: "Product dont exist" })
        } else {

            // Cart NO exist
            if (!cart) {
                res.json({ ERROR: "Cart dont exist" })
            } else {

                // Product already added to cart
                await cartDAO.add(cartID, product, qty)

                res.json()
            }
        }
    },

    // TAKE a product from cart
    take: async (req, res) => {
        // product id
        const { id } = req.params

        // cart id
        const { cartID } = req.user

        const product = await productDAO.get(id)
        const cart = await cartDAO.get(cartID)

        // Product to add NO exist
        if(!product) res.json({ ERROR: "Product dont exist"});

        // Cart NO exist
        if(!cart) res.json({ ERROR: "Crt dont exist" });

        await cartDAO.take(cartID, id)

        res.json()
    },

    buy: async (req, res) => {
        const { cartID } = req.user

        await cartDAO.buy(cartID)

        const cart = await cartDAO.get(cartID)

        res.json(cart)
    },

    // DELETE a cart
    delete: (req, res) => {
        
    }
}

export default cart