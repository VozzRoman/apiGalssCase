import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";

const createProd = asyncHeandler(async (req, res) => {
	console.log("Create");

	res.json({
		code: 200,
		staus:'ok',
	})
})



export default createProd;