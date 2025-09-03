import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./Categories.css";

const img = "https://i.ibb.co/6WxWqKh/unknown.jpg";

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
    <div className="mx-5 pt-16" id="categories">
      <h3 className="text-3xl text-center font-bold mb-5 sm:mb-10">Select Categories: </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {
          categories.map(category => <div key={category._id} className="card category bg-base-100 shadow-xl image-full before:translate-y-[101%] overflow-hidden hover:before:translate-y-0 before:transition">
            <div className="dark-layer w-full h-full bg-[#00000095] z-40"></div>
            <figure><img src={category.img || img} alt={category.name} /></figure>
            <h2 className="text-3xl font-bold text-white category-name justify-center items-center w-full h-full flex z-50">{category.name}</h2>
            <div className="card-body items-center justify-center gap-3 text-center translate-y-[101%] transition">
              <h2 className="card-title text-2xl">{category.name}</h2>
              <p className="flex-grow-0">The best used cars of {category.name} are here presented to you at a reasonable price. Click below to see all the cars unders this category.</p>
              <div>
                <Link
                  to={`/category/${category._id}`}
                  className="btn bg-green-600 hover:bg-green-500"
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
