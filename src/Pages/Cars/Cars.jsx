import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
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
    queryFn: () => fetch(`http://localhost:5000/categories/${id}?email=${user?.email}`).then(res => res.json())
  });

  return (
    <div>
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
