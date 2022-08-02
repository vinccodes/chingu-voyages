
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

    return res.status(status).json({
        "Error": status,
        "message": error.message
    })
}

module.exports = errorHandler