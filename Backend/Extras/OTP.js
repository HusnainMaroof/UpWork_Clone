
import nodemailer from "nodemailer"
export const sendOTP = (email, otp) => {

    let transpoter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.ADIMN_EMAIL,
            pass: process.env.EMAIL_PASS
        }
    })


    let mailOption = {
        from: "husnainmaroof95@gmail.com",
        to: email,
        subject: "OTP Verification",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #e6f0fa; color: #2c3e50;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1); padding: 25px; text-align: center; border-bottom: 2px solid #ffeaa7;">
                <h1 style="margin: 0; color: #fff; font-size: 28px; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);">OTP Verification</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px; text-align: center;">
                <h2 style="color: #1a252f; font-size: 22px; margin-bottom: 25px; font-weight: 600;">Verify Your Account</h2>
                <p style="color: #6c757d; font-size: 16px; margin-bottom: 30px; line-height: 1.6;">
                    Thank you for choosing us! Use the One-Time Password (OTP) below to verify your account. This code is valid for the next 10 minutes.
                </p>
                <div style="background: linear-gradient(90deg, #e8f5e9, #f9e7fe); padding: 20px; border-radius: 10px; display: inline-block; margin-bottom: 25px; border: 2px solid #ff9f43;">
                    <span style="color: #2e7d32; font-size: 28px; font-weight: bold; letter-spacing: 2px;">${otp}</span>
                </div>
                <p style="color: #6c757d; font-size: 14px; margin-bottom: 20px; line-height: 1.5;">
                    If you didn’t request this OTP, please ignore this email or contact our support team at <a href="mailto:support@example.com" style="color: #ff6b6b; text-decoration: none;">support@example.com</a>.
                </p>
                <p style="color: #6c757d; font-size: 12px; font-style: italic;">
                    Sent at 11:09 PM PKT, August 01, 2025.
                </p>
            </td>
        </tr>
    </table>
</body>
</html> `
    }


    transpoter.sendMail(mailOption, (error, info) => {

        if (error) {
            console.log(error);

        } else {
            console.log("Mail Sended Successfuly");

        }
    })



}