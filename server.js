const express = require("express");
const app = express();
const stats = require("./express"); 

// Mount API endpoints
app.use("/api", stats.api);
app.use("/api/top-langs", stats.topLangs); 

// Default route
app.get("/", (req, res) => {
  res.send("GitHub Readme Stats running!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
