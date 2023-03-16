const nodemailer = require('nodemailer');

const userMail = () => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'eino.ernser68@ethereal.email',
                pass: 'Y56xkQ2dfShMHKr7kq'
            }
        });

        const mailOptions = {
            from: 'eino.ernser68@ethereal.email',
            to: 'ajiemuhammad2@gmail.com',
            subject: 'Test email',
            text: 'This is a test email sent using nodemailer!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(info.response);
            }
        });
    })
}