const express = require('express');
const router = express.Router();
// const db = require("../models");



//post your code and info
//checks DB to see if exists, and if it does then do the post route
// and execute send email function
router.post('/activate', (req, res) => {

    //if req.params.code ===
    // db.records.find( { req.body.key: { $exists: true } } )
    //method="POST" action="/api/students/">

    // db.keydb.update({
    //         alreadyUsed: true,
    //         email: req.params.email,
    //         firstName: req.params.firstName,
    //         lastName: req.params.lastName

    //     }, {
    //         where: {
    //             key: req.params.key
    //         }
    //     })
    //     .then(() => {
    //         console.log("processed");
    //         res.json({message: 'Your account has been activated. Please check your email.'})
    //     },
    //     function () {
    //         res.send("Your activation code is either incorrect or has been used already. Please try again or contact jkorengold@sunsetlearning.com to troubleshoot.");
    //     });
})

module.exports = router;

