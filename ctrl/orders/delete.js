import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { OrdersModel } from "../../models/orderModel.js";

const deleteOrder = asyncHeandler (async (req, res) => { 
	const {id} = req.params;
	if (!isValidObjectId(id)) {
		throw createErrors(400, "invalid id");
	 }
	const order = await OrdersModel.findByIdAndDelete(id);
	if(!order){
		createErrors(400, "unable to find");
	}
	res.json({
		code: 200,
		satus: "ok",
		data: order,
	})
})

export default deleteOrder;