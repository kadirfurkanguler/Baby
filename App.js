import React from "react";
import HomeScreen from "./src/pages/Home";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
