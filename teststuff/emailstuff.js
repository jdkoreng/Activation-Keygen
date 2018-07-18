
module.exports = function (studentEmail) {
    var email 	= require("emailjs");
    var server 	= email.server.connect({
       user:    "sunsetlearningwithamazon", 
       password:"Sunset1212", 
       host:    "smtp.gmail.com",
       ssl:     true
    });
    
    
    
    var message	= {
        text:	"Welcome to SLI's neXT Community! Within 24 hours your account will be active, and you will gain access to your package's Video Reference Library, our Instructor-Led neXTpertise Mentoring Sessions and our technical Discussion Boards! *If you're having trouble getting into the neXT Community, please contact us at 303.729.1048 or jkorengold@sunsetlearning.com. Your email address will be your login, and your password will be set to 'sunsetstudent123' until you change it (highly recommended)", 
        from:	"Jeff <SunsetLearningWithAmazon@gmail.com>", 
        to:		`SLI Student <jeffreykorengold@gmail.com>`,
        cc:      "Jeff <jkorengold@sunsetlearning.com>",
        subject:	"Welcome to neXT 365"
     };
    
     // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function(err, message) { console.log(err || message); });
    

}
