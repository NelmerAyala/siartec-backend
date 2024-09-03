import { Request, Response } from "express";
// import transporter from "../config/transport";
import createTransporter from "../config/transport";
import plantillaEmail from "../common/plantillaEmail";

export const sendEmail = async (
  // req: Request
  // res: Response,
  args: any
): Promise<any> => {
  let result: any
  try {
    let body = await plantillaEmail(args);

    let mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: args.body.contirbutor_email,
      subject: args.body.subject_email + " - " + args.body.contirbutor_names,
      html: body,
    };

    let transporter = await createTransporter();
    transporter.sendMail(mailOptions, function (err: any, data: any) {
      if (err) {
        console.log("Error " + err);
        result = 'Error ' + err;
        return { status: 400, msg: result }
      } else {
        console.log("Email sent successfully - ok");
        result = 'Correo electrónico enviado satisfactoriamente';
      }
    });
    return { status: 200, msg: result }
  } catch (error) {
    console.log({ error });
    return { error }
  }
};