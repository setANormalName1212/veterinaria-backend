import cartDB from '../Schema/Cart.js'

class CartDAO {
    async get(id) {
        await cartDB.findOne({ _id: id})
    }

    async addProduct(id, product) {
        await cartDB.updateOne({ _id: id }, { $push: { productIDs: {
            id: product.id,
            qty: product.qty
        }}})
    }

    async delete(id) {
        await cartDB.deleteOne({ _id: id})
    }
}

const cartDAO = new CartDAO()

export default cartDAO