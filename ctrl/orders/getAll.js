import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { OrdersModel } from "../../models/orderModel.js";

const getAllorders = asyncHeandler (async (req, res) => {
	const orders = await OrdersModel.find({});
	if(!orders){
		createErrors(400, "пусто");
	}
	res.json({
		code: 200,
		satus: "ok",
		data: orders,
	})
})

export default getAllorders;