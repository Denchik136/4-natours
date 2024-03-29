const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8'))



exports.getAllTours = (req, res) => {

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    })
}

exports.getTour = (req, res) => {

    const id = +req.params.id

    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID"
        })
    }

    res.status(200).json({
        status: "sucess",
        data: {
            tour
        }
    })
}

exports.creatrTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tours: newTour
            }
        })
    })
}

exports.updateTour = (req, res) => {

    if (+req.params.id > tours.length) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID"
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here>'
        }
    })
}

exports.delTour = (req, res) => {

    if (+req.params.id > tours.length) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID"
        })
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
}
