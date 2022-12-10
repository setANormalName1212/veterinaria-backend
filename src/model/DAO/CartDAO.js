import cartDB from '../Schema/Cart.js'

class CartDAO {
    async get(id) {
        return await cartDB.findById(id)
    }

    async getAll() {
        return await cartDB.find()
    }

    async add(id, product) {
        await cartDB.updateOne({ _id: id }, { $push: { productIDs: {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: product.qty
        }}})
    }

    async take(id, product) {
        await cartDB.updateOne({ _id: id }, { $pull: { productIDs: {
            title: product
        }}})
    }

    async delete(id) {
        await cartDB.deleteOne({ _id: id})
    }
}

const cartDAO = new CartDAO()

export default cartDAO