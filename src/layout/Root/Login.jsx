import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // alert("log in successfull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
        // alert("please register before log in");
      });
  };

  return (
    <div className=" bg-base-200 w-[400px] ml-100 ">
      <div className="bg-base-100 shadow-2xl">
        <div className="card-body  rounded-[10px]">
          <h1 className="text-4xl font-bold">Login your account</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
             {
              error &&  <p className="text-red-500">{error}</p>
             }
              </div>
              <button className="btn btn-neutral mt-4 w-full w-full">
                Login
              </button>
              <p className="flex gap-2 justify-center">
                Dont’t Have An Account ?
                <Link className="text-[red]" to="/auth/register">
                  {" "}
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
