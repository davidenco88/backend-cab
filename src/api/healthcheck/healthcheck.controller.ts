import { Request, Response } from 'express';
import { sendMailSendGrid } from '../../auth/utils/validationMail';

export function healthCheckHandler(req: Request, res: Response) {
  res.status(200).json({
    uptime: process.uptime(),
    message: 'OK',
  });

  const dataMail = {
    to: 'david.sarriav@gmail.com',
    from: 'david.sarria@correounivalle.edu.co', // Use the email address or domain you verified above
    subject: 'Welcome to the CAB app',
    text: 'Welcome to the CAB app',
    html: '<strong>Welcome to the CAB app</strong>',
  };

  sendMailSendGrid(dataMail);
}
