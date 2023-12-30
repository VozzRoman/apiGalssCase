import express  from "express";
import ctrlGetAllCalls from '../ctrl/calls/getAll.js';
import ctrlDeleteCalls from "../ctrl/calls/delete.js";
import ctrlUPdateCalls from "../ctrl/calls/update.js";
import ctrlCreateCalls from "../ctrl/calls/create.js";
import ctrlFindCalls from "../ctrl/calls/find.js";
import { validation } from "../middlware/schemaValidator.js";
import { callsJoiSchema } from "../models/callsModel.js";

const router = express.Router();


router.get("/", ctrlGetAllCalls);
router.post("/", validation(callsJoiSchema), ctrlCreateCalls);
router.get("/:id", ctrlFindCalls);
router.delete("/:id", ctrlDeleteCalls);
router.put("/:id", ctrlUPdateCalls);

export default router;
