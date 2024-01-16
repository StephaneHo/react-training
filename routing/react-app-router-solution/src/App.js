import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Books } from "./pages/Books";
import { RootLayout } from "./pages/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Books2 } from "./pages/Books2";
import { BookDetail } from "./pages/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail />,
      },

      {
        path: "/books2",
        element: <Books2 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
