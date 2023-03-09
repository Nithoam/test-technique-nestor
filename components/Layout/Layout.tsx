import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo-nestor.png";

const Layout: React.VFC<any> = ({ children }) => {
  return (
    <>
      <header className="bg-nightBlue py-8 text-center font-monoton text-2xl font-bold tracking-wide underline ">
        <Link href="/"><a><Image src={logo} alt="Logo" width={300} height={100} /></a></Link>
      </header>
      <main className="overflow-hidden">{children}</main>
      <footer className="relative bottom-0 flex w-full flex-col items-center justify-center space-y-4 bg-nightBlue p-4 text-white">
        <div>&copy; Nicolas Garilliere</div>
        <p className="text-center">
          {
            "Site réalisé dans dans l'exercice d'un entretien technique pour la société \"Chez Nestor\""
          }
        </p>
      </footer>
    </>
  );
};

export default Layout;
