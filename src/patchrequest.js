import { warning } from "./warning";

export const patchrequest = async (boardBody) => {
  let itemlist = [];
  if (warning("existing")) {
    try {
      const lastBoard = await fetch("http://localhost:5000/last")
        .then((data) => {
          return data.json();
        })
        .then((item) => {
          itemlist.push(item.rows[0].id);
          itemlist.push(item.rows[0].items);
          return item.rows[0].items;
        });
      const boardResponse = await fetch(
        `http://localhost:5000/boards/${itemlist[0]}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(boardBody),
        }
      );
      const removeOldItems = await fetch(`http://localhost:5000/decrease`, {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(itemlist[1]),
      });
      const addNewItems = await fetch(`http://localhost:5000/increase`, {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(boardBody),
      });
      return true;
    } catch (err) {
      console.error(err.message);
    }
  } else {
    return false;
  }
};
