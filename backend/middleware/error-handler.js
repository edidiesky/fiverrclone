const NotFound = (req, res, next)=> {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
    
}

const errorHandler =(err, req, res, next)=> {
    const statuscode = res.statusCode === 200? 500:res.statusCode
    const errMessage = err.message
    res.status(statuscode)
    res.json({
        message:errMessage,

    })
}

export {
	errorHandler,
	NotFound
}