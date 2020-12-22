import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let studSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    middlename: { type: String },
    rollNumber: { type: String },
    gender: { type: String },
    dob: { type: Date },
    age: { type: Number },
    class: { type: String },
    section: { type: String },
    joining_date: { type: Date },
    fathername: { type: String },
    mothername: { type: String },
    father_mobile: { type: String },
    mother_mobile: { type: String },
    father_email: { type: String },
    mother_email: { type: String },
    father_occupation: { type: String },
    mother_occupation: { type: String },
    gaurdian: { type: String },
    address: { type: String },
    aadhar: { type: String },
    disability: { type: String },
    fee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fees' }

});

let studentSchema = mongoose.model('Students', studSchema);

export default studentSchema;