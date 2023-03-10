import React from "react";

const Footer: React.VFC<any> = ({ children }) => {
  return (
    <footer className="relative bottom-0 flex w-full flex-col items-center justify-center space-y-4 border-t border-white bg-nightBlue p-4 text-white">
        <p className="text-center">
        {
            "Site réalisé par Nicolas Garilliere dans l'exercice d'un entretien technique pour la société \"Chez Nestor\""
        }
        </p>
    </footer>
  );
};

export default Footer;