import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://used-cars-mart-server.vercel.app/categories');
      const data = res.json();
      return data;
    }
  });

  return (
    <div className="mx-5">
      <h3 className="text-3xl text-center font-bold mb-5 sm:mb-10">Select Categories: </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {
          categories.map(category => <div key={category._id} className="card bg-base-100 shadow-xl">
            <div className="card-body items-center gap-3 text-center">
              <h2 className="card-title">{category.name}</h2>
              <p>The best used cars of {category.name} are here presented to you at a reasonable price. Click below to see all the cars unders this category.</p>
              <div className="card-actions">
                <Link
                  to={`/category/${category._id}`}
                  className="btn btn-primary"
                >Show Cars</Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Categories;
