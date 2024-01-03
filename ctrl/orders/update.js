import asyncHeandler from "express-async-handler";
import { isValidObjectId} from "mongoose";
import createErrors from "http-errors";
import { OrdersModel } from "../../models/orderModel.js";
const updatOrder = asyncHeandler(async (req, res) => {
	const {id} = req.params;
	if (!isValidObjectId(id)) {
		throw createErrors(400, "invalid id");
	 }
	const order = await OrdersModel.findByIdAndUpdate(id, {...req.body}, {new: true});
	if(!order){
		throw createErrors(400, "unable to find");
	}
	res.json({
		code: 200,
		staus:'ok',
		data: order,
	})
})

export default updatOrder;