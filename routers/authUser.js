import express from "express";
import { validation } from "../middlware/schemaValidator.js";
import { userSignInJoiSchema, userSignUpJoiSchema } from "../models/userModel.js";
import ctrlSignUp from "../ctrl/auth/signUp.js";
import ctrlSignIn from "../ctrl/auth/signIn.js";
import ctrlRefresh from "../ctrl/auth/refresh.js";
import ctrlLogout from "../ctrl/auth/logout.js";
import ctrlCurrent from "../ctrl/auth/current.js";
import authinticate from "../middlware/authinticate.js";

const route = express.Router();


route.post('/signUp', validation(userSignUpJoiSchema) ,ctrlSignUp);
route.post('/signIn', validation(userSignInJoiSchema) ,ctrlSignIn);
route.post('/refresh', ctrlRefresh);
route.post('/logout', authinticate, ctrlLogout);
route.get('/current', authinticate, ctrlCurrent);

export default route;