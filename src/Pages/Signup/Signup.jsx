import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const { signup, updateUser } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signupError, setSignupError] = useState('');

  const handleSignup = data => {
    console.log(data);
    setSignupError('');
    signup(data.email, data.password)
      .then(result => {
        toast.success('User created Successfully');
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            saveUser({
              name: data.name,
              email: data.email,
              role: data.role
            })
          })
      })
      .catch(err => {
        console.error(err);
        switch (err.message.split("auth/")[1].split(")")[0]) {
          case "email-already-in-use":
            setSignupError("The user is already registered");
            break;

          default:
            setSignupError(err.message)
            break;
        }
      });
  }
  
  const saveUser = (user) => {
    fetch('https://used-cars-mart-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
    })
    .catch(err => console.error(err));
  }
  
  return (
    <div className="mx-5">
      <form onSubmit={handleSubmit(handleSignup)} className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto shadow-xl p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Create Account</h2>
        <div className="form-control w-full mb-3">
          <input
            id="name"
            placeholder="Your name"
            {...register("name", { required: "Name can't be blank" })}
            type="text"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.name && errors.name.message}</p>
        </div>
        <div className="form-control w-full mb-3">
          <input
            id="email"
            placeholder="Email"
            {...register("email", { required: "Email address can't be blank" })}
            type="email"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.email && errors.email.message}</p>
        </div>
        <div className="form-control w-full">
          <input
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password address can't be blank" })}
            type="password"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.password && errors.password.message}</p>
        </div>
        <div className="sm:flex gap-8 mt-4 mb-1">
          <p className="mb-2 sm:mb-0">I want to be a</p>
          <div className="sm:flex gap-7">
            <div className="form-control w-full flex-row gap-1 mb-1 sm:mb-0">
              <input
                type="radio"
                id="buyer"
                className="radio radio-primary"
                {...register("role")}
                value="buyer"
                defaultChecked
              />
              <label htmlFor="buyer">Buyer</label>
            </div>
            <div className="form-control w-full flex-row gap-1">
              <input
                type="radio"
                id="seller"
                className="radio radio-primary"
                {...register("role")}
                value="seller"
              />
              <label htmlFor="seller">Seller</label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary w-full mt-4" type="submit">Signup</button>
        {signupError && <p className="text-error text-center font-bold">{signupError}</p>}
      </form>
    </div>
  );
}

export default Signup;
