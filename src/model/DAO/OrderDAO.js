import orderDB from '../Schema/Order.js'

class OrderDAO {
    async get(orderNum) {
        return await orderDB.findOne({ orderNum: orderNum })
    }

    async getAll() {
        return await orderDB.find()
    }
    
    async deleteAll() {
        await orderDB.deleteMany()
    }
}

const orderDAO = new OrderDAO

export default orderDAO