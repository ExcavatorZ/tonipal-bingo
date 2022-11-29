import { warning } from "./warning";

export const patch = () => {
  if (warning("existing")) {
    console.log("tonipal kahville");
  }
};
