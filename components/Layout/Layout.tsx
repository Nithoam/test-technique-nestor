import React from "react";
import { useContext } from "react";
import { Context } from "utils/context";
import Header from "./header";
import Footer from "./footer";
const Layout: React.VFC<any> = ({ children }) => {
  const { state, dispatch }: any = useContext(Context);
  const { isDarkMode } = state;
  return (
    <>
      <Header />
      <main
        className={`${
          isDarkMode ? "bg-nightBlue text-white" : "bg-white text-nightBlue"
        } overflow-hidden`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
