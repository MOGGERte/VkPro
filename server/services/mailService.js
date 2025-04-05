import nodemailer from 'nodemailer';

class MailService {
  transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.OAUTH_USER,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter
      .sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: `Verify your email for ${process.env.API_URL}`,
        text: '',
        html: `
      <div>
        <h1>To verify your email address, please follow the link</h1>
        
        <a href="${link}">${link}</a>
      </div>
      `
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new MailService();
