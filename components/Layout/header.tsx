import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo-nestor.png";
import ToggleButton from "components/ToggleButton";

const Header: React.VFC<any> = ({ children }) => {
  return (
      <header className="border-b border-white bg-nightBlue py-8 text-center font-monoton text-2xl font-bold tracking-wide underline">
        <ToggleButton />
        <Link href="/">
          <a>
            <Image src={logo} alt="Logo" width={300} height={100} />
          </a>
        </Link>
      </header> 
  );
};

export default Header;
