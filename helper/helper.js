import {v4} from 'uuid';
import path, {dirname} from "path";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import dotenv from "dotenv";
import cloudinary from '../cloudinary/cloudy.js';
dotenv.config();
//Check refresh and access tokens when auth middlware start!
export const getPayloadRefreshToken = (token) => {
	return jwt.verify(token, process.env.REFRESH_SECRET_KEY);
 };
 
 export const getPayloadAccessToken = (token) => {
	return jwt.verify(token, process.env.ACCESS_SECRET_KEY);
 };

//Send Messege to Cloudibary!!
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

