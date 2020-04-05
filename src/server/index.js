import express from "express";
import { renderToString } from "react-dom/server";
import Home from "../components/Home";

const app = express();
const PORT = 4000;

app.use(express.static("../public"));
app.get("/", function(req, res) {
	res.send(`
            <html>
                <head>
                    <title>ssr</title>
                    </head>
                    <body>
                    <div id="root">${renderToString(<Home />)}</div>
                    <script src="/index.js"></script>
                </body>
            </html>
    `);
});

app.listen(PORT, () => {
	console.log(`now listening at port:${PORT}`);
});
