console.log('Run Nodemailer')
const nodemailer = require("nodemailer");
require('dotenv').config()

const { MAIL_SERVICE,
    MAIL_HOST,
    MAIL_PORT,
    MAIL_USER,
    MAIL_PASSWORD,
    MAIL_TLS } = process.env

var transporter = nodemailer.createTransport({
    service: MAIL_SERVICE,
    host: MAIL_HOST,
    port: MAIL_PORT,
    // secure: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD
    },
    // tls: {
    //     ciphers: MAIL_TLS
    // }
});

var mailOptions = {
    from: MAIL_USER,
    to: 'titeufh1@gmail.com',
    subject: 'Mon premier mail avec nodemailer',
    html: `
        <div>
            <h4> Mon premier mail </h4>
        </div>
    `
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        callback(err, info);
        console.log('END ERR')
    }
    else {
        callback(null, info);
        console.log('END INFO', info)
    }
    transporter.close();
});

