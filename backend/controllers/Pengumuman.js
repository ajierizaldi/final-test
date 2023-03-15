const Pengumuman = require('../models/PengumumanModel')

module.exports = {
    getPengumuman: async (req, res) => {
        try {
            const response = await Pengumuman.findAll()
            res.json(response)
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    createPengumuman: async (req, res) => {
        const { subject, description } = req.body
        try {
            await Pengumuman.create({
                subject: subject,
                description: description
            })
            res.status(201).json({ msg: "Announcement Created !" })
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }
}