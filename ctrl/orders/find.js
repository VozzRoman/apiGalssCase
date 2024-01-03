import asyncHeandler from "express-async-handler";
import { isValidObjectId} from "mongoose";
import createErrors from "http-errors";
import { OrdersModel } from "../../models/orderModel.js";
const findOrder = asyncHeandler(async (req, res) => {
	const {id} = req.params;
	if (!isValidObjectId(id)) {
		throw createErrors(400, "invalid id");
	 }
	const order = await OrdersModel.findByIdAndUpdate(id);
	if(!order){
		throw createErrors(400, "unable to find");
	}
	res.json({
		code: 200,
		staus:'ok',
		data: order,
	})
})

export default findOrder;