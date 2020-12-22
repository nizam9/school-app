import UserCtrl from '../controllers/user-controller';
import studentCtrl from '../controllers/student-controller';
import { Router } from 'express';

var router = new Router();
(function () {

    router.post('/student/register', UserCtrl.verify, studentCtrl.registerStudent);
    router.post('/student/add/fees', UserCtrl.verify, studentCtrl.addFees);
    router.get('/student/get/:limit', UserCtrl.verify, studentCtrl.getStudentsByLimit);
    router.get('/student/get/fees/:student_id', UserCtrl.verify, studentCtrl.getFeesById);
    router.put('/student/update/fees/:fee_id', UserCtrl.verify, studentCtrl.updateFeesbyId);


})();

module.exports = router;

// export default router;