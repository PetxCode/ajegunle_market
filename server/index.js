const express = require("express");
const cors = require("cors");
const port = 8888;
const app = express();
require("./utils/dbConnect");

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./router/userRouter"));
app.use("/api/user", require("./otherController/userUpload"));

app.use("/api/content/", require("./otherController/contentUpload"));

app.use("/api/rating/", require("./otherController/ratingContent"));

app.listen(port, () => {
	console.log("server is now connected");
});
