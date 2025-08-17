import express from "express";
import path from "path";
import { config } from "dotenv";

config();
const APP_ENV = process.env.APP_ENV;
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
	res.sendFile(path.join(`${__dirname}/templates`, "index.html"));
	console.log(`Request server by app: ${APP_ENV}, URL: ${req.url}`);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}, APP: ${APP_ENV}`);
});
