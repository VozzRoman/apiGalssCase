import {v4} from 'uuid';
import path, {dirname} from "path";
import fs from "fs/promises";
import cloudinary from '../cloudinary/cloudy.js';
// export async function getArrayImages (array, newArray){
// 	if(Array.isArray(array)){
// 		const files = array;
		
// 		files.forEach(async (file) => {
// 			let fileName = v4() + file.name; 
// 			const filePath = path.resolve("uploads", fileName);
// 			await file.mv(filePath);
// 			try {
// 				const newPath = await cloudinary.uploader.upload(filePath, {
// 					folder: "gs_prod",
// 					transformation: {
// 					  width: 1200,
// 					  crop: "scale",
// 					  quality: "auto",
// 					  fetch_format: "webp",
// 					},
// 				 });
// 				 if (await fs.stat(filePath).catch(() => false)) {
// 					await fs.unlink(filePath); // Используйте асинхронную версию fs.unlink
// 					console.log(`Файл ${filePath} успешно удален`);
// 				 } else {
// 					console.log(`Файл ${filePath} не существует`);
// 				 }
// 				 console.log("cloudy", newPath.secure_url);
// 				newArray.push(newPath.secure_url);
// 			} catch (error) {
// 				console.log(error);
// 			}
			
// 		});
	
// 	} else {
// 		const file = v4() + array.name;
// 		const filePath = path.resolve("uploads", file);
// 		newArray.push(filePath);
// 		await array.mv(filePath);
// 		if (await fs.stat(filePath).catch(() => false)) {
// 			await fs.unlink(filePath); // Используйте асинхронную версию fs.unlink
// 			console.log(`Файл ${filePath} успешно удален`);
// 		 } else {
// 			console.log(`Файл ${filePath} не существует`);
// 		 }
// 	}

// }
export async function getArrayImages(array, newArray) {
	if (Array.isArray(array)) {
	  for (const file of array) {
		 let fileName = v4() + file.name;
		 const filePath = path.resolve('uploads', fileName);
		 await file.mv(filePath);
		 try {
			const newPath = await cloudinary.uploader.upload(filePath, {
			  folder: 'gs_prod',
			  transformation: {
				 width: 1200,
				 crop: 'scale',
				 quality: 'auto',
				 fetch_format: 'webp',
			  },
			});
			
			newArray.push(newPath.secure_url);
		 } catch (error) {
			console.log(error);
		 }
		 if (await fs.stat(filePath).catch(() => false)) {
			await fs.unlink(filePath); // Используйте асинхронную версию fs.unlink
			console.log(`Файл ${filePath} успешно удален`);
		 } else {
			console.log(`Файл ${filePath} не существует`);
		 }
	  }
	} else {
	  const file = v4() + array.name;
	  const filePath = path.resolve('uploads', file);
	  await array.mv(filePath);
	  try {
		const newPath = await cloudinary.uploader.upload(filePath, {
			folder: 'gs_prod',
			transformation: {
			  width: 1200,
			  crop: 'scale',
			  quality: 'auto',
			  fetch_format: 'webp',
			},
		 });
		 newArray.push(newPath.secure_url);
	} catch (error) {
		console.log(error);
	}
	  if (await fs.stat(filePath).catch(() => false)) {
		 await fs.unlink(filePath); // Используйте асинхронную версию fs.unlink
		 console.log(`Файл ${filePath} успешно удален`);
	  } else {
		 console.log(`Файл ${filePath} не существует`);
	  }
	}
 }



export async function getSizeGrid (string, newString) {
	
	if (string) {
		const fileName = v4() + string.sizeChart.name;
		const filePath = path.resolve("uploads", fileName);
		console.log("string", filePath);
		await string.sizeChart.mv(filePath);
		try {
			const newPath = await cloudinary.uploader.upload(filePath, {
				folder: 'gs_prod',
				transformation: {
				  width: 1200,
				  crop: 'scale',
				  quality: 'auto',
				  fetch_format: 'webp',
				},
			 });
			 newString.push(newPath.secure_url);
		} catch (error) {
			console.log(error);
		}

		if (await fs.stat(filePath).catch(() => false)) {
			await fs.unlink(filePath);
			console.log(`Файл ${filePath} успешно удален`);
		 } else {
			console.log(`Файл ${filePath} не существует`);
		 }
	}
	
}

