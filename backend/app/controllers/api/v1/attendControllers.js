const model = require('../../../models')

module.exports = {
    checkIn: async (req, res) => {
        try {
            let hour = new Date().getHours()
            let

            if (hour > 9) {
                return res.status(200).json({ message: 'You are late' })
            } else {
                const create = await model.Attend.create({
                    userID: req.body.userID,
                    dateNow: req.body.dateNow,
                    checkIn: req.body.checkIn
                })

                return res.status(200).json({
                    success: true,
                    error: 0,
                    message: `Check in successfully in ${req.body.dateNow}`,
                    data: create
                })
            }
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    },
    checkOut: async (req, res) => {
        try {
            let hour = new Date().getHours()
            const { checkOut } = req.body

            if (hour < 18) {
                const checking = await model.Attend.findOne({
                    where: {
                        attendID: req.body.attendID
                    }
                })
                console.log(checkOut)
                if (checking) {
                    await model.Attend.update({
                        checkOut
                    }, {
                        where: {
                            attendID: req.body.attendID
                        }
                    })
                    return res.status(200).json({ message: `Check out successfully in ${req.body.dateNow}` })
                } else {
                    res.status(404).json({ message: `You can't check out` })
                }
            } else {
                return res.status(200).json({ message: 'You are late' })
            }
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    },
    checkAbsent: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    }
}