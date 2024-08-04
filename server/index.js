const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const connectDB = require("./config/config");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(`/api/user`, userRoute);

connectDB();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
