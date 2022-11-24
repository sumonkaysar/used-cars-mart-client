import { FaCheckCircle } from 'react-icons/fa';

const CarDetails = ({ car, setBookCar }) => {
  const { name, img, location, resalePrice, originalPrice, usedYears, sellerName, sellerVerified, postedTime } = car;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="-mb-2">Resale Price: <span className="font-bold">${resalePrice}</span></p>
        <p className="-mb-2">Original Price: <span className="font-bold">${originalPrice}</span></p>
        <p className="-mb-2">Location: <span className="font-bold">{location}</span></p>
        <p className="-mb-2">Years Used: <span className="font-bold">{usedYears} {usedYears.length > 1 ? 'years' : 'year'}</span></p>
        <p className="-mb-3">Seller: <span className="font-bold inline-flex items-center gap-2">{sellerName} {sellerVerified && <FaCheckCircle className='text-xl' color='#1a1aff' />}</span></p>
        <p><small>Posted on: <span className="font-bold">{postedTime}</span></small></p>
        <div className="card-actions">
          <label
            onClick={() => setBookCar(car)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >Book Now</label>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
