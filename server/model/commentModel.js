const mongoose = require("mongoose");
const commentModel = mongoose.Schema(
	{
		message: {
			type: String,
		},
		user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
		content: { type: mongoose.Schema.Types.ObjectId, ref: "contents" },
	},

	{ timestamps: true }
);

module.exports = mongoose.model("comments", commentModel);
