import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileBuilder from "./pages/ProfileBuilder/ProfileBuilder";
import CardBuilderSideLayout from "./layouts/CardBuilderSideLayout";
import CardBuilder from "./pages/CardBuilder/CardBuilder";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProfileBuilder />,
    },
    {
      path: "/card-builder",
      element: <CardBuilderSideLayout />,
      children: [
        {
          path: "",
          element: <CardBuilder />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
