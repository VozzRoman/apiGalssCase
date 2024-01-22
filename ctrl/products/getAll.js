import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ProductModel } from "../../models/productModel.js";

const getAll = asyncHeandler(async (req, res) => {
	const products = await ProductModel.find({});
	if(!products){
		createErrors(400, "товару немає!")
	}
	
	res.json({
		code: 200,
		staus:'ok',
		products,
	})
})

export default getAll;