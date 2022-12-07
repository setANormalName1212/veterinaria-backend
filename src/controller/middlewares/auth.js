import jsonwebtoken from 'jsonwebtoken'

const auth = (req, res, next) => {
    if(!req.cookies.user) {
        res.json({
            ERROR_AUTHORIZATION: "You dont have authorization"
        })
    } else {
        jsonwebtoken.verify(req.cookies.user, process.env.ACCESS_TOKEN, (err, user) => {
            if(err) return res.json({
                ERROR: "ERROR"
            })

            req.user = user
            next()
        })
    }
}

export default auth