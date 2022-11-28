import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import Checkout from "./Checkout";

const stripePromise = loadStripe('pk_test_51M99KBKjuEIgFRkoBjLi6ZYaptJihswqbM3DZ6rVNABRbqA3bZ6LuZBw4O8AYv299nSfDzmpg4ox0EpQDZHMzgJB00Dd5siE8A');

const Payment = () => {
  const bookedCar = useLoaderData();
  const { carName, price } = bookedCar;

  return (
    <div className="pt-10 mx-5">
      <div className="card md:w-[600px] shadow-xl mx-auto bg-white">
        <div className="card-body">
          <h3 className="card-title justify-center text-3xl text-center">Payment for {carName}</h3>
          <p className="text-center">Price: <strong>${price}</strong></p>
          <Elements stripe={stripePromise}>
            <Checkout
              bookedCar={bookedCar}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default Payment;
