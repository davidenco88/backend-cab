import sgMail from '@sendgrid/mail';

export function sendMailSendGrid(data: sgMail.MailDataRequired) {
 try{
  const apiKey = process.env.SENDGRID_API_KEY as string;
  sgMail.setApiKey(apiKey);
  console.log(data);
console.log("llamando");

  return sgMail.send(data);
 }catch(e){
  console.log(e);

 }
}
