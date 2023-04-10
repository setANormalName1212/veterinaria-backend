import productDB from '../Schema/Product.js'

class ProductDAO {
    async get(id) {
        const product = await productDB.findOne({ _id: id})

        return product
    }

    async getAll() {
        return await productDB.find()
    }

    async add(product) {
        const newProduct = new productDB(product)

        newProduct.save()

        return;
    }

    async update(id, product) {
        await productDB.updateOne({ _id: id }, product)

        return;
    }

    async delete(id) {
        await productDB.deleteOne({ _id: id })
        
        return;
    }

    async deleteAll() {
        await productDB.remove()

        return;
    }
}

const productDAO = new ProductDAO()

export default productDAO