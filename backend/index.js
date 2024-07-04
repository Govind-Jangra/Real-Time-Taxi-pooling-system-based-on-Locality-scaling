import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import  "./config/db.js";
import userRoutes from "./routes/user.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 9000;
import { fileURLToPath } from "url";
// apply middleware
app.use(express.json());

// cors
app.use(cors());

//for serving static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/api/v1", userRoutes);

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
// app.get("/", (req, res) => {
//   res.send("api is running");
// });

// routes


app.listen(PORT, () => {
  console.log(`Api is running on http://localhost:${PORT}`);
});
