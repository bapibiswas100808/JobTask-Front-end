import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="background">
      <div className="navbar max-w-[1170px] mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-xl lg:text-3xl font-bold">
            Tech Point
          </Link>
        </div>
        <div className="flex-none gap-2">
          <NavLink to="/register">
            <button className="btn project-btn">Register</button>
          </NavLink>
          <NavLink to="/login">
            <button className="btn project-btn">Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
