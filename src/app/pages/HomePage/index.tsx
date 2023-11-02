import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../routes/path";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to={path.students}>Student List</Link>
      </div>
      <br />
      <div>
        <Link to={path.teachers}>Teacher List</Link>
      </div>
      <br />
      <div>
        <Link to={path.partners}>Partner List</Link>
      </div>
    </div>
  );
}

export default HomePage;
