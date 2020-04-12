import express from "express";
import render from "./utils";
const app = express();
const PORT = 4000;

app.use(express.static("../public"));
app.get("*", function (req, res) {
	res.send(render(req));
});

app.listen(PORT, () => {
	console.log(`now listening at port:${PORT}`);
});
