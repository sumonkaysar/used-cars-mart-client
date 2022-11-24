import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const CarsBookingModal = ({bookCar}) => {
  const {user} = useContext(AuthContext);
  const {name, resalePrice} = bookCar;

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <input defaultValue={user?.displayName} type="text" className="input input-bordered w-full mb-2" disabled />
          <input defaultValue={user?.email} type="email" className="input input-bordered w-full mb-2" disabled />
          <input defaultValue={name} type="text" className="input input-bordered w-full mb-2" disabled />
          <input defaultValue={`$${resalePrice}`} type="text" className="input input-bordered w-full mb-2" disabled />
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsBookingModal;
