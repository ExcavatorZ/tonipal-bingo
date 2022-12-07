import "./index.css";
import { Randomizer } from "./components/Randomizer";
import { Leaderboard } from "./components/Leaderboard";
import { Submit } from "./components/Submit";
import { Reset } from "./components/Reset";
import { Header } from "./components/Header";
import { Boards } from "./components/Boards";
import { Redirect } from "./components/Redirect";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Randomizer />,
        },
        {
          path: "results",
          element: <Leaderboard />,
        },
        {
          path: "submit",
          element: <Submit />,
        },
        {
          path: "reset",
          element: <Reset />,
        },
        {
          path: "boards",
          element: <Boards />,
        },
        {
          path: "*",
          element: <Redirect />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
