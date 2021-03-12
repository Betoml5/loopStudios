import hamburgerIcon from "../images/icon-hamburger.svg";
const Header = () => {
  return (
    <header className="bg-header-mobile bg-cover bg-no-repeat p-4 h-96">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl text-white font-semibold">loopstudios</h2>
        <div>
          <img src={hamburgerIcon} alt="" />
        </div>
      </div>

      <div className="text-white text-3xl font-light border-2 border-white p-4  mt-24">
        IMMSERSIVE <br /> EXPERIENCIES <br /> THAT <br /> DELIVER
      </div>
    </header>
  );
};

export default Header;
