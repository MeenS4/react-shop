import "./index.scss";
import ReactDOM from "react-dom/client";

import store from "./store/store";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <h1>Your cart!</h1>,
  },
]);

const entryPoint = document.querySelector("#root");

ReactDOM.createRoot(entryPoint as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
