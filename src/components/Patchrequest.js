import { warning } from "../warning";
import { useNavigate } from "react-router-dom";

export const Patchrequest = async (boardBody) => {
  //const navigate = useNavigate();

  if (warning("existing")) {
    try {
      const lastBoard = await fetch("http://localhost:5000/last")
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          const id = response.rows[0].id;
          return id;
        });

      const boardResponse = await fetch(
        `http://localhost:5000/boards/${lastBoard}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(boardBody),
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  }
};
