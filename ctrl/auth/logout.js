import asyncHeandler from "express-async-handler";
import { UserModel } from "../../models/userModel.js";

const logout = asyncHeandler (async(req, res) => {
	const {_id} = req.user;

	await UserModel.findByIdAndUpdate(_id, {
		accessToken: '',
		refreshToken: '',
	})

	res.status(204).json({message: "Successful logout"});
})

export default logout;