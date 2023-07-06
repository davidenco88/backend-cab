import { Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY as string;
const stripe = new Stripe(secretKey, { apiVersion: '2022-11-15' });

export async function makePaymentHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const { amount, paymentMethod } = req.body;

  try {
    const { id, card } = paymentMethod;

    const payment = await stripe.paymentIntents.create({
      amount,
      payment_method: id,
      currency: 'usd',
      description: 'Compra de prueba en el top-v29',
    });

    const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

    if (confirmPayment.status !== 'succeeded') {
      return res.status(400).json({ message: 'No se pudo realizar el pago' });
    }

    return res.status(200).json(confirmPayment);

  } catch (error) {
    console.log('🚀 error:', error);
    return res.status(500).json({ message: error });
  }

  // return res.status(200).send('Payment made successfully');
}
