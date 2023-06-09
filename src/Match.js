import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Match() {
  const [match, setMatches] = useState([]);
  useEffect(() => {
    fetch("https://6309a9ba324991003279d592.mockapi.io/Allmatches")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMatches(res);
      });
  }, []);

  const foramtedMatches = match.map((mac) => {
    return (
      <>
        <div class="card col-md-2 p-2 m-3" id="card1">
          <img
            src={mac.ProfileImage}
            class="card-img-top"
            alt="asdf"
            height="110vh"
          />
          <div class="card-body">
            <h5 class="card-title" align="center">
              {mac.Team1Name}
            </h5>
            <h5 class="card-title" align="center">
              VS.
            </h5>
            <h5 class="card-title" align="center">
              {mac.Team2Name}
            </h5>
            <Link to={"../matchdetails/" + mac.id}>
              <button type="button" class="btn btn-primary" align="center">
                View Full Details
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Link to={"../addmatch"}>
        <button
          type="button"
          class="btn btn-primary"
          style={{ float: "right" }}
        >
          + Add New Match
        </button>
      </Link>
      <div class="container">
        <div className="row ">{foramtedMatches}</div>
      </div>
    </>
  );
}

export default Match;
