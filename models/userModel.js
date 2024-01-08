import { Schema, model } from "mongoose";
import Joi from "joi";
import handleMongooseError from "../middlware/mogooseError.js";
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const userSchema = new Schema({
	name: {type: String, required: true},
	email: {
		type: String, 
		required: true,
		unique: true,
		match: emailRegexp,
	},
	password: {
		type: String, 
		required: true,
		minlength: 6,
	},
	accessToken:{
		type: String,
		default:""
	},
	refreshToken:{
		type: String,
		default:""
	},

		
},
{versionKey: false, timestamps: true}
);

userSchema.post("save", handleMongooseError);

export const UserModel = model("user", userSchema); 

export const userSignUpJoiSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
 });

 export const userSignInJoiSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
 });
