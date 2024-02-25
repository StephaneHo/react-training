import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/books");
  };

  return (
    <>
      <h1>Page d accueil</h1>
      <p>
        Aller sur <Link to="/books">liste des livres</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>
          Aller sur liste des livres (programmatiquement)
        </button>
      </p>
    </>
  );
};
