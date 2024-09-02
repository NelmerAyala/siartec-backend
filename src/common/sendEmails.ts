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
      subject: process.env.SUBJECT_EMAIL + " - " + args.body.contirbutor_names,
      html: body,
 
    };

    let transporter = await createTransporter();
    transporter.sendMail(mailOptions, function (err: any, data: any) {
      if (err) {
        console.log("Error " + err);
        result = 'Error ' + err;
      } else {
        console.log("Email sent successfully - ok");
        result = 'Email sent successfully';
      }
    });

    console.log({ body: result });
    return { body: result }
  } catch (error) {
    console.log({ error });
    // res.status(500).json({ errors: { msg: "Contacte al Administrador." } });
    return { error }
  }
};