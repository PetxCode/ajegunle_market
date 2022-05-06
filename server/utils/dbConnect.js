const mongoose = require("mongoose");
const url = "mongodb://localhost/marketPlace";

mongoose.connect(url).then(() => {
	console.log("Database now connected...!");
});
