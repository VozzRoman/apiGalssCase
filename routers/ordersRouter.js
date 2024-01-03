import express from "express";
import ctrlGetAllOrders from "../ctrl/orders/getAll.js";
import ctrlCreateOrders from "../ctrl/orders/create.js";
import ctrlFindOrder from "../ctrl/orders/find.js";
import ctrlDeleteOrder from "../ctrl/orders/delete.js";
import ctrlUpdateOrder from "../ctrl/orders/update.js";



const router = express.Router();

router.get("/", ctrlGetAllOrders);
router.post("/", ctrlCreateOrders);
router.get("/:id", ctrlFindOrder);
router.delete("/:id", ctrlDeleteOrder);
router.put("/:id", ctrlUpdateOrder);

export default router;