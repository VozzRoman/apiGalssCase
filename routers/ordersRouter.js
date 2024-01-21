import express from "express";
import ctrlGetAllOrders from "../ctrl/orders/getAll.js";
import ctrlCreateOrders from "../ctrl/orders/create.js";
import ctrlFindOrder from "../ctrl/orders/find.js";
import ctrlDeleteOrder from "../ctrl/orders/delete.js";
import ctrlUpdateOrder from "../ctrl/orders/update.js";
import authinticate from "../middlware/authinticate.js";



const router = express.Router();

router.get("/", authinticate, ctrlGetAllOrders);
router.post("/", ctrlCreateOrders);
router.get("/:id", authinticate, ctrlFindOrder);
router.delete("/:id", authinticate, ctrlDeleteOrder);
router.put("/:id", authinticate, ctrlUpdateOrder);

export default router;