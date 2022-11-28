import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [] } = useQuery({
    queryKey: ['myOrders', user?.email],
    queryFn: () => fetch(`https://used-cars-mart-server.vercel.app/myOrders?email=${user?.email}`).then(res => res.json())
  });

  return (
    <div className="md:mx-8">
      <h2 className="text-3xl font-semibold text-center my-6">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {
              myOrders.map((order, i) => <tr key={order._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded">
                      <img src={order.carImg} />
                    </div>
                  </div>
                </td>
                <td>{order.carName}</td>
                <td>${order.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${order._id}`} className="btn btn-primary btn-sm">Pay</Link>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrders;
