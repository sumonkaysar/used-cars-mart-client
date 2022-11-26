import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyCars = () => {
  const { user } = useContext(AuthContext);

  const { data: myCars = [] } = useQuery({
    queryKey: ['myCars'],
    queryFn: () => fetch(`http://localhost:5000/cars?email=${user?.email}`).then(res => res.json())
  });

  const handlePublish = id => {
    
  }

  const handleDelete = id => {
    fetch(`http://localhost:5000/cars/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {

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
                    car.status !== 'Sold' && !car.published && <button className="btn btn-sm btn-primary text-white">Publish</button>
                  }
                  {
                    car.status !== 'Sold' && car.published && 'Published'
                  }
                </td>
                <td>
                  <button onClick={() => handleDelete(car._id)} className="btn btn-sm btn-error text-white">Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyCars;
