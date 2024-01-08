import createError from "http-errors";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";
import dotenv from 'dotenv';
dotenv.config();


console.log("SEC--->" ,process.env.ACCESS_SECRET_KEY);
console.log("SEC2--->" ,process.env.REFRESH_SECRET_KEY);

const authinticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(createError(401, "invalid token"));
  }
  try {

    const { id } = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
	
	 console.log("ID" ,id);
    const user = await UserModel.findById(id);
	 console.log(user);
    req.user = user;
    if (!user || !user.accessToken || user.accessToken !== token) {
		console.log(user.accessToken, token);
      next(createError(401, "token false"));
    }
    next();
  } catch (error) {
    //----
    next(createError(401, "не зареестрований"));
  }
};



export default authinticate;