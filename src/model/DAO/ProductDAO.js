import productDB from '../Schema/Product.js'

class ProductDAO {
    async get(id) {
        return await productDB.findOne({ _id: id})
    }

    async getAll() {
        return await productDB.find()
    }

    async add(product) {
        const newProduct = new productDB(product)

        newProduct.save()

        return;
    }

    async delete(id) {
        await productDB.deleteOne({ _id: id })
        
        return;
    }
}

const productDAO = new ProductDAO()

export default productDAO