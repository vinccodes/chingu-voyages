
const errorHandler = (error, req, res, next) => {
    // Log Error
    console.log(`Error ${error.message}`)
    const status = error.status || 400 


    if (error.name === "ValidationError"){
        return res.status(400).json({
            status: res.status,
            message: error.message
        })
    }
    else if (error.name === "JsonWebTokenError"){
        return res.status(400).json({
            status: res.status,
            message: "Error invalid token"
        })
    }
    else if (error.name === "TokenExpiredError") {
        return res.status(401).json({
            status: res.status,
            message: "token expired"
        })
    }

    return res.status(status).json({
        "Error": status,
        "message": error.message
    })
}

module.exports = errorHandler