const model = require('../../../models')

module.exports = {
    create: async (req, res) => {
        try {
            const create = await model.Announcement.create({
                ...req.body
            })

            return res.status(200).json({
                success: true,
                error: 0,
                message: 'Create announcement successfully',
                data: create
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "message": error.message,
                "error": error,
                "data": null
            })
        }
    },
    findAll: async (req, res) => {
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
    findById: async (req, res) => {
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
    update: async (req, res) => {
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
    delete: async (req, res) => {
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
}