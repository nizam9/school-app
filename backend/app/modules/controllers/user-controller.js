
import userSchema from '../models/user-model';
import studentSchema from '../models/student-model';
import feesSchema from '../models/fees-model';
import passport from 'passport';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
var secrets = require('../../../config/keys');
require('../../../services/passport');
const UserCtrl = {};

UserCtrl.login = (req, res, next) => {
    passport.authenticate('local', { failureRedirect: '/api/v1/user/error' }, (err, user, info) => {
        const token = jwt.sign({
            expiresIn: 1,
            data: user,
        }, secrets.jwt_secret_key);

        res.send({
            message: info.message,
            user: (info.code === 200) ? ({ _id: user._id, email: user.email, expiresIn: 1, token: token }) : null,
            code: info.code,
        });
    })(req, res, next);
}

UserCtrl.error = (req, res) => {
    console.log('inside errorrrrrrrrrrrrrr')
    res.send({ status: 401, message: 'Invalid Credentials 123' })
}


UserCtrl.userRegister = (req, res) => {
    console.log('inside register', req.body);
    if (req.body.type === 'admin') {
        var userDet = new userSchema({
            name: 'admin',
            email: 'admin@gmail.com',
            password: 'admin'
        });
    }
    // const userDet = new userSchema({
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     password: req.body.password
    // });
    userDet.save((error, result) => {
        if (result) {
            res.send({ code: 200, result: result, message: 'User Profile Created Successfully' })
        } else {
            res.send({ code: 300, error: err, message: 'Error ocurred while creating user' })
        }
    })

}

UserCtrl.addFees = (req, res) => {
    console.log(req.body, '-----------------')
}




// UserCtrl.getAllEmployees = (req, res) => {
//     employeeSchema.find().exec((err, results) => {
//         if (!err) {
//             res.send({ message: 'success', code: 200, data: results })
//         } else {
//             res.send({ message: 'failed to fetch employees', error: err, code: 300 })
//         }
//     })
// }

//verify middleware function to check if correct token is sent in header of request for protected routes
UserCtrl.verify = (req, res, next) => {
    try {
        const token = req.headers['x-access-token'].split(' ')[1];
        const decoded = jwt.verify(token, secrets.jwt_secret_key);
        req.UserData = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: error
        });
    };
};

export default UserCtrl;

// ps -ef|grep node
//sudo kill ports