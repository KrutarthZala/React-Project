import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="./Home">
            <img
              src="https://i.pinimg.com/736x/fd/67/fe/fd67fef56ec44ccfeb7aaa55c40a6876.jpg"
              alt="asdf"
              width="100"
              height="80"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="./Home">
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{ margin: "5px" }}
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="./About">
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{ margin: "5px" }}
                  >
                    About
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="./Contact">
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{ margin: "5px" }}
                  >
                    Contact
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="./match">
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{ margin: "5px" }}
                  >
                    All Matches
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
