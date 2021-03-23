import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemsList from "./components/items-list/index";
import Detail from "./components/detail";
import Header from "./components/header";
import Info from "./components/info";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <section className="container">
          <Switch>
            <Route exact path="/">
              <Info message="Busca productos, marcas y más en la barra de busqueda." />
            </Route>
            <Route path="/items">
              <ItemsList />
            </Route>
            <Route path="/item/:id">
              <Detail />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
};

export default App;
