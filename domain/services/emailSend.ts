let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: '',
        pass: ''
    }
});



export default transporter
