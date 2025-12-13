import React from "react";
import SocalLogin from "../../../components/SocalLogin/SocalLogin";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { imageUploade, userSave } from "../../../utils";

const SignUp = () => {
  const { createUser, setLoading, updateProfileUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const form = location.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmiteHandalar = async (data) => {
    try {
      setLoading(true);

      const imageFile = data.image[0];
      console.log(imageFile);

      const image_Url = await imageUploade(imageFile);
      console.log(image_Url);

      const userCredential = await createUser(data.email, data.password);
      console.log("Firebase user created:", userCredential.user);

      await updateProfileUser({
        displayName: data.name,
        photoURL: image_Url,
      });

      console.log("User profile updated");

      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: image_Url,
        role: data.role,
      };

      const res = await userSave(userInfo);
      console.log("User saved to DB:", res);

      toast("User successfully created");

      // 5️⃣ Navigation
      navigate(form, { replace: true });
    } catch (err) {
      console.log(err);
      toast(err.code || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen  ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body border-[1px] border-solid [border-image:linear-gradient(90deg,#483ad4,#7b5aff)_1] rounded-xl p-4 ">
            <h1 className="text-4xl font-bold text-center">Sign Up now</h1>
            <form onSubmit={handleSubmit(onsubmiteHandalar)}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input  border border-[#483ad4]"
                  {...register("name", { required: true, minLength: 3 })}
                  placeholder="Name"
                />

                {errors?.name?.type === "required" && (
                  <p className="text-red-500">name fild is required</p>
                )}
                {errors?.name?.type === "minLength" && (
                  <p className="text-red-500">
                    Name must be 3 characters long.
                  </p>
                )}

                <label className="label">Photo</label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-primary"
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-500">plice selace this photo </p>
                )}
                {/* Email field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input  border border-[#483ad4]"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors?.name?.type === "required" && (
                  <p className="text-red-500"> email fild is required</p>
                )}
                <label className="label">Choos Rore</label>
                <select
                  className="select select-primary"
                  {...register("role", { required: true })}
                >
                  {errors?.name?.type === "required" && (
                    <p className="text-red-500">required</p>
                  )}
                  <option disabled={true}>Selact Role</option>

                  <option>borrower</option>
                  <option>manager </option>
                </select>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input  border border-[#483ad4]"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                      message:
                        "Must contain both uppercase and lowercase letters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}

                <button
                  type="submit"
                  className="btn bg-[#483ad4] text-white mt-4"
                >
                  Register Now
                </button>
                <p>
                  Do you have an account?
                  <span>
                    <Link to="/login" className=" text-[#483ad4] underline">
                      Log In
                    </Link>
                  </span>
                </p>
              </fieldset>
            </form>
            <h1 className="font-bold text-2xl text-center ">Or</h1>

            <SocalLogin></SocalLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
