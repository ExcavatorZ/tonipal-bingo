import { warning } from "./warning";

export const patch = async (boardBody) => {
  if (warning("existing")) {
    try {
      const boardResponse = await fetch("http://localhost:5000/boards/1", {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(boardBody),
      });
      console.log("tonipal kahville");
      console.log(boardResponse.status);
    } catch (err) {
      console.error(err.message);
    }
  }
};
