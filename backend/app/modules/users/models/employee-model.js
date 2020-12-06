import mongoose from 'mongoose';
const schema = mongoose.Schema;

var employeeSchema = new schema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    mobile: { type: String },
    gender: {type: String},
    address: { type: String },
    dateofbirth: { type: Object },
    joiningdate: { type: Object },
})

var employeeSchema = mongoose.model('Employee', employeeSchema);

export default employeeSchema;