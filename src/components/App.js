import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import List from "./List";
import Search from "./Search";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <hr />
      <List searchTerm={searchTerm} />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;
