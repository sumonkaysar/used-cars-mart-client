import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {login, loginWithProvider} = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();

  const from = location?.state?.from?.pathname || '/';

  const handleLogin = data => {
    setLoginError('');
    login(data.email, data.password)
    .then(result => {
      toast.success("Logged in successfully");
      navigate(from);
    })
    .catch(err => {
      console.error(err);
      switch (err.message.split("auth/")[1].split(")")[0]) {
        case "user-not-found":
          setLoginError("The user is not registered");
          break;

        case "wrong-password":
          setLoginError("Password is Incorrect");
          break;

        case "too-many-requests":
          setLoginError(err.message.split("(auth/")[0].split(": ")[1]);
          break;
      
        default:
          setLoginError(err.message);
          break;
      }
    });
  }

  const handleProviderLogin = () => {
    loginWithProvider(googleProvider)
    .then(result => {
      toast.success('Logged in Successfully');
      saveUser({
        name: result.user.displayName,
        email: result.user.email,
        role: 'buyer'
      });
    }).catch(err => console.error(err))
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
      if (data.userExists) {
        console.log('a');
      }else{
        getUserToken(user.email);
      }
    })
    .catch(err => console.error(err));
  }

  const getUserToken = email => {
    fetch(`https://used-cars-mart-server.vercel.app/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/');
      }
    }).catch(err => console.error(err))
  }

  return (
    <div className="mx-5">
      <form onSubmit={handleSubmit(handleLogin)} className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto shadow-xl p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="form-control w-full">
          <label htmlFor="email" className="label pb-0">Email:</label>
          <input
            id="email"
            {...register("email", { required: "Email address can't be blank" })}
            type="email"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.email && errors.email.message}</p>
        </div>
        <div className="form-control w-full">
          <label htmlFor="password" className="label pb-0">Password:</label>
          <input
            id="password"
            {...register("password", { required: "Password address can't be blank" })}
            type="password"
            className="input input-bordered w-full"
          />
          <p className="text-error font-bold">{errors.password && errors.password.message}</p>
        </div>
        <button className="btn btn-primary w-full mt-4" type="submit">Login</button>
        {loginError && <p className="text-error text-center font-bold">{loginError}</p>}
        <p className="text-sm font-semibold text-center mt-3">New to Used Car Mart? <Link className="link font-bold text-blue-500 hover:text-blue-400" to="/signup">Click here to create an account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleProviderLogin} type="button" className="btn btn-primary btn-outline w-full">Login With Google</button>
      </form>
    </div>
  );
}

export default Login;
