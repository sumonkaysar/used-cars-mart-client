import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarDetails from "./CarDetails/CarDetails";
import CarsBookingModal from "./CarsBookingModal/CarsBookingModal";

const Cars = () => {
  const cars = useLoaderData();
  const [bookCar, setBookCar] = useState({});

  return (
    <div>
      <h2 className="text-3xl font-semibold">{}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
        {
          cars.map(car => <CarDetails
            key={car._id}
            setBookCar={setBookCar}
            car={car}
          />)
        }
      </div>
      {
        bookCar && <CarsBookingModal
          bookCar={bookCar}
        />
      }
    </div>
  );
}

export default Cars;
