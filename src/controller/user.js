const user = {
    get: async (req, res) => {
        const { id } = req.params
        
        res.send(`${id}`)
    },
    getAll: async (req, res) => {
        res.send("all user")
    },
    add: async (req, res) => {
        res.send("add")
    },
    put: async (req, res) => {
        res.send("update")
    },
    delete: async (req, res) => {
        res.send("delete")
    }
}

export default user