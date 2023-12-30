import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { CallsModel } from "../../models/callsModel.js";
const getAllCalls = asyncHeandler (async (req, res) => {
	const calls = await CallsModel.find({});
	if(!calls){
		createErrors(400, "пусто");
	}
	res.json({
		code: 200,
		satus: "ok",
		data: calls,
	})
})

export default getAllCalls;