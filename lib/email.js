"use strict";
var datetimeUtil = require('./datetimeUtil');

var email = {
	sendEmail : function(apikey, to, from, msg) { 
		const helper = require('sendgrid').mail;
//		console.log(apikey);
		const sendgrid = require('sendgrid')(apikey);

		const recipient = new helper.Email(to);
		const sender = new helper.Email(from);
		const subject = 'TEST MSG PI';
		var bodyStr;
		if(msg){
			bodyStr = msg;
		}
		else{
			bodyStr = 'SMS FROM RASPBERRY PI';
		}

		const body = new helper.Content('text/plain', bodyStr + ' => ' + datetimeUtil.currentDate() + ' at ' + datetimeUtil.currentTime());

		const mail = new helper.Mail(sender, subject, recipient, body);
		const request = sendgrid.emptyRequest({
		    method: 'POST',
		    path: '/v3/mail/send',
		    body: mail.toJSON(),
		});


		sendgrid.API(request, (error, response) => {
		    console.log(response.statusCode);
		    console.log(response.body);
		    console.log(response.headers);
		});
	}
};

module.exports = email;