import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique:true,
        required:true
    },
    phoneNumber: {
        type: Number,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required:true
    },  
    role: {
        type: String,
        enum: ['student','recruiter'],
        required:true
    },
    profile: {
        bio:{type:String},
        skills: [{type:String}],
        resume: {type:String},
        resumeOriginalName: {type: String},
        company: {type: mongoose.Schema.Types.ObjectId, ref:'Company'},
        profilePhoto: {
            type: String,
            default: ""
        }
    },
}, {timestamps:true}); 

const User = new mongoose.model('User', userSchema);

export default User;