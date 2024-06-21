import React, { useContext } from 'react';
import { HiMenuAlt4, HiUserCircle } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // adjust the path as necessary
import logo from "../../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="w-full flex justify-between items-center p-4">
      <div className="flex-initial">
        <Link to="/" className="text-white">
          <img src={logo} alt="logo" className="w-50 cursor-pointer" />
        </Link>
      </div>
      <div className="flex md:flex-[0.5] justify-end items-center">
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center">
          {userData ? (
            <>
              <li className="mx-4 cursor-pointer flex items-center">
                <HiUserCircle fontSize={24} className="text-white mr-2" />
                {userData.name}
              </li>
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={handleLogout}>
                Logout
              </li>
            </>
          ) : (
            <>
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                <Link to="/login" className="text-white">Sign-In</Link>
              </li>
              <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                <Link to="/register" className="text-white">Sign-Up</Link>
              </li>
            </>
          )}
        </ul>
        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              {userData ? (
                <>
                  <li className="text-xl w-full my-2 flex justify-between items-center">
                    {userData.name}
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                  </li>
                  <li className="w-full my-2 cursor-pointer" onClick={handleLogout}>Logout</li>
                </>
              ) : (
                ["Market", "Exchange", "Tutorials", "Wallets"].map(
                  (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    {title}
  </li>
);

export default Navbar;
