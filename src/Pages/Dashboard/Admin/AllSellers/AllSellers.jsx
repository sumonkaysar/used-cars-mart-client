import { useQuery } from "@tanstack/react-query";
import UsersTable from "./UsersTable/UsersTable";

const AllSellers = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ['allSellers'],
    queryFn: () => fetch('http://localhost:5000/users?role=seller').then(res => res.json())
  });

  return (
    <div className="sm:mx-10">
      <h2 className="text-3xl text-center font-semibold my-5">All Sellers</h2>
      <UsersTable
        users={allSellers}
        refetch={refetch}
      />
    </div>
  );
}

export default AllSellers;
