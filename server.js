// server.js
import "dotenv/config";
import express from "express";


import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";

const app = express();
const router = express.Router();

// Mount routes
router.get("/", statsCard);
router.get("/pin", repoCard);
router.get("/top-langs", langCard);
router.get("/wakatime", wakatimeCard);
router.get("/gist", gistCard);

app.use("/api", router);


app.get("/", (req, res) => {
  res.send("GitHub Readme Stats server running!");
});

// Listen on Render port or fallback
const PORT = process.env.PORT || 9000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
