const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const verify = require("../utils/authorize");
const { image } = require("../utils/multer");
const ratingModel = require("../model/ratingModel");
const contentModel = require("../model/contentModel");
const userModel = require("../model/userModel");

router.post("/:id/rate/:contentID/", verify, async (req, res) => {
	try {
		const { count } = req.body;
		const userData = await contentModel.findById(req.params.contentID);

		const ratingData = new ratingModel({ count });

		ratingData.user = userData;
		ratingData.save();

		userData.rating.push(ratingData);
		userData.save();

		res.status(201).json({
			status: "rated",
			data: ratingData,
		});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
});

module.exports = router;
