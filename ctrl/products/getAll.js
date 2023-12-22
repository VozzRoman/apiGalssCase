import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";

const getAll = asyncHeandler(async (req, res) => {
	console.log("get");
	res.json({
		code: 200,
		staus:'ok',
	})
})



export default getAll;