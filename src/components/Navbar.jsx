import React from "react";
import { Link } from "react-router-dom";
import { IoLogoNoSmoking } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="flex justify-between text-2xl border-b border-gray-300 p-5 bg-black text-white">
      <div className="flex items-center">
        <Link to="/">
          <IoLogoNoSmoking />
        </Link>
        <nav className="flex items-center gap-6 pl-6 font-semibold">
          <Link to="/">HOME</Link>
          <Link to="goal">목표 설정</Link>
          <Link to="stat">흡연 일지</Link>
        </nav>
      </div>
      <div>
        로그인
      </div>
    </header>
  );
};

export default Navbar;
