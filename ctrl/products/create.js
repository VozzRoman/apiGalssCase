import asyncHeandler from "express-async-handler";
import { ProductModel } from "../../models/productModel.js";
import {getArrayImages, getSizeGrid} from "../../helper/helper.js";

const createProd = asyncHeandler(async (req, res) => {
	const pathImages = [];
	const pathNavImages = [];
	const pathSizeChart = [];


   //  Проверяем наличие ожидаемых файлов в req.files
    if (!req.files || !req.files.images || !req.files.navImages) {
      return res.status(400).json({
        code: 400,
        status: 'error',
        message: 'Missing required files.',
      });
    }
		//Получаем фотки с фронта на сервер, удаляем с сервера и кладем на Клаудінарій
		await getSizeGrid(req.files, pathSizeChart);
		await getArrayImages(req.files?.images, pathImages)
		await getArrayImages(req.files?.navImages, pathNavImages);
	

		const product = await ProductModel.create(
			{...req.body, sizeChart: pathSizeChart.toString(), images: pathImages, navImages: pathNavImages});
				res.json({code: 200, status:'ok', data : product})
	

})

export default createProd;