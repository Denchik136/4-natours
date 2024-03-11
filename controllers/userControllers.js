const fs = require('fs');
// const users = JSON.parse(fs.readFileSync(`./${__dirname}/dev-data/data/users.json`, 'utf-8'))

exports.getAllUsers = (req, res) => {

    res.status(500).json({
        status: 'error',
        message: "This route is not yet defined",

    })

    // res.status(200).json({
    //     status: 'success',
    //     requestedAt: req.requestTime,
    //     results: users.length,
    //     data: {
    //         user
    //     }
    // })
}

exports.creatrUser = (req, res) => {

    res.status(500).json({
        status: 'error',
        message: "This route is not yet defined",

    })
}

exports.getUser = (req, res) => {

    res.status(500).json({
        status: 'error',
        message: "This route is not yet defined",

    })
}
exports.updateUser = (req, res) => {

    res.status(500).json({
        status: 'error',
        message: "This route is not yet defined",

    })
}
exports.delUser = (req, res) => {

    res.status(500).json({
        status: 'error',
        message: "This route is not yet defined",

    })
}