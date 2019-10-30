console.log("routes.js");
const router = require("express").Router();
const axios = require("axios");
require("dotenv");



router.route("/api/translate").post((req, res) => {
    console.log("Translate that homie.")
    
    if (req.body.text && req.body.convertTo) {
        const text = req.body.text
        const changeTo = req.body.convertTo
        console.log({"Text":req.body.text})
        axios.get("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20191030T143949Z.8b963a0eedce0e26.b0a0e9f9a8083d1350574e6316e93a8c10ff7af7&text=this is the text")
            .then((result) => {
                if (result.data.code === 200) {
                    const detectedLang = result.data.lang
                    translateText(detectedLang,changeTo,text,(response)=>{
                        res.json({"Translation":response})
                        console.log(response)
                    });
                }
                else if(result.data.code !== 200){
                    res.json({
                        "Error":"Api Call Status Code Was Not 200" ,
                        "Error-Code": result.data.code
                    });
                }
            }).catch(err => {
                console.log(err.message)
                res.json({
                    "Error": "There was a problem with the the call to YANDEX api inorder to detect the language",
                    "Error": err.message
                })
            })
    }
    else {
        console.log("No Text Field Included")
        res.json({
            "Error": "Text object was not included ",
            "Error-Message": "You must send the requested translation inquiry to the database through with the key of text ex: { text : value }"
        });

    }
});

const translateText = (lang,convertTo,text, cb)=>{
    axios.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191030T143949Z.8b963a0eedce0e26.b0a0e9f9a8083d1350574e6316e93a8c10ff7af7&text="+text+"&lang="+lang+"-"+convertTo).then(data=>{
            return cb(data.data.text[0])
            console.log({"Translation":data.data.text[0]})
    })
}


module.exports = router


