import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter.js";
import connection from './dastabase.js';
import fileuploader from 'express-fileupload';

dotenv.config();

const app = express();

const logger = process.env === "development" ? "dev" : "short";
app.use(morgan(logger));
app.use(fileuploader());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//Маршпути
app.use("/api/products", productRouter);


app.use((req, res) => {
	res.status(404).json({message: "не вірний маршрут"});
})


app.use((err, req, res, next) => {
	console.error(err); // Выводите ошибку в консоль для дополнительной диагностики
	res.status(err.status || 500).json({ error: err.message });
 });
connection();

app.listen(3030, () => console.log("server is runing"));