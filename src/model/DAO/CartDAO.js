import cartDB from '../Schema/Cart.js'
import orderDB from '../Schema/Order.js'

class CartDAO {
    async get(id) {
        return await cartDB.findById(id)
    }

    async getAll() {
        return await cartDB.find()
    }

    async add(id, product, qty) {
        let num = 0

        await cartDB.updateOne({ _id: id }, { $push: { productIDs: {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: qty
        }}})

        const cart = await cartDB.findById(id)
        cart.productIDs.map(x => num = num + x.price * x.qty)

        await cartDB.updateOne({ _id: id }, {
            $set: { currentTotalPrice: num }
        })

        return;
    }

    async take(id, product) {
        await cartDB.updateOne({ _id: id }, { $pull: { productIDs: {
            title: product
        }}})

        return;
    }

    async buy(id) {
        const cart = await cartDB.findById(id)
        const orders = await orderDB.find()

        // create an order
        const newOrder = new orderDB({
            products: cart.productIDs,
            totalPrice: cart.currentTotalPrice,
            orderNum: orders.length
        })

        newOrder.save()

        // clear products from cart
        await cartDB.updateOne({ _id: id }, { $set: { productIDs: [] } })

        return;
    }

    async delete(id) {
        await cartDB.deleteOne({ _id: id})
    }
}

const cartDAO = new CartDAO()

export default cartDAO