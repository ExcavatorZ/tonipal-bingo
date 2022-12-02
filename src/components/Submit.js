import { useNavigate } from "react-router-dom";

export const Submit = () => {
  const navigate = useNavigate();

  return (
    <div>
      Your scores have been submitted!
      <br />
      <button
        onClick={() => navigate("/")}
        style={{ margin: "20px" }}
        className="button"
      >
        New bingo board.
      </button>
      <button
        onClick={() => navigate("/boards")}
        style={{ margin: "20px" }}
        className="button"
      >
        Saved boards.
      </button>
      <button
        onClick={() => navigate("/results")}
        style={{ margin: "20px" }}
        className="button"
      >
        Leaderboards
      </button>
    </div>
  );
};
