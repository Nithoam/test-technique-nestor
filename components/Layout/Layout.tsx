import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo-nestor.png";
import { useContext } from "react";
import { Context } from "utils/context";
import ToggleButton from "components/ToggleButton";

const Layout: React.VFC<any> = ({ children }) => {
  const { state, dispatch }: any = useContext(Context);
  const { isDarkMode } = state;
  return (
    <>
      <header className="border-b border-white bg-nightBlue py-8 text-center font-monoton text-2xl font-bold tracking-wide underline">
        <ToggleButton />
        <Link href="/">
          <a>
            <Image src={logo} alt="Logo" width={300} height={100} />
          </a>
        </Link>
      </header>
      <main
        className={`${
          isDarkMode ? "bg-nightBlue text-white" : "bg-white text-nightBlue"
        } overflow-hidden`}
      >
        {children}
      </main>
      <footer className="relative bottom-0 flex w-full flex-col items-center justify-center space-y-4 border-t border-white bg-nightBlue p-4 text-white">
        <p className="text-center">
          {
            "Site réalisé par Nicolas Garilliere dans l'exercice d'un entretien technique pour la société \"Chez Nestor\""
          }
        </p>
      </footer>
    </>
  );
};

export default Layout;
