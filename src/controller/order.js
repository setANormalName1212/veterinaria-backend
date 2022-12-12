import orderDAO from '../model/DAO/OrderDAO.js'

const order = {
    index: async (req, res) => {
        res.send('order')
    },

    // SEND order
    get: async (req, res) => {
        const { orderNumber } = req.params

        const order = await orderDAO.get(orderNumber)

        if(!order) {
            res.json({
                ERROR: "order not found"
            })
        } else {
            res.json(order)
        }
    },

    // SEND ALL orders
    getAll: async (req, res) => {
        const orders = await orderDAO.getAll()

        res.json(orders)
    },

    deleteAll: async (req, res) => {
        await orderDAO.deleteAll()

        res.json()
    }
}

export default order