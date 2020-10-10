import { readFileSync } from "fs";
import { join } from "path";

export default () => {
  //changing to __dirname fixes jest, but breaks node when ran normally
  const url = join(import.meta.url, "./somefile.txt");
  return readFileSync(url.replace("file:", ""), { encoding: "utf-8" });
};
