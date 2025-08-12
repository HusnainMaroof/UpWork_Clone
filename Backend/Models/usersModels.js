import mongoose from "mongoose";




const usersScheema = mongoose.Schema({
    f_name: {
        type: String,
        required: true,
    },
    l_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    terms: {
        type: String,
        required: true,
    },
    mails: {
        type: String,
    },
    otp: {
        type: String
    },
    role: {
        type: String,
        required: true
    }



}, { timestamps: true })

export const Users = mongoose.model('Users', usersScheema)
