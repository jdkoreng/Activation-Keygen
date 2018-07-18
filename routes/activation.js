const express = require('express');
const router = express.Router();
// const db = require("../models");


 var EmailThat = function (studentEmail) {
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
        to:		`SLI Student <${studentEmail}>`,
        cc:      "Jeff <jkorengold@sunsetlearning.com>",
        subject:	"Welcome to neXT 365"
     };
    
     // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function(err, message) { console.log(err || message); });
    

}


//post your code and info
//checks DB to see if exists, and if it does then do the post route
// and execute send email function
router.post('/activate', (req, res) => {

    db.codes.find( { [req.body.key]: { $exists: true } } )
    db.codes.update({
            alreadyUsed: true,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName

        }, {
            where: {
                key: req.body.key
            }
        })
        .then(() => {
            if(err) throw err;

            console.log("processed");
            EmailThat(db.codes.email);
            res.json({message: 'Your account has been activated. Please check your email.'})
        }).catch((err) => res.send("Your activation code is either incorrect or has been used already. Please try again or contact jkorengold@sunsetlearning.com to troubleshoot." + err));

        

})

module.exports = router;

