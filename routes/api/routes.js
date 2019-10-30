console.log("routes.js")
const router = require("express").Router()

router.route("/api/translate").get((req , res)=>{
    console.log("translate that homie")
});


module.exports = router


