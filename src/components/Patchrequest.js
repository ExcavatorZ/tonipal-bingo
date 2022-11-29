import { warning } from "../warning";
import { useNavigate } from "react-router-dom";

export const Patchrequest = async (boardBody) => {
  //const navigate = useNavigate();

  if (warning("existing")) {
    try {
      const lastBoard = await fetch("http://localhost:5000/last").then(
        (data) => {
          return data.json();
        }
      );
      console.log(lastBoard);
      console.log(lastBoard.fields);
      console.log(lastBoard.fields[0]);
      console.log(lastBoard.values);
      const boardResponse = await fetch("http://localhost:5000/boards/1", {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(boardBody),
      });
    } catch (err) {
      console.error(err.message);
    }
  }
};
