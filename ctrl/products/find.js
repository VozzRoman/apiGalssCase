import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";

const findOne = asyncHeandler(async (req, res) => {
	console.log("find");
	res.json({
		code: 200,
		staus:'ok',
	})
})



export default findOne;