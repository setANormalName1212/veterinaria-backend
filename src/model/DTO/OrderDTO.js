class OrderDTO{
    constructor(id, products, totalPrice, orderNum, paymentStatus) {
        this.id = id,
        this.products = products,
        this.orderNum = orderNum,
        this.paymentStatus = paymentStatus,
        this.totalPrice = totalPrice
    }
}