const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const connectDB = require("./config/config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(`/api/user`, userRoute);

connectDB();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
