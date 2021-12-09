import React from "react";
import { Home } from "../components";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function HomeContainer() {
  return (
    <Home>
      <Link to="/">
        <Home.TopButton>Go Back</Home.TopButton>
      </Link>
      <Home.Title>
        <Home.Pane>
          WELCOME To <Home.Span>Bank</Home.Span>
        </Home.Pane>
      </Home.Title>

      <Home.Pane />
      <Home.Pane />
      <Home.Pane />
      <Home.Pane />
      <Home.Pane />

      <Home.Footer>
        <Link to={ROUTES.AllCustomers}>
          <Home.Button>All Customers</Home.Button>
        </Link>
        <Link to={ROUTES.TransforsHistory}>
          <Home.Button>Transaction History</Home.Button>
        </Link>
      </Home.Footer>
    </Home>
  );
}
