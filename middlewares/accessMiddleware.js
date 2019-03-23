function accesMiddleware(req, res, next) {
    console.log(req.token,req.params.id);
    
    if (req.token.userId != req.params.id) {
        return res.status(403).json({'error': 'your not the owner'})
    }
    next()
}

module.exports = accesMiddleware;