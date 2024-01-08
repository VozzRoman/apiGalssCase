
import asyncHeandler from "express-async-handler";

const current = asyncHeandler (async(req, res) => {
	const {name, email} = req.user;

	res.json({
		code:"200",
		status: "ok",
		data:{
			name,
			email
		}
	});
})

export default current;