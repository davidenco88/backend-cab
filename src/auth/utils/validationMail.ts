import sgMail from '@sendgrid/mail';

export function sendMailSendGrid(data: sgMail.MailDataRequired) {
  const apikey = process.env.SENDGRID_API_KEY as string;
  sgMail.setApiKey(apikey);

  return sgMail.send(data);
}
