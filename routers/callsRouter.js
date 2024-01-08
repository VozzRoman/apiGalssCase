import express  from "express";
import ctrlGetAllCalls from '../ctrl/calls/getAll.js';
import ctrlDeleteCalls from "../ctrl/calls/delete.js";
import ctrlUPdateCalls from "../ctrl/calls/update.js";
import ctrlCreateCalls from "../ctrl/calls/create.js";
import ctrlFindCalls from "../ctrl/calls/find.js";
import { validation } from "../middlware/schemaValidator.js";
import { callsJoiSchema } from "../models/callsModel.js";
import authinticate from "../middlware/authinticate.js";

const router = express.Router();


router.get("/", authinticate, ctrlGetAllCalls);
router.post("/", authinticate, validation(callsJoiSchema), ctrlCreateCalls);
router.get("/:id", authinticate, ctrlFindCalls);
router.delete("/:id", authinticate, ctrlDeleteCalls);
router.put("/:id", authinticate, ctrlUPdateCalls);

export default router;
