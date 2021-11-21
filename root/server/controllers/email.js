const Email = require('../models/Email')
const nodemailer = require('nodemailer')

//create email

const main = async function(recipient){
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: '',
            pass: PROCESS.ENV.userPass
        }

    });

    const mailOptions = {
        from:'"Gen Z Codes" <test.genzcodes@gmail.com> ',
        to: recipient,
        subject:'',
        text: '',
        html: ''
    };

    let sentmail= await transport.sendMail(mailOptions)
    sentmail.then(()=> console.log(`Message sent successfully ${info.messageId}`)).catch(()=> console.log(`error`))

}

main.then(()=>console.log("Message sent: %s", info.messageId)).catch(()=>console.error)

