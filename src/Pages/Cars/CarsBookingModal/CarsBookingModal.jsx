import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const CarsBookingModal = ({ bookCar, setBookCar, refetch }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, img, resalePrice } = bookCar;

  const handleBooking = e => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const carId = form.carId.value;
    const carName = form.carName.value;
    const carImg = form.carImg.value;
    const price = Number(form.price.value);
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
      buyerName,
      buyerEmail,
      carId,
      carName,
      carImg,
      price,
      phone,
      meetingLocation
    }

    fetch('https://used-cars-mart-server.vercel.app/bookCar', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Booked Successfully');
          setBookCar(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      }).catch(err => console.error(err))
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleBooking}>
            <input
              name="carId"
              type="text"
              defaultValue={_id}
              hidden
            />
            <div className="form-control w-full  mb-2">
              <label htmlFor="buyerName" className="label">Name:</label>
              <input
                id="buyerName"
                name="buyerName"
                defaultValue={user?.displayName}
                type="text"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="form-control w-full  mb-2">
              <label htmlFor="buyerEmail" className="label">Email:</label>
              <input
                id="buyerEmail"
                name="buyerEmail"
                defaultValue={user?.email}
                type="email"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="form-control w-full  mb-2">
              <label htmlFor="carName" className="label">Car Name:</label>
              <input
                id="carName"
                name="carName"
                defaultValue={name}
                type="text"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="form-control w-full  mb-2">
              <label htmlFor="price" className="label">Price (USD):</label>
              <input
                id="price"
                name="price"
                defaultValue={resalePrice}
                type="text"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="form-control w-full  mb-2">
              <label htmlFor="phone" className="label">Phone Number:</label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full  mb-2">
              <label htmlFor="meetingLocation" className="label">Meeting Location:</label>
              <input
                id="meetingLocation"
                name="meetingLocation"
                type="text"
                className="input input-bordered w-full"
                required
              />
            </div>
            <input
              id="carImg"
              name="carImg"
              defaultValue={img}
              type="text"
              hidden
            />
            <div className="">
              <button className="btn btn-primary" type="submit">Book</button>
              <label htmlFor="booking-modal" className="btn btn-outline ml-3">Cancel</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarsBookingModal;
