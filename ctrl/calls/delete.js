import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { CallsModel } from "../../models/callsModel.js";
import {isValidObjectId} from "mongoose";
const deleteCalls = asyncHeandler (async (req, res) => {
	const {id} = req.params
	if (!isValidObjectId(id)) {
		throw createErrors(400, "invalid id");
	 }
	const call = await CallsModel.findByIdAndDelete(id);
	if(!call){
		throw createErrors(400, "unable to find");
	}

	console.log("deleteCalls");
	res.json({
		code: 200,
		satus: "ok",
		data: call,
	})
})

export default deleteCalls;