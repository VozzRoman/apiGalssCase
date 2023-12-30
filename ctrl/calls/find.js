import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { CallsModel } from "../../models/callsModel.js";
const findCalls = asyncHeandler (async (req, res) => {
	const {id} = req.params;
	if(!isValidObjectId){
		throw createErrors(400, "invalid id");
	}
	const calls = await CallsModel.findById(id);
	if(!calls){
		throw createErrors(400, "unable to find");
	}
	console.log("find");
	res.json({
		code: 200,
		satus: "ok",
		data: calls,
	})
})

export default findCalls;