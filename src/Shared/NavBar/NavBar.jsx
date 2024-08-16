import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="background">
      <div className="navbar max-w-[1170px] mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-xl lg:text-3xl font-bold">
            Tech Point
          </Link>
        </div>
        <div className="flex-none gap-2">
          {!user && (
            <NavLink to="/register">
              <button className="btn project-btn">Register</button>
            </NavLink>
          )}
          {!user ? (
            <NavLink to="/login">
              <button className="btn project-btn">Login</button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button onClick={logOut} className="btn project-btn">
                Log Out
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
