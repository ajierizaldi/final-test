
module.exports = {
    // For HR
    getReimbursement: async (req, res) => {
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

    // For Employee
    reqReimbursement: async (req, res) => {
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