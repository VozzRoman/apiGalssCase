import { Schema, model } from "mongoose";
// import Joi from "joi";

const productSchema = new Schema({
	title: {type: String, required: true},
	code: {type: String, required: true},
	description: {type: String, required: true},
	colors: {type: [String], required: true},
	material: {type: Array, required: true},
	sex: {type: [String], required: true},
	size: {type: Array, required: true},
	price: {type: String, required: true},
	salePrice: {type: String, required: true},
	sizeChart: {type: String, required: true},
	images: {type: Array, required: true},
	navImages: {type: Array, required: true},
},
{versionKey: false, timestamps: true}
);

export const ProductModel = model("product", productSchema);

// export const productJoiSchema = Joi.object({
// 	title: Joi.string().required(),
// 	code: Joi.string().required(),
// 	description: Joi.string().required(),
// 	colors: Joi.string().required(),
// 	material: Joi.string().required(),
// 	sex: Joi.string().required(),
// 	size: Joi.string().required(),
// 	price: Joi.string().required(),
// 	salePrice: Joi.string().required(),
// 	sizeChart: Joi.string().required(),
// 	images: Joi.string().required(),
// 	navImages: Joi.string().required(),
//  });
