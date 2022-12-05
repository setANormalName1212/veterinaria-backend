const product = {
    get: async (req, res) => {
        const { id } = req.params

        res.send("id")
    },
    getAll: async (req, res) => {
        res.send("all products")
    }
}

export default product