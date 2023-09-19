const nodemailer = require('nodemailer');
// permissão para acesso do email do remetente
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'helpf570@gmail.com',
        pass: 'ttvm atwt wkcc dwxy'
    }
});
module.exports = transporter;