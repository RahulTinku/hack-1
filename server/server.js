const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongojs = require('mongojs');
const nodemailer = require("nodemailer");

const app = express();

var port = process.env.PORT || 8080;

app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

//routes(express, app, {})

app
.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// get all todos
app.get('/api/powerpack', (req, res) => {
	// const { exec } = require('child_process');
	// exec('/Users/rahulkumar/desktop/test.sh', (err, stdout, stderr) => {
	//   if (err) {
	//     //some err occurred
	//     console.error(err)
	//   } else {
	//    // the *entire* stdout and stderr (buffered)
	//    console.log(`stdout: ${stdout}`);
	//    console.log(`stderr: ${stderr}`);
	//   }
	// });
	const shell = require('shelljs')
 	let message = shell.exec('/Users/rahulkumar/desktop/test.sh')
 	shell.echo('completed');
 	console.log('message: ',message);
 	if(message.stderr ===''){
 		res.status(200).send({
    		success: 'true'
  		})
 	}else {
 		res.status(409).send({
    		error : 'duplicate'
  		})
 	}
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  const sendMail = (user, callback) => {
	  const transporter = nodemailer.createTransport({
	    host: "smtp.office365.com",
	    port: 587,
	    secure: false,
	    auth: {
	      user: "rahul.kumar@powerschool.com",
	      pass: "Tinku_9012"
	    }
	  }); 
	  transporter.sendMail(mailOptions, callback);
	}
	console.log('user :', user);
	const mailOptions = {
	  from: `"rahul.kumar@powerschool.com"`,
	  to: `<${user.email}>`,
	  subject: "test",
	  html: "<h1>And here is the place for HTML</h1>"
	};

  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});



app.listen(port, function() {
	console.log('Server started on Port: '+ port);
});