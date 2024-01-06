import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter.js";
import callsRouter from "./routers/callsRouter.js";
import ordersRouter from "./routers/ordersRouter.js";
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
// const allowedOrigins = ['http://localhost:3002/products', 'http://allowed-domain-2.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // дозволяє передавати кредити (наприклад, куки)
// };
app.use(cors());



//Маршпути
app.use("/api/products", productRouter);
app.use("/api/calls", callsRouter);
app.use("/api/orders", ordersRouter);


app.use((req, res) => {
	res.status(404).json({message: "не вірний маршрут"});
})


app.use((err, req, res, next) => {
	console.error(err); // Выводите ошибку в консоль для дополнительной диагностики
	res.status(err.status || 500).json({ error: err.message });
 });
connection();

app.listen(3030, () => console.log("server is runing"));