const express = require('express')
const router = express.Router()

router.route('/')
    .get((req, res) => {
        try {
            res.json({
                status: 200,
                message: "Get user succesfull",
            });
        } catch (error) {
            console.log(error)
            return res.status(500).send("server error");
        }
    })
    .post((req, res) => {

    });



module.exports = router;