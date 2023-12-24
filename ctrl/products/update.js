import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { getArrayImages, getSizeGrid } from "../../helper/helper.js";
import { ProductModel } from "../../models/productModel.js";
import {isValidObjectId} from "mongoose";

const updateProd = asyncHeandler(async (req, res) => {
	const {id} = req.params;
	if (!isValidObjectId(id)) {
		throw createErrors(400, "invalid id");
	 }
	const pathImages = [];
	const pathNavImages = [];
	const pathSizeChart = [];
	    // Проверяем наличие ожидаемых файлов в req.files
		 if (!req.files || !req.files.images || !req.files.navImages) {
			return res.status(400).json({
			  code: 400,
			  status: 'error',
			  message: 'Missing required files.',
			});
		 }
		await getSizeGrid(req.files, pathSizeChart);
		await getArrayImages(req.files.images, pathImages);
		await getArrayImages(req.files.navImages, pathNavImages);
		console.log(pathNavImages);
		console.log(pathImages);

		 const product = await ProductModel.findByIdAndUpdate(id, {
			...req.body,
			sizeChart: pathSizeChart.toString(),
			images: pathImages,
			navImages: pathNavImages,
		 })
		 if(!product){
			throw createErrors(400, "network problem");
		 }
		 res.json({code: 200, status:'ok', data : product})
})



export default updateProd;