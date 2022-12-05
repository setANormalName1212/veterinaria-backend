// DAO 
import productDAO from "../model/DAO/ProductDAO.js"

const product = {
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

    getAll: async (req, res) => {
        const products = await productDAO.getAll()
    },

    add: async (req, res) => {
        const { title, price, description, stock, category, subcategory } = req.body
        const errors = []

        // fill all inputs
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

    update: (req, res) => {
        const { id } = req.params

        console.log(req.body)
        console.log(id)
        
        res.json({
            _id: id,
            ...req.body
        })
    },

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