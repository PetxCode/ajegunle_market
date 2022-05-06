const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const contentModel = require("../model/contentModel");
const { image } = require("../utils/multer");
const verification = require("../utils/authorize");

router.get("/", async (req, res) => {
	try {
		const getContent = await contentModel.find();
		res.status(200).json({
			message: "success",
			data: getContent,
		});
	} catch (error) {
		res.status(500).json({
			message: err.message,
		});
	}
});

router.get("/:id", async (req, res) => {
	try {
		const getContent = await contentModel.findById(req.params.id);
		res.status(200).json({
			message: "success",
			data: getContent,
		});
	} catch (error) {
		res.status(500).json({
			message: err.message,
		});
	}
});

router.delete("/:id", verification, async (req, res) => {
	if (req.user.seller === true) {
		try {
			await contentModel.findByIdAndDelete(req.params.id);
			res.status(201).json({
				message: "deleted",
			});
		} catch (error) {
			res.status(500).json({
				message: err.message,
			});
		}
	} else {
		res.status(200).json({
			message: "You cannot carry out this Operation ",
		});
	}
});

router.post("/", verification, image, async (req, res) => {
	if (req.user.seller === true) {
		try {
			const { description, title, price, category } = req.body;

			const myImage = await cloudinary.uploader.upload(req.file.path);

			const getContent = await contentModel.create({
				description,
				title,
				price,
				category,
				image: myImage.secure_url,
				imageID: myImage.public_id,
			});

			res.status(200).json({
				message: "success",
				data: getContent,
			});
		} catch (error) {
			res.status(500).json({
				message: err.message,
			});
		}
	} else {
		res.status(200).json({
			message: "You cannot carry out this Operation ",
		});
	}
});

router.patch("/:id", verification, image, async (req, res) => {
	if (req.user.seller === true) {
		try {
			const newContent = await contentModel.findById(req.params.id);

			if (newContent) {
				const { description, title, price, category } = req.body;
				await cloudinary.uploader.destroy(newContent.avatarID);
				const myImage = await cloudinary.uploader.upload(req.file.path);

				const getContent = await contentModel.findByIdAndUpdate(
					req.params.id,
					{
						description,
						title,
						price,
						category,
						image: myImage.secure_url,
						imageID: myImage.public_id,
					},
					{ new: true }
				);

				res.status(200).json({
					message: "success",
					data: getContent,
				});
			}
		} catch (error) {
			res.status(500).json({
				message: err.message,
			});
		}
	} else {
		res.status(200).json({
			message: "You cannot carry out this Operation ",
		});
	}
});

module.exports = router;
