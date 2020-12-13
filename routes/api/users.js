const router = require('express').Router();
const userController = require('../../controller/userController.js');
const db = require('../../models');
const bcrypt = require('bcryptjs');


router.get('/',async(req,res)=>{
    const user = await db.user.findAll();
    res.status(200).json(user);
});

router.post('/register', async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const user = await db.user.create(req.body);
    res.status(200).json(user);
});


router.post('/signin', userController.signin);

module.exports = router;