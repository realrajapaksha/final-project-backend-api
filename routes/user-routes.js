const express = require('express')
const { addUser, getUser, getAllUser, updateUser, deleteUser } = require('../controllers/userController')

const router = express.Router()

router.post('/user', addUser)
router.get('/user', getUser)
router.get('/users', getAllUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)

module.exports = {
    routes: router
}

//const db = require('../firebase/firebase');

// router.route('/')
//     .get((req, res) => {
//         (async () => {
//             try {
//                 let response = []
//                 await db.collection('users').get().then(querySnapshot => {
//                     let docs = querySnapshot.docs
//                     console.log(docs)
//                 })
//             } catch (error) {
//                 console.log(error)
//             }
//         });
//         // try {
//         //     res.json({
//         //         status: 200,
//         //         message: "Get user succesfull",
//         //     });
//         // } catch (error) {
//         //     console.log(error)
//         //     return res.status(500).send("server error");
//         // }
//     })
//     .post((req, res) => {

//     });



// module.exports = router;