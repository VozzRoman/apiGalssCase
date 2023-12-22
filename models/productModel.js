
import {Schema, model} from "mongoose";

const productSchema = new Schema({
	title: {type: String, required: true},
	code: {type: String, required: true},
	description: {type: String, required: true},
	// colors: {type: Array, required: true},
	// material: {type: Array, required: true},
	// sex: {type: String, required: true},
	// size: {type: Array, required: true},
	// price: {type: String, required: true},
	// salePrice: {type: String, required: true},
	// sizeChart: {type: String, required: true},
	// images: {type: Array, required: true},
	// navImages: {type: Array, required: true},
},
{versionKey: false, timestamps: true}
);

export const ProductSchema = model(productSchema);