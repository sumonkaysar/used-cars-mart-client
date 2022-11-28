import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import UsersTable from "../../../Shared/UsersTable/UsersTable";

const AllSellers = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ['allSellers'],
    queryFn: () => fetch('https://used-cars-mart-server.vercel.app/users?role=seller').then(res => res.json())
  });

  const handleVerifySeller = seller => {
    fetch(`http://localhost:5000/users/${seller._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({verified: true})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`${seller.name} is verified successfully`);
        refetch();
      }
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="sm:mx-10">
      <h2 className="text-3xl text-center font-semibold my-5">All Sellers</h2>
      <UsersTable
        users={allSellers}
        refetch={refetch}
        seller={true}
        handleVerifySeller={handleVerifySeller}
      />
    </div>
  );
}

export default AllSellers;
