import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();

const logger = process.env === "development" ? "dev" : "short";
app.use(morgan(logger));
app.use(express.json());
app.use(cors());


//Маршпути
app.use("/api/products", productRouter);


app.use((req, res) => {
	res.status(404).json({message: "не вірний маршрут"});
})




app.listen(3030, () => console.log("server is runing"));