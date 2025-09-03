import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CarDetails from "../../Cars/CarDetails/CarDetails";
import CarsBookingModal from "../../Cars/CarsBookingModal/CarsBookingModal";

const AdvertisedCars = () => {
  const [bookCar, setBookCar] = useState(null);
  const { data: cars = [], refetch } = useQuery({
    queryKey: ['cars', 'published'],
    queryFn: () => fetch(`https://used-cars-mart-server.vercel.app/cars?published=true`).then(res => res.json())
  });

  return (
    cars.length > 0 && <div className="mt-16 sm:my-20">
      <h2 className="text-3xl text-center font-bold mb-5 sm:mb-10">Most Popular Cars:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
        {
          cars.map(car => <CarDetails
            key={car._id}
            setBookCar={setBookCar}
            car={car}
          />)
        }
        {
          bookCar && <CarsBookingModal
            bookCar={bookCar}
            setBookCar={setBookCar}
            refetch={refetch}
          />
        }
      </div>
    </div>
  );
}

export default AdvertisedCars;
