import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ProductModel } from "../../models/productModel.js";
import { isValidObjectId} from "mongoose";

const findOne = asyncHeandler(async (req, res) => {
	const {id} = req.params;
	console.log(id);
	if (!isValidObjectId(id)) {
		throw createErrors(400, "invalid id");
	 }
	const product = await ProductModel.findByIdAndUpdate(id);
	if(!product){
		throw createErrors(400, "unable to find");
	}
	res.json({
		code: 200,
		staus:'ok',
		data: product,
	})
})

export default findOne;