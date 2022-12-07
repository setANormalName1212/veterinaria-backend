import cartDB from '../Schema/Cart.js'

class CartDAO {
    async get(id) {
        await cartDB.findOne({ _id: id})
    }

    async add(id, product) {
        await cartDB.updateOne({ _id: id }, { $push: { products: {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: product.qty
        }}})
    }

    async takeOut(id, product) {
        await cartDB.updateOne({ _id: id }, { $pull: { productIDs: {
            id: product.id
        }}})
    }

    async delete(id) {
        await cartDB.deleteOne({ _id: id})
    }
}

const cartDAO = new CartDAO()

export default cartDAO