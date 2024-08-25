const express = require("express");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/bfhl", bfhlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
