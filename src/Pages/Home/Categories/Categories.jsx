import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Categories = () => {
  const {data: categories = []} = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('categories.json');
      const data = res.json();
      return data;
    }
  });

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Select Categories: </h3>
      <div className="tabs tabs-boxed justify-center">
        {
          categories.map(category => <Link
          key={category._id}
            to={`/category/${category._id}`}
            className="tab"
          >{category.name}</Link>)
        }
      </div>
    </div>
  );
}

export default Categories;
