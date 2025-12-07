import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import SocalLogin from "../../components/SocalLogin/SocalLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, loading, setLoading } = useAuth();

  const location = useLocation();
  const navgate = useNavigate();

  const form = location.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmiteHandalar = (data) => {
    console.log(data.email, data.password);

    loginUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navgate(form, { replace: "true" });
        toast("user seccessfully login");
        setLoading(false);
      })
      .catch((err) => {
        toast(err.code);
        console.log(err.code);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen  ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body border-[1px] border-solid [border-image:linear-gradient(90deg,#483ad4,#7b5aff)_1] rounded-xl p-4 ">
            <h1 className="text-5xl font-bold text-center">Login now</h1>
            <form onSubmit={handleSubmit(onsubmiteHandalar)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input  border border-[#483ad4]"
                  {...register("email")}
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input  border border-[#483ad4]"
                  {...register("password")}
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-[#483ad4] text-white mt-4">
                  Login
                </button>
                <p>
                  You don't have an account?
                  <span>
                    <Link to="/Signup" className=" text-[#483ad4] underline">
                      Sign Up
                    </Link>
                  </span>
                </p>
              </fieldset>
            </form>
            <h1 className="font-bold text-2xl text-center mb-2">Or</h1>

            <SocalLogin></SocalLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
