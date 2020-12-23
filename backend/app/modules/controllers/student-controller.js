import studentSchema from '../models/student-model';
import feesSchema from '../models/fees-model';

const studentCtrl = {};

studentCtrl.registerStudent = (req, res) => {
    console.log('body+++', req.body);

    const studObj = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        middlename: req.body.middlename,
        rollNumber: req.body.rollNumber,
        gender: req.body.gender,
        dob: req.body.dob,
        age: req.body.age,
        class: req.body.class,
        section: req.body.section,
        joining_date: req.body.joining_date,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        father_mobile: req.body.father_mobile,
        mother_mobile: req.body.mother_mobile,
        father_email: req.body.father_email,
        mother_email: req.body.mother_email,
        father_occupation: req.body.father_occupation,
        mother_occupation: req.body.mother_occupation,
        gaurdian: req.body.gaurdian,
        address: req.body.address,
        aadhar: req.body.aadhar,
        disability: req.body.disability

    }

    const student = new studentSchema(studObj);
    student.save((err, result) => {
        // studentSchema.insertOne(studObj , (err,result) => {
        console.log(result, 'result');
        if (err) {
            console.log('error ocurred', err);
            res.send({ code: 300, error: err, message: 'Error in adding student' })
        } else if (result) {
            res.send({ message: 'Student added Successfully', code: 200, data: result })
        } else {
            res.send({ message: 'nothing happened', code: 800 })
        }
    })
}

studentCtrl.addFees = (req, res) => {
    console.log(req.body, '++++++++++++++++++++++++++');
    if (!req.body.termfee) {
        res.send({ message: 'Term Fee is required' });
    }
    const feeStructure = {
        donation: req.body.donation,
        termfee: req.body.termfee,
        amount_paid: req.body.amount_paid,
        balance_amount: req.body.balance_amount,
        no_of_installments: req.body.no_of_installments,
        paymentFor: req.body.paymentFor,
        student_id: req.body.student_id
    };



    const feeDet = new feesSchema(feeStructure)
    feeDet.save(async (err, result) => {
        if (err) {
            res.send({ code: 300, error: err, message: 'Error in adding Fees' })
        } else if (result) {
            await updateFeeIdInStudents(req.body.student_id, result._id);
            res.send({ message: 'Fee Details added Successfully', code: 200, data: result })
        } else {
            res.send({ message: 'nothing happened', code: 800 })
        }
    })
}

async function updateFeeIdInStudents(studentId, feeId) {
    const response = await studentSchema.updateOne({ _id: studentId }, { $set: { fee_id: feeId } });
}



studentCtrl.getStudentsByLimit = (req, res) => {
    const limitVal = Number(req.params.limit);
    studentSchema.find({}).limit(limitVal).exec((err, result) => {
        if (err) {
            res.send({ code: 300, error: err, message: 'Error in fetching students' })
        } else if (result) {
            res.send({ message: 'Success', code: 200, data: result })
        } else {
            res.send({ message: 'nothing happened', code: 800 })
        }
    })
}

studentCtrl.getFeesById = (req, res) => {
    const stud_id = req.params.student_id;
    studentSchema.findOne({ _id: stud_id }, { firstname: 1, lastname: 1, middlename: 1 }).populate('fee_id').exec((err, result) => {
        if (err) {
            res.send({ code: 300, error: err, message: 'Error in fetching fees' })
        } else if (result) {
            res.send({ message: 'Success', code: 200, data: result })
        } else {
            res.send({ message: 'nothing happened', code: 800 })
        }
    })
}

studentCtrl.updateFeesbyId = (req, res) => {
    const fees_id = req.params.fee_id;
    feesSchema.findOneAndUpdate({ _id: fees_id }, {
        $set: {
            'donation': req.body.donation,
            'termfee': req.body.termfee,
            'amount_paid': req.body.amount_paid,
            'balance_amount': req.body.balance_amount,
            'no_of_installments': req.body.no_of_installments,
            'paymentFor': req.body.paymentFor
        }
    }, { new: true }).exec((err, result) => {
        if (err) {
            res.send({ code: 300, error: err, message: 'Error in updating fees' })
        } else if (result) {
            res.send({ message: 'Success', code: 200, data: result })
        } else {
            res.send({ message: 'nothing happened', code: 800 })
        }
    })
}

studentCtrl.makePayment = (req,res) => {
    

}


export default studentCtrl;