import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { OrdersModel } from "../../models/orderModel.js";
const createOrder = asyncHeandler (async (req, res) => {
	const order = await OrdersModel.create({...req.body});
	if(!order){
		createErrors(400, "пусто");
	}
	res.json({
		code: 200,
		satus: "ok",
		data: order,
	
	})
})

export default createOrder;