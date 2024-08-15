import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="pl-10 pb-10">
              <p>Already Registered?</p>
              <p>
                Please
                <Link to="/login" className="text-blue-400 underline ml-2">
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
