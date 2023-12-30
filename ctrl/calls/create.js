import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { CallsModel } from "../../models/callsModel.js";
const createCalls = asyncHeandler (async (req, res) => {
	const call = await CallsModel.create({...req.body});
	if (!call) {
		throw createErrors(500, "Failed to create call");
	 }
	console.log("create");
	res.json({
		code: 200,
		satus: "ok",
		data: call,
	})
})

export default createCalls;