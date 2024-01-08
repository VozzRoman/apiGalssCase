import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { UserModel } from "../../models/userModel.js";
import bcrypt from "bcryptjs";

const signUp = asyncHeandler(async(req, res) => {
	const {email, password} = req.body;
	const user = await UserModel.findOne({email})
	if(user){
		throw createErrors(409, `користувач ${user.email} вже існує` )
	}
	const hashPassword = await bcrypt.hash(password, 10);
const credentials = await UserModel.create({...req.body, password: hashPassword});
res.json({
	code: 200,
	satus: "ok",
	data: {
		name: credentials.name,
		email: credentials.email,
	},
})
})

export default signUp;