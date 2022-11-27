import { useQuery } from "@tanstack/react-query";
import UsersTable from "../AllSellers/UsersTable/UsersTable";

const AllBuyers = () => {
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ['allBuyers'],
    queryFn: () => fetch('http://localhost:5000/users?role=buyer').then(res => res.json())
  });

  return (
    <div className="sm:mx-10">
      <h2 className="text-3xl text-center font-semibold my-5">All Buyers</h2>
      <UsersTable
        users={allBuyers}
        refetch={refetch}
      />
    </div>
  );
}

export default AllBuyers;
