const express = require("express");
const dotenv = require("dotenv");
const app = express();
// Setting up DotEnv
dotenv.config({ path: "./.env" });
// Establishing a connection to DB
require("./db/conn");
// For json inputs
app.use(express.json());
// Setting up routes
app.use(require("./routes/auth"));

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
