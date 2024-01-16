import { Link, useNavigate } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/books");
  };

  return (
    <>
      <h1 className="text-3xl text-red-200">Page d accueil</h1>

      <div></div>

      <button onClick={navigateHandler}>
        Aller sur liste des livres (programmatiquement)
      </button>
      <p></p>
    </>
  );
};
