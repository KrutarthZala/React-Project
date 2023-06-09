import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import "./styles.css";

const MatchDetails = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [match, setMatch] = useState({});

  useEffect(() => {
    fetch("https://6309a9ba324991003279d592.mockapi.io/Allmatches/" + params.id)
      .then((mac) => {
        return mac.json();
      })
      .then((mac) => {
        setMatch(mac);
      });
  }, []);

  return (
    <>
      <table class="table w-25 t1" align="center">
        <tr>
          <td colspan="3" align="center">
            <strong>Match Details</strong>
          </td>
        </tr>
        <tr>
          <td>Team 1 Name</td>
          <td>:</td>
          <td>{match.Team1Name}</td>
        </tr>
        <tr>
          <td>Team 2 Name</td>
          <td>:</td>
          <td>{match.Team2Name}</td>
        </tr>
        <tr>
          <td>Winner Name</td>
          <td>:</td>
          <td>{match.WinnerName}</td>
        </tr>
        <tr>
          <td>Match Date</td>
          <td>:</td>
          <td>{match.MatchDate}</td>
        </tr>
        <tr>
          <td>Team 1 Image</td>
          <td>:</td>
          <td>
            <img
              src={match.Team1Image}
              alt="asdf"
              width="250vh"
              height="140vh"
            />
          </td>
        </tr>
        <tr>
          <td>Team 2 Image</td>
          <td>:</td>
          <td>
            <img
              src={match.Team2Image}
              alt="asdf"
              width="250vh"
              height="140vh"
            />
          </td>
        </tr>
        <tr>
          <td align="right">
            <Link to={"../match"}>
              <button type="button" class="btn btn-outline-success">
                Back
              </button>
            </Link>
          </td>
          <td align="center">
            <button
              class="btn btn-outline-success"
              onClick={() => {
                navigate("/matchdetails/edit/" + params.id);
              }}
            >
              Edit
            </button>
          </td>
          <td align="left">
            <button
              class="btn btn-outline-success"
              onClick={() => {
                fetch(
                  "https://6309a9ba324991003279d592.mockapi.io/Allmatches/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((mac) => {
                  navigate("/match");
                });
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default MatchDetails;
