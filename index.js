import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(bodyParser.json());

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
