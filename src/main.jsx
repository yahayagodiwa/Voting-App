// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./assets/components/Register.jsx";
import Voters from "./assets/components/Voters.jsx";
import Update from "./assets/components/Update.jsx";
import Vote from "./assets/components/Vote.jsx";
import TotalVotes from "./assets/components/TotalVotes.jsx";
import VotingContext from "./assets/components/VotingContext.jsx";
import LayOut from "./assets/components/LayOut.jsx";
const router = createBrowserRouter([
  {
  path: "/",
  element: <LayOut />,
  children: [
    { index: true, element: <App /> },
      { path: "/register", element: <Register /> },
      { path: "/users", element: <Voters /> },
      { path: '/update/:id', element:<Update />},
      {path: '/vote', element: <Vote />},
      {path: '/total', element: <TotalVotes />}
  ]
}
  
]);
createRoot(document.getElementById("root")).render(
  <VotingContext>
    <RouterProvider router={router} />
  </VotingContext>
);
