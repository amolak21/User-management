import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store"; // Import the default export
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
