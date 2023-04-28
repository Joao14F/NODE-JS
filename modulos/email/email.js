var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'jfranciscobratti@gmail.com',
  auth: {
    user: 'jfranciscobratti@gmail.com',
    pass: 'ifatarpbpvluqtwx'
  }
});
var mailOptions = {
  from: 'jfranciscobratti@gmail.com',
  to: 'gustavocrispimtec@gmail.com',
  subject: 'Roubei teu email',
  text: 'Hihihihihihi'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});