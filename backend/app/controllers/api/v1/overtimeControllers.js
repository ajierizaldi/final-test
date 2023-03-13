const model = require('../../../models')
const redis = require('../../../../config/redis')

module.exports = {
    /** For HR */
    getOvertime: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    },


    /** For Employee */
    reqOvertime: async (req, res) => {
        try {
            const ownRole = await model.User.findOne({
                where: {
                    role: "employee"
                }
            })

            if (ownRole) {
                const createOvertime = await model.Overtime.create({
                    ...req.body
                })
            }

            return res.status(200).json({
                "success": true,
                "message": "Overtime request has been sent",
                "error": null,
                "data": createOvertime
            })
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