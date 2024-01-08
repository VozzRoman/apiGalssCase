import asyncHeandler from "express-async-handler";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { UserModel } from "../../models/userModel.js";
// import updateToken from "./updateToken.js";
dotenv.config();
const refresh = asyncHeandler (async(req, res) => {
	const {refreshToken: token} = req.body
	const {id} = jwt.verify(token, process.env.REFRESH_SECRET_KEY);

	const user = await UserModel.findOne({refreshToken: token});
	console.log(user);
	if(!user){
		throw createError(403, "Invalid refreshToken");
	}
	const accessToken = jwt.sign({id}, process.env.ACCESS_SECRET_KEY, {
		expiresIn: "1m",
	 });
	 const refreshToken = jwt.sign({id}, process.env.REFRESH_SECRET_KEY, {
		expiresIn: "1d",
	 });

	 await UserModel.findByIdAndUpdate(user._id, {
		accessToken,
		refreshToken,
	 })
	 
	 console.log(req.headers);
	 res.json({ accessToken, refreshToken});
})

export default refresh;