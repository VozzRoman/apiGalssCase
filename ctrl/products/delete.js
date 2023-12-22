import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";

const deleteProd = asyncHeandler(async (req, res) => {
	console.log("delete");

	res.json({
		code: 200,
		staus:'ok',
	})
})



export default deleteProd;