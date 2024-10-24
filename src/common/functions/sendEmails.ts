import createTransporter from "../../config/transport";
import resetPassword from "../templates-emails/resetPassword";
import updateCalculationFactor from "../templates-emails/updateCalculationFactor";

export const sendEmail = async (
  args: any
): Promise<any> => {
  let body: string;
  try {
    switch (args.template) {
      case 'resetPassword':
        body = await resetPassword(args);
        break;
      case 'updateCalculationFactor':
        body = await updateCalculationFactor(args);
        break;
      default:
        console.log("template not found");
        break;
    }

    let mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: args.destination_emails,
      subject: args.subject_email,
      html: body,
    };

    let transporter = await createTransporter();
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: any, info: any) => {
        if (err) {
          console.log("Error " + err);
          reject({ status: 400, msg: 'Error ' + err })
        }
        console.log("Data in send email: " + JSON.stringify(info))
        console.log("Email sent successfully - ok");
        resolve({ status: 200, msg: 'Correo electrónico enviado satisfactoriamente', info })
      });
    })

  } catch (error) {
    console.log({ error });
    return { error }
  }
};