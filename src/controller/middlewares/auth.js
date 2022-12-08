import jsonwebtoken from 'jsonwebtoken'

const auth = (req, res, next) => {
    if(!req.cookies.user) {
        res.json({
            ERROR_AUTH: "No authorized"
        })
    } else {
        jsonwebtoken.verify(req.cookies.user, process.env.ACCESS_TOKEN, (err, token) => {
            req.user = token
            next()
        })
        
    }
}

export default auth