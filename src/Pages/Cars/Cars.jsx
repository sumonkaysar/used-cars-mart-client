import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import CarDetails from "./CarDetails/CarDetails";
import CarsBookingModal from "./CarsBookingModal/CarsBookingModal";

const Cars = () => {
  const { user } = useContext(AuthContext);
  const [bookCar, setBookCar] = useState(null);
  const { id } = useParams();
  const { data: cars = [], refetch } = useQuery({
    queryKey: ['cars', id, user?.email],
    queryFn: () => fetch(`https://used-cars-mart-server.vercel.app/categories/${id}?email=${user?.email}`).then(res => res.json())
  });

  // useEffect()

  return (
    <div className="pt-5 sm:pt-10 max-w-[1500px] mx-auto">
      <h2 className="text-3xl font-semibold">{ }</h2>
      {
        cars.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
            {
              cars.map(car => <CarDetails
                key={car._id}
                setBookCar={setBookCar}
                car={car}
              />)
            }
          </div> : <h2 className="text-4xl text-center font-bold">No car found</h2>
      }
      {
        bookCar && <CarsBookingModal
          bookCar={bookCar}
          setBookCar={setBookCar}
          refetch={refetch}
        />
      }
    </div>
  );
}

export default Cars;
