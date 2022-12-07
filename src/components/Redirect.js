import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const navigate = useNavigate();

  return (
    <div>
      This page does not exist. Click the button below to get back to the bingo
      board.
      <br />
      <br />
      <button onClick={() => navigate("/")} className="button">
        New bingo board.
      </button>
    </div>
  );
};
