import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";

const updateProd = asyncHeandler(async (req, res) => {
	console.log("update");
	res.json({
		code: 200,
		staus:'ok',
	})
})



export default updateProd;