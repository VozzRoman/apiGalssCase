import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { CallsModel } from "../../models/callsModel.js";
const updateCalls = asyncHeandler (async (req, res) => {
	const {id} = req.params;
	if(!isValidObjectId){
		throw createErrors(400, "invalid id");
	}
	const call = await CallsModel.findByIdAndUpdate(id, {...req.body}, {new: true});
	if(!call){
		throw createErrors(400, "unable to find");
	}
	console.log("update");
	res.json({
		code: 200,
		satus: "ok",
		data: call,
	})
})

export default updateCalls;