import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Filter by");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm, "with filter:", filter);
  };

  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="https://uploads.mjwebs.com/zHn5dwmsgWEUjEts8XRD6b5qgkXdHNWbE1rj2clM.png"
              alt="InclusiveBizHub"
              height={50}
              width={150}
              className="object-contain"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link btn btn-outline-primary"
                  to="/"
                >
                  Tax Return
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link btn btn-outline-primary" to="/abn">
                  ABN Register
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link btn btn-outline-primary" to="/smsf">
                  SMSF
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link btn btn-outline-primary" to="/listofclients">
                  List of Clients
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <div className="input-group mx-2">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {filter}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button className="dropdown-item" type="button" onClick={() => handleFilterChange("TFN")}>
                      TFN
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button" onClick={() => handleFilterChange("ABN")}>
                      ABN
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button" onClick={() => handleFilterChange("Name")}>
                      Name
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button" onClick={() => handleFilterChange("Client Code")}>
                      Client Code
                    </button>
                  </li>
                </ul>
              </div>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
