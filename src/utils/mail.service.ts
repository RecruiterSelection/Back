import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import Mailgen from "mailgen";
import { SendEmailDto } from "./dto/send-email.dto";

const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Recrutamento e Seleção™",
    link: `http://localhost:${process.env.PORT}`,
  },
});

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject, text }: SendEmailDto) {
    await this.mailerService
      .sendMail({
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log("Email was sent successfully");
      })
      .catch(error => {
        console.log(error);
      });
  }

  async resetPasswordTemplate(
    userEmail: string,
    userName: string,
    resetToken: string,
  ) {
    const email = {
      body: {
        name: userName,
        intro: "You have requested to reset your password.",
        action: {
          instructions: "Click the button below to reset your password:",
          button: {
            color: "#22BC66",
            text: "Reset Password",
            link: `http://localhost:${process.env.PORT}/resetPassword/${resetToken}`,
          },
        },
        outro:
          "If you did not request a password reset, no further action is required on your part.",
      },
    };

    const emailBody = mailGenerator.generate(email);

    return {
      to: userEmail,
      subject: userName,
      text: emailBody,
    };
  }
}
