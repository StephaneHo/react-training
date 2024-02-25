import { RootLayout } from "./RootLayout";

const AppLayout = ({ show }) => {
  return <>{show && <RootLayout />}</>;
};
