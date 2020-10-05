const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const nodemailer = require('nodemailer')
require('dotenv').config()



// test
exports.testCollable = functions.https.onCall((data, context) => {
    functions.logger.log('testCollable data: ', data);
    return { message: `Function callable work`, userData: data }
})

//send email
exports.sendEmail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        let transporter = nodemailer.createTransport({
            host: 'poczta.o2.pl',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        functions.logger.log('Before return request.body: ', request.body)
        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.TO,
            subject: 'studio-www contact form',
            text: `Wiadomość wysłana z studio-www.com z contact form: \nImię: ${request.body.name} \nEmail: ${request.body.email} \nWiadomość: ${request.body.message}`
        };

        transporter.sendMail(mailOptions)
            .then(res => {
                functions.logger.log('Email sent: ', res);
                response.status(200).send({ message: 'succes', respMessage: res })
                return { message: res }
            })
            .catch(err => {
                functions.logger.log('Email error: ', err)
                response.status(400).send({ message: 'error', errorMessage: err })
                throw new functions.https.HttpsError('aborted', err)
            })
    })
})
