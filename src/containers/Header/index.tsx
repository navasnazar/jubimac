import Image from "next/image";
import jubimacLogo from "@/assets/images/logo.svg";
import {
  CartIcon,
  CustomerSupportIcon,
  hamburgerMenuIcon,
  SearchIcon,
  UsersIcon,
} from "@/assets/icons/NavBar";
import Navbar from "@/components/Navbar";
const Header = () => {
  return (
    <>
    <header className="w-full px-14 py-[14.5px] hidden  lg:flex flex-row justify-between items-center bg-[#fbded3] border-b border-[#BA8A5B33] ">
        <Image src={jubimacLogo} alt="Jubimac Logo" />
        <Navbar/>
        <div className="flex flex-row justify-end items-center gap-2.5">
            <span>{SearchIcon}</span>
            <span>{CustomerSupportIcon}</span>
            <span>{UsersIcon}</span>
            <div className="flex flex-row justify-start items-center gap-2">
                <span>{CartIcon}</span>
                <p>Cart (0)</p>
            </div>
        </div>
    </header>
    <header className="w-full p-5 flex lg:hidden flex-between items-center bg-[#fbded3] ">
      <div className="w-1/2 flex flex-row justify-start items-center">
        <Image
          src={jubimacLogo}
          className="object-contain"
          alt="Jubimac Logo"
        />
      </div>
      <div className="w-1/2 flex flex-row justify-end gap-4 items-center">
        <span>{UsersIcon}</span>
        <span>{CartIcon}</span>
        <span>{hamburgerMenuIcon}</span>
      </div>
    </header>
    </>
  );
};

export default Header;
