"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendMail(to: string, subject: string, body: string) {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: to,
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
