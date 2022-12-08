const index = (req, res) => {
    res.json(req.user)
}

export default index