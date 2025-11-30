import {Wine, Columns4, Plus, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function MenuMobile() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-15 bg-white border-t shadow-xl md:hidden z-50 px-6">
      <ul className="flex justify-between items-center h-full">

        {/* Accueil / Catalogue */}
        <li className="flex-1 text-center">
          <Link
            to="/"
            className={`flex flex-col items-center ${
              isActive("/") ? "text-red-950 font-semibold" : "text-red-900 opacity-70"
            }`}
          >
            <Wine className="w-7 h-7" />
            <span className="text-xs mt-1">Catalogue</span>
          </Link>
        </li>

        {/* Mes Celliers */}
        <li className="flex-1 text-center">
          <Link
            to="/celliers"
            className={`flex flex-col items-center ${
              isActive("/celliers") ? "text-red-950 font-semibold" : "text-red-900 opacity-70"
            }`}
          >
            <Columns4 className="w-7 h-7" />
            <span className="text-xs mt-1">Celliers</span>
          </Link>
        </li>

        {/* Bouton central — Nouveau */}
         <li className="flex-1 text-center">
       <Link
         to="/cellier/creer"
          className={`flex flex-col items-center ${
          isActive("/cellier/creer") ? "text-red-950 font-semibold"  : "text-red-900 opacity-70"
       }`}
       >
      <Plus className="w-8 h-8" />
        <span className="text-xs mt-1">Ajouter</span>
      </Link>
    </li>

      

        {/* Compte */}
        <li className="flex-1 text-center">
          <Link
            to="/connexion"
            className={`flex flex-col items-center ${
              isActive("/compte") ? "text-red-950 font-semibold" : "text-red-900 opacity-70"
            }`}
          >
            <User className="w-7 h-7" />
            <span className="text-xs mt-1">Compte</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
