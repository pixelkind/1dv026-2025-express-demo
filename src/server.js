import express from "express";
import expressLayouts from "express-ejs-layouts";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { router } from "./routes/router.js";

const directoryFullName = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", join(directoryFullName, "views"));

app.set("layout", join(directoryFullName, "views", "layouts", "default"));
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(expressLayouts);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
