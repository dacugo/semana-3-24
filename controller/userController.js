const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../secret/config');


exports.signin = async (req, res, next) => {

    try {
        const user = await models.user.findOne({where: {email: req.body.email}});
        if (user) {
            const pwIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (pwIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }, 'config.secret',{
                    expiresIn: 86400,
                });
                res.status(200).send({
                    auth: true,
                    accessToken: token,
                    
                })
            } else {
                res.status(401).send({ auth: false, accessToken: null, reason:
                    "Invalid Password!" });
            }

        } else {
            res.status(404).send('User Not Found.');
        }
        

    } catch (error) {
            console.log(error);
    }


};