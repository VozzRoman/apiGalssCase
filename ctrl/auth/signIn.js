import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { UserModel } from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


const signIn = asyncHeandler(async(req, res) => {
	const {email, password} = req.body;
	console.log(req.body);
	const credential = await UserModel.findOne({email})
	if(!credential){
		throw createErrors(401, `Пароль або Ім'я користувача не вірне` )
	}
	const comparePassword = bcrypt.compare(password, credential.password);
	if(!comparePassword){
		throw createErrors(401, `Пароль або Ім'я користувача не вірне` )
	}

	const payload = {
		id: credential._id,
	}

	// const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:"60h"})
	const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
		expiresIn: "1m",
	 });
	 const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
		expiresIn: "1d",
	 });

	await UserModel.findByIdAndUpdate(credential._id, {accessToken, refreshToken});

res.json({
	code: 200,
	satus: "ok",
	name: credential.name,
	email,
	accessToken,
	refreshToken,

})
})

export default signIn;