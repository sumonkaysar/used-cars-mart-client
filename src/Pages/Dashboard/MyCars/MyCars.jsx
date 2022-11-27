import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [deletingCar, setDeletingCar] = useState(null);

  const { data: myCars = [], refetch } = useQuery({
    queryKey: ['myCars'],
    queryFn: () => fetch(`http://localhost:5000/cars?email=${user?.email}`).then(res => res.json())
  });

  const closeModal = () => setDeletingCar(null);

  const handlePublish = (id, name) => {
    fetch(`http://localhost:5000/cars/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({published: true})
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success(`${name} deleted Successfully`);
          refetch();
        }
      })
      .catch(err => console.error(err));
  }

  const handleDeleteCar = ({_id: id, name}) => {
    fetch(`http://localhost:5000/cars/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success(`${name} deleted Successfully`);
          refetch();
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold">My Cars</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Photo</th>
              <th>Status</th>
              <th>Publish</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              myCars.map((car, i) => <tr key={car._id}>
                <th>{i + 1}</th>
                <td>{car.name}</td>
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded">
                      <img src={car.img} />
                    </div>
                  </div>
                </td>
                <td>{car.status || 'Available'}</td>
                <td>
                  {
                    car.status !== 'Sold' && !car.published && <button
                    onClick={() => handlePublish(car._id, car.name)} className="btn btn-sm btn-primary text-white">Publish</button>
                  }
                  {
                    car.status !== 'Sold' && car.published && 'Published'
                  }
                </td>
                <td>
                  <label
                    onClick={() => setDeletingCar(car)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >Delete</label>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deletingCar && <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={<>If you delete <strong>{deletingCar.name}</strong>, it cannot be <strong>recovered</strong>.</>}
          successButton="Delete"
          successButtonClass="btn-error text-white"
          successAction={handleDeleteCar}
          modalData={deletingCar}
          closeModal={closeModal}
        />
      }
    </div>
  );
}

export default MyCars;
