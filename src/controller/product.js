// DAO 
import productDAO from "../model/DAO/ProductDAO.js"

const product = {
    // SEND a product by ID
    get: async (req, res) => {
        const { id } = req.params
        const product = await productDAO.get(id)
        const errors = []

        // product dont exist
        if(!product) {
            errors.push({ msg: "Product don't exist" })
        }

        // errors length
        if(errors.length > 0) {
            res.json(errors)
        } else {
            res.json(product)
        }
    },

    // SEND ALL products
    getAll: async (req, res) => {
        const products = await productDAO.getAll()

        res.json(products)
    },

    // CREATE a product
    add: async (req, res) => {
        const { title, price, description, stock, category, subcategory } = req.body
        const errors = []

        // Fill all inputs
        if( !title || !price || !description || !stock || !category) {
            errors.push({ msg: "Fill all inputs" })
        }

        if(errors.length > 0) {
            res.json(errors)
        } else {
            await productDAO.add(req.body)

            res.json()
        }
    },

    // UPDATE or PATCH a product
    update: async (req, res) => {
        const { id } = req.params

        const product = await productDAO.get(id)

        if(!product) {
            res.json({
                ERROR: "Product not found"
            })
        } else {
            await productDAO.update(id, req.body)

            res.json(product)
        }
    },

    // DELETE a product by ID
    delete: async (req, res) => {
        const { id } = req.params
        
        const product = await productDAO.get(id)

        if(!product) {
            res.json({
                ERROR: "Product not found"
            })
        } else {
            await productDAO.delete(id)

            res.json()
        }

        
    },

    deleteAll: async (req, res) => {
        await productDAO.deleteAll()

        res.json()
    }
}

export default product