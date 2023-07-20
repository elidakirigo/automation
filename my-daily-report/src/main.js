const nodemailer = require("nodemailer"); 

(async function run(){
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
	  // TODO: replace `user` and `pass` values from <https://forwardemail.net>
	  user: 'elidakirigo@gmail.com',
	  pass: 'sxgfgpmzhsnwzqlq'
	}
  });

	console.log('Running my daily report...');
})()