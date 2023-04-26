import React from "react";
import { Link } from "react-router-dom";
import { IoLogoNoSmoking } from "react-icons/io";
import LoginButton from "./ui/LoginButton";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {user, login, logout} = useAuthContext();
  return (
    <header className="flex justify-between text-xs lg:text-lg  border-b mb-10 border-gray-300 p-5 bg-black text-white">
      <div className="flex items-center">
        <Link to="/" className="hover:text-gray-400">
          <IoLogoNoSmoking />
        </Link>
        <nav className="flex items-center gap-2 lg:gap-6 pl-3 lg:pl-6 font-semibold">
          <Link to="/" className="hover:text-gray-400">HOME</Link>
          <Link to="goal" className="hover:text-gray-400">목표 설정</Link>
          <Link to="stat" className="hover:text-gray-400">금연 일지</Link>
        </nav>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        {user && <p className="">금연왕 🏆 {user.displayName}</p>}
        {!user && <LoginButton onClick={login} text="로그인" />}
        {user && <LoginButton onClick={logout} text="로그아웃" />}
      </div>
    </header>
  );
};

export default Navbar;
