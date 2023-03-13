const model = require('../../../models');
const jwt = require('jsonwebtoken');
const { genSalt, hash, compareSync } = require('bcrypt');

const cryptPassword = async (password) => {
    const salt = await genSalt(10);
    return hash(password, salt);
}

module.exports = {
    register: async (req, res) => {
        try {
            const data = await model.User.create({
                ...req.body,
                password: await cryptPassword(req.body.password)
            });

            return res.status(200).json({
                "success": true,
                "error": 0,
                "data": data,
                "message": "User created successfully"
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
    login: async (req, res) => {
        try {
            const invalid = 'You have entered an invalid email or password';

            // check if email registered in database
            const isEmailExist = await model.User.findOne({
                where: {
                    email: req.body.email
                }
            });

            let user = isEmailExist;

            if (compareSync(req.body.password, user.password)) {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    role: user.role
                }, process.env.ACCESS_TOKEN_SECRET,
                    { expiredIn: '1d' }
                );
            }

            user = {
                userID: isEmailExist.userID, //userID
                nama_user: isEmailExist.nama_user,
                email: isEmailExist.email,
                address: isEmailExist.address,
                position: isEmailExist.position,
                roleID: isEmailExist.roleID,
            }

            return res.status(200).json({
                success: true,
                message: 'Login successfully',
                error: 0,
                data: {
                    user,
                    token
                }
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
                error: error,
                data: null,
            })
        }
    },
    getProfile: async (req, res) => {
        try {
            const user = await model.User.findOne({
                where: {
                    id: res.locals.user.id
                }
            })

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found',
                    error: 404,
                    data: null
                })
            }
            return res.status(200).json({
                success: true,
                message: 'Get profile successfully',
                error: 0,
                data: user
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