const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config(); // ✅ MUST (ye missing tha)

const connectDB = require("./config/db");

// DEBUG
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5009;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});