import express from 'express';
import ctrlGetAllProducts from '../ctrl/products/getAll.js';
import ctrlCreateProduct from '../ctrl/products/create.js';
import ctrlFindProduct from '../ctrl/products/find.js';
import ctrlUpdateProduct from '../ctrl/products/update.js';
import ctrlDeletrProduct from '../ctrl/products/delete.js';
import  authinticate  from '../middlware/authinticate.js';
// import { validation } from '../middlware/schemaValidator.js';
// import { productJoiSchema } from '../models/productModel.js';

const router = express.Router();

//Roots
router.get("/", ctrlGetAllProducts);
router.post("/", authinticate, ctrlCreateProduct);
router.get("/:id", authinticate, ctrlFindProduct);
router.put("/:id", authinticate, ctrlUpdateProduct);
router.delete("/:id", authinticate, ctrlDeletrProduct);

export default router;