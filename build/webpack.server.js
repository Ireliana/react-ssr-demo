const path = require("path");
const config = require("./webpack.base");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

function resolve(file) {
	return path.resolve(__dirname, "../src", file);
}

module.exports = merge(config, {
	target: "node",
	mode: "development",
	externals: [nodeExternals()],
	entry: resolve("server/index.js"),
	output: {
		filename: "server.bundle.js",
		path: resolve("../dist")
	}
});
