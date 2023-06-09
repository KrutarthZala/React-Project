import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AddMatch() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://6309a9ba324991003279d592.mockapi.io/Allmatches/" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table align="center" className="mb-3 mt-3">
        <tr>
          <td>Enter Team 1 Name</td>
          <td>:</td>
          <td>
            <input
              value={data.Team1Name}
              onChange={(e) => {
                setData({ ...data, Team1Name: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Team 2 Name</td>
          <td>:</td>
          <td>
            <input
              value={data.Team2Name}
              onChange={(e) => {
                setData({ ...data, Team2Name: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Winner Team Name</td>
          <td>:</td>
          <td>
            <input
              value={data.WinnerName}
              onChange={(e) => {
                setData({ ...data, WinnerName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Date</td>
          <td>:</td>
          <td>
            <input
              value={data.MatchDate}
              onChange={(e) => {
                setData({ ...data, MatchDate: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Team 1 Image URL</td>
          <td>:</td>
          <td>
            <input
              value={data.Team1Image}
              onChange={(e) => {
                setData({ ...data, Team1Image: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Team 2 Image URL</td>
          <td>:</td>
          <td>
            <input
              value={data.Team2Image}
              onChange={(e) => {
                setData({ ...data, Team2Image: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Profile Image URL</td>
          <td>:</td>
          <td>
            <input
              value={data.ProfileImage}
              onChange={(e) => {
                setData({ ...data, ProfileImage: e.target.value });
              }}
              type="text"
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
          <td align="center" colSpan="2">
            <button
              class="btn btn-outline-success"
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://6309a9ba324991003279d592.mockapi.io/Allmatches/" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/match");
                  });
                } else {
                  fetch(
                    "https://6309a9ba324991003279d592.mockapi.io/Allmatches",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/match");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Add  "}
              Match
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
