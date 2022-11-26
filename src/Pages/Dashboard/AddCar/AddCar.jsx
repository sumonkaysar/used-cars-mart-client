import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import useCheckSellerVerification from "../../../hooks/useCheckSellerVerification";

const AddCar = () => {
  const {user} = useContext(AuthContext);
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const {data: categories = []} = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('https://used-cars-mart-server.vercel.app/categories').then(res => res.json())
  });
  const [isVerified] = useCheckSellerVerification(user?.email);

  const handleAddCar = data => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if (imgData.success) {
        const date = new Date().toLocaleDateString();
        data.img = imgData.data.url;
        data.sellerName = user.displayName;
        data.sellerVerified = isVerified;
        data.postedTime = date;
        
        fetch('http://localhost:5000/addCar', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
          if (result.acknowledged) {
            toast.success(`${data.name} added successfully`);
            reset(data);
          }
        }).catch(err => console.error(err))
      }
    }).catch(err => console.error(err))
  }

  return (
    <div className="my-10 lg:my-20">
      <form onSubmit={handleSubmit(handleAddCar)} className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto shadow-xl p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Add A Car</h2>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Car name"
            {...register("name", { required: "Car name can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.name && errors.name.message}</p>
        </div>
        <div className="form-control w-full mb-4">
          <input
            placeholder="Car picture"
            {...register("image", { required: "Choose a picture" })}
            type="file"
            className="file-input w-full"
            accept="image/*"
          />
          <p className="text-error font-bold">{errors.image && errors.image.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Resale price"
            {...register("resalePrice", { required: "Resale price can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.resalePrice && errors.resalePrice.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Phone Number"
            {...register("phone", { required: "Phone number address can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.phone && errors.phone.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Location"
            {...register("location", { required: "Location can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.location && errors.location.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <select
            {...register("conditionType", { required: "Please select condition type" })}
            className="select select-bordered w-full"
          >
            <option value="">Select Condition Type</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
          <p className="text-error font-bold">{errors.conditionType && errors.conditionType.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Original price"
            {...register("originalPrice", { required: "Original price can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.originalPrice && errors.originalPrice.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Purchased Year"
            {...register("purchasedYear", { required: "Purchased year can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.purchasedYear && errors.purchasedYear.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            placeholder="Years of Used"
            {...register("usedYears", { required: "Years of Used can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.usedYears && errors.usedYears.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <select
            {...register("categoryId", { required: "Please select a category" })}
            className="select select-bordered w-full"
          >
            <option value="">Select Category</option>
            {
              categories.map(category => <option
                key={category._id}
                value={category._id}
              >{category.name}</option>)
            }
          </select>
          <p className="text-error font-bold">{errors.categoryId && errors.categoryId.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <textarea
            placeholder="Car description"
            {...register("carDescription", { required: "Car description can't be blank" })}
            type="text"
            className="textarea textarea-bordered"
          ></textarea>
          <p className="text-error font-bold">{errors.carDescription && errors.carDescription.message}</p>
        </div>
        <button className="btn btn-primary w-full mt-4" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCar;
