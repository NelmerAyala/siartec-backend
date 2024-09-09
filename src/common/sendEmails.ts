import { Request, Response } from "express";
// import transporter from "../config/transport";
import createTransporter from "../config/transport";
import plantillaEmail from "../common/plantillaEmail";

export const sendEmail = async (
  // req: Request
  // res: Response,
  args: any
): Promise<any> => {
  try {
    let body = await plantillaEmail(args);

    let mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: args.body.contirbutor_email,
      subject: args.body.subject_email + " - " + args.body.contirbutor_names,
      html: body,
    };

    let transporter = await createTransporter();
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: any, info: any) => {
        if (err) {
          console.log("Error " + err);
          reject({ status: 400, msg: 'Error ' + err })
        }
        console.log("data in send email: " + JSON.stringify(info))
        console.log("Email sent successfully - ok");
        resolve({ status: 200, msg: 'Correo electrónico enviado satisfactoriamente', info })
      });
    })

  } catch (error) {
    console.log({ error });
    return { error }
  }
};