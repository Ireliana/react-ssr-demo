import Routes from "../router";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";

const render = (req) => {
	const content = renderToString(
		<StaticRouter location={req.path}>{Routes}</StaticRouter>
	);
	return `
    <html>
        <head>
            <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/index.js"></script>
        </body>
    </html>
    `;
};
export default render;
