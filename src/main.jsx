import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "/src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.Suspense fallback="loading...">
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </React.Suspense>
  </Provider>
);
