import { Schema, model } from "mongoose";
// import Joi from "joi";

const ordersSchema = new Schema({
	city: {type: String, required: true},
	code: {type: String, required: true},
	department: {type: String, required: true},
	color: {type: String, required: true},
	name: {type: String, required: true},
	secondName: {type: String, required: true},
	phone: {type: String, require: true},
	size: {type: String, required: true},
	price: {type: String, required: true},
	product: {type: String, required: true},
},
{versionKey: false, timestamps: true}
);

export const OrdersModel = model("order", ordersSchema);