import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../routes/path";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={path.students}>Student List</Link>
    </div>
  );
}

export default HomePage;
