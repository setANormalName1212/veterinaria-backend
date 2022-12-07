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
            await product.add(req.body)

            res.json({
                msg: "Product added"
            })
        }
    },

    // UPDATE or PATCH a product
    update: (req, res) => {
        const { id } = req.params

        console.log(req.body)
        console.log(id)
        
        res.json({
            _id: id,
            ...req.body
        })
    },

    // DELETE a product by ID
    delete: (req, res) => {
        const { id } = req.params
        console.log(req.params)

        res.json({
            msg: "Deleted",
            product: id
        })
    }
}

export default product