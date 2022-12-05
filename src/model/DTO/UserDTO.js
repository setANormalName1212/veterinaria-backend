class UserDTO {
    constructor(fullName, email, cart, locked, orders) {
        this.fullName = fullName,
        this.email = email,
        this.locked = locked,
        this.cart = cart,
        this.orders = orders
    }
}