import { Schema, model } from "mongoose";
import Joi from "joi";

const callsSchema = new Schema({
	name: {type: String, required: true},
	phone: {type: String, required: true},
	done: {type: Boolean},

},
{versionKey: false, timestamps: true}
);

export const CallsModel = model("call", callsSchema); 

export const callsJoiSchema = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string().required(),
	done: Joi.string(),
 });