import React from "react";
import FormContainer from "./containers/form";
import { Home, AllCustomers, TransactionHistory } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormContainer />} />
      </Routes>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
      <Routes>
        <Route path={ROUTES.AllCustomers} element={<AllCustomers />} />
      </Routes>
      <Routes>
        <Route
          path={ROUTES.TransforsHistory}
          element={<TransactionHistory />}
        />
      </Routes>
    </Router>
  );
}

export default App;
