
import asyncHeandler from "express-async-handler";
import { UserModel } from "../../models/userModel.js";

const current = asyncHeandler (async(req, res) => {
	const {name, email} = req.user;

	res.json({
		code:"200",
		status: "ok",
		message: "Successful logout",
		data:{
			name,
			email
		}
	});
})

export default current;