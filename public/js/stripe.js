import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(`${process.env.STRIPE_PUBLIC_KEY}`);

export const bookTour = async (tourId) => {
  try {
    //1) Get checkout session from API
    const session = await axios.get(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`
    );
    console.log(session);
    //2 Create checkout from + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.error(error);
    showAlert('error', err);
  }
};
