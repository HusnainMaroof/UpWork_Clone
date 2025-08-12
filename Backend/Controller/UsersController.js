import { sendOTP } from "../extras/OTP.js"
import { Users } from "../models/usersModels.js"
import bcrypt from "bcrypt"
import otpgenerator from "otp-generator"

export const registerUsers = async (req, res) => {


    const { f_name, l_name, email, password, country, terms, mails, role } = req.body


    if (!f_name, !l_name, !email, !password, !country, !terms, !mails, !role) {
        res.status(401)
        throw new Error('Please enter all the relavent fields')
    }


    const checkEmail = await Users.findOne({ email })

    if (checkEmail) {
        res.status(401)
        res.send("Email Already Existed Please Enter a Different Email")

    }



    const hashPassword = await bcrypt.hash(password, 10)

    let otp = otpgenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false, digits: true })

    sendOTP(email, otp)


    const createUsers = await Users.create({
        f_name, l_name, email, password: hashPassword, country, terms, mails, role, otp
    })


    res.json(createUsers)

}