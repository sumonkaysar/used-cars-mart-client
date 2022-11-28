import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const Checkout = ({ bookedCar }) => {
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const { price } = bookedCar;

  useEffect(() => {
    fetch('https://used-cars-mart-server.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret))
    .catch(err => console.error(err));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setCardError(error.message);
    } else {
      setCardError('');
    }
  }

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4'
              },
            },
            invalid: {
              color: '#9e2146'
            },
          },
        }}
      />
      {
        cardError && <p className="text-error font-bold text-center mt-2">{cardError}</p>
      }
      <button className="btn btn-primary w-full mt-5" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
    </form>
  );
}

export default Checkout;
