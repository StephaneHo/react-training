import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";
import { useMatch } from "react-router-dom";
export const RootLayout = () => {
  const match = useMatch("/books/books2");
  console.log("match", match);

  return (
    <>
      {!match && <MainNavigation />}
      <Outlet />
    </>
  );
};
