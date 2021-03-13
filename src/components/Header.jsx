import { Link } from "react-router-dom";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <header className="bg-header-mobile bg-cover bg-no-repeat p-4 h-96 lg:bg-header-desktop">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl text-white font-semibold">loopstudios</h2>
          <div className="lg:hidden">
            <img
              src={hamburgerIcon}
              alt="hamburgerIcon"
              className="cursor-pointer"
              onClick={handleMenu}
            />
          </div>

          <div
            className={`bg-black absolute h-screen w-full text-white p-4 top-0 bottom-0 left-0 right-0  ${
              menu ? `block` : `hidden`
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-2xl">loopstudios</h3>
                <div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className="cursor-pointer"
                    onClick={handleMenu}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-evenly font-thin h-72 text-2xl mt-24">
                <Link to="#">About</Link>
                <Link to="#">Careers</Link>
                <Link to="#">Events</Link>
                <Link to="#">Products</Link>
                <Link to="#">Support</Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-around w-1/2 text-white font-semibold">
            <Link to="#">About</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Events</Link>
            <Link to="#">Products</Link>
            <Link to="#">Support</Link>
          </div>
        </div>

        <div className="text-white text-3xl font-light border-2 border-white p-4 mt-24 max-w-xs">
          IMMSERSIVE <br /> EXPERIENCIES <br /> THAT <br /> DELIVER
        </div>
      </div>
    </header>
  );
};

export default Header;
