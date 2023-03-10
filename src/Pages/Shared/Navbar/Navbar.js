import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const [theme, setTheme] = React.useState('light');
  
  const { user, logOut } = useContext(AuthContext);

  console.log(user)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><a>About Us</a></li>
            <li><a>Appointment</a></li>
          </ul>
        </div>
        <Link to="/" className="normal-case font-bold text-xl">U C A R E</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>

        </ul>
      </div>


      <div className="navbar-end">
        {user?.uid ?
          <>
            <Link to="/dashboard" className="ml-3 btn btn-error font-thin">Dashboard</Link>

            <Link onClick={handleLogOut} className="ml-3 btn btn-accent font-thin">Log Out</Link>

          </>

          :
          <Link to="/login" className="btn btn-success font-thin">Login</Link>

        }
                  <input onClick={toggleTheme} type="checkbox" className="toggle ml-3"  />

      </div>
    </div>
  )
}

export default Navbar