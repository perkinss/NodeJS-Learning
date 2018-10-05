var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'susanperkinstesting123@gmail.com',
    pass: 'CoM-ek9-Byv-ShV'
    // pass: 'ePr-4dd-o3K-HcT'
  }
});

// var mailOptions = {
//   from: 'susanperkinstesting123@gmail.com',
//   to: 'perkins.susan@gmail.com',
//   subject: 'Sending email using Node.js',
//   text: 'That was easy!'
// };

var mailOptions = {
    from: 'susanperkinstesting123@gmail.com',
    to: 'perkins.susan@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
