const express = require("express");
const app = express();

//Initialize Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running..."));

app.use("/api/crypto", require("./routes/crypto"));
app.use("/api/forex", require("./routes/forex"));
app.use("/api/indexes", require("./routes/indexes"));
app.use("/api/prices", require("./routes/prices"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/symbols", require("./routes/symbols"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const https = require("https");
// const options = {
//   hostname: "financialmodelingprep.com",
//   port: 443,
//   path: "/api/v3/cryptocurrencies",
//   method: "GET"
// };

// const req = https.request(options, res => {
//   res.on("data", d => {
//     process.stdout.write(d);
//   });
// });

// req.on("error", error => {
//   console.error(error);
// });

// req.end();
