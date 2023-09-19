const transporter = require('./emailConfig');  // Atualize o caminho para onde o emailConfig.js está localizado
// faz o envio do email através do observer
class EmailObservador {
    atualizar(novoCachorro) {
        console.log("Enviando e-mail de notificação...");
        const mailOptions = {
            from: 'helpf570@gmail.com',
            to: 'joaowozniack2003@gmail.com',
            subject: 'Novo cachorro disponível para adoção!',
            text: `Um novo cachorro foi cadastrado: ${novoCachorro.nome}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
}

module.exports = EmailObservador;