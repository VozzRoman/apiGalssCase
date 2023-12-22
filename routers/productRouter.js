import express from 'express';
import ctrlGetAllProducts from '../ctrl/products/getAll.js';
import ctrlCreateProduct from '../ctrl/products/create.js';
import ctrlFindProduct from '../ctrl/products/find.js';
import ctrlUpdateProduct from '../ctrl/products/update.js';
import ctrlDeletrProduct from '../ctrl/products/delete.js';
const router = express.Router();

//Roots
router.get("/", ctrlGetAllProducts);
router.post("/", ctrlCreateProduct);
router.get("/:id", ctrlFindProduct);
router.put("/:id", ctrlUpdateProduct);
router.delete("/:id", ctrlDeletrProduct);

export default router;