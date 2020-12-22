import UserCtrl from '../controllers/user-controller';
import { Router } from 'express';

var router = new Router();
(function () {
    router.post('/user/register', UserCtrl.userRegister);
    router.post('/user/login', UserCtrl.login);
    // router.post('/student/register', UserCtrl.verify, UserCtrl.registerStudent);
    // router.post('/student/add/fees', UserCtrl.addFees);

    router.get('/user/error', UserCtrl.error);
    // router.post('/user/employee/register', UserCtrl.verify, UserCtrl.registerEmployee);
    // router.get('/user/employee/fetch', UserCtrl.verify, UserCtrl.getAllEmployees);



})();

module.exports = router;

// export default router;