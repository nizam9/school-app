import mongoose from 'mongoose';
const schema = mongoose.Schema;

var userSchema = new schema({
    firstname: { type: String },
    lastname: { type: String },
    middlename: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: String },
    gender: { type: String },
    age: { type: Number },
    lastActive: { type: Date },
    created_at: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: 'false' },
    role: { type: String },
    member_in_groups: [{ type: String }]

})

var userSchema = mongoose.model('User', userSchema);

export default userSchema;