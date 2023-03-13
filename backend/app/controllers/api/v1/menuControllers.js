const model = require('../../../models');

module.exports = {
    /** For HR */
    getHRMenu: async (req, res) => {
        try {
            const menus = await model.menu.findAll({
                where: {
                    role: 'HR'
                }
            })

            return res.status(200).json({
                success: true,
                error: 0,
                message: 'Get menu successfully',
                data: menus
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
    createMenu: async (req, res) => {
        try {
            const addMenu = await model.menu.create({
                ...req.body
            })

            return res.status(200).json({
                success: true,
                error: 0,
                message: 'Create menu successfully',
                data: addMenu
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

    /** For Employee */
    getEmployeeMenu: async (req, res) => {
        try {
            const menus = await model.menu.findAll({
                where: {
                    role: 'Employee'
                }
            })

            return res.status(200).json({
                success: true,
                error: 0,
                message: 'Get menu successfully',
                data: menus
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