import ReactDOM from "react-dom/client";
import "./index.scss";

import { Provider } from "react-redux";
import store from "./store/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage } from "./pages";
import { HomePage } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const entryPoint = document.querySelector("#root");

ReactDOM.createRoot(entryPoint as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
