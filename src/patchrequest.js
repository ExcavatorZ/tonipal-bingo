import { warning } from "./warning";

export const patchrequest = async (boardBody) => {
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
