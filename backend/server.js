import express from 'express'
import cors from 'cors'
import { connctDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

//app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json());//whenever you get request from frontend to backend, the ddata will be parsed by this json
app.use(cors()); //using this, we can access any backend from frontend

//db connection 
connctDB();

//API endpoints
app.use("/api/food", foodRouter);
//to display uploaded images in frontend, we mount the file ont /images endpoint
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

//HTTP method using which we can request the data from server
app.get("/",(req, res)=>{
    res.send("API working")
})

//to run express server use=
app.listen(port, ()=>{
    console.log(`Server Started On http://localhost:${port}`)
})