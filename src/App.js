import React from "react";
import { Provider } from "react-redux";
import Products from "./Products";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Products<mark>R</mark>us</h1>
        </header>
        <div class="products-header">
          <h1>Products for sale</h1>
        </div>
        <Products />
      </div>
    </Provider>
  );
}

export default App;
