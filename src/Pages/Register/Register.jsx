import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registered Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: `${err}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // Register with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registered Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: `${err}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero bg-base-200 min-h-screen my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Register to Tech Point, a modern tech store offering the latest
              gadgets, software, and accessories. Shop cutting-edge technology
              with secure transactions, and enjoy fast delivery and excellent
              customer support.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                {/* Email */}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                {/* Password */}
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn project-btn">
                  Register
                </button>
              </div>
            </form>
            <div className="pl-10 pb-10">
              <p>
                Register with
                <button
                  onClick={handleGoogleLogin}
                  className="px-4 py-1 rounded-lg  project-btn ml-2"
                >
                  Google
                </button>
              </p>
              <p>Already Registered?</p>
              <p>
                Please
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-700 underline ml-2"
                >
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
