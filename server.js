import "dotenv/config";
import express from "express";

// Import API routes
import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";

const app = express();

// Root test route
app.get("/", (req, res) => {
  res.send("GitHub Readme Stats server is running!");
});

// Mount API routes exactly as expected by GitHub Readme Stats
app.get("/api", statsCard);
app.get("/api/pin", repoCard);
app.get("/api/top-langs", langCard);
app.get("/api/wakatime", wakatimeCard);
app.get("/api/gist", gistCard);

// Listen on Render port
const PORT = process.env.PORT || 9000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
