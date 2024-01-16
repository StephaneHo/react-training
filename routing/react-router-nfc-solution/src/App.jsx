import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NFComsPage } from "./pages/NFComsPage";
import { NFComDetailPage } from "./pages/NFComDetailPage";
import { NFComNewPage } from "./pages/NFComNewPage";
import { RootLayout } from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/nfcs", element: <NFComsPage /> },
      { path: "/nfcs/:id", element: <NFComDetailPage /> },
      { path: "/nfcs/new", element: <NFComNewPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
