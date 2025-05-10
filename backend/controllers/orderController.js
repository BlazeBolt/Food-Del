// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// // import Razorpay from 'razorpay';

// // const razorpay = new Razorpay({
// //     key_id: process.env.RAZORPAY_KEY_ID,
// //     key_secret: process.env.RAZORPAY_SECRET_KEY
// // });

// //placing user order from frontend
// const placeOrder = async (req, res) => {

//     const frontend_url = "https://food-del-frontend-u65c.onrender.com/";

//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

//         const amountInPaise = (req.body.amount + 20) * 100;

//         const razorpayOrder = await razorpay.orders.create({
//             amount: amountInPaise,
//             currency: "INR",
//             receipt: `order_rcptid_${newOrder._id}`
//         });

//         res.json({
//             success: true,
//             order: razorpayOrder,
//             orderId: newOrder._id,
//         });
        
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:"Error"})
        
//     }
// }

// //user orders
// const userOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({userId: req.body.userId});
//         res.json({success:true, data:orders});
//     } catch (error) {
//         console.log("Error");
//         res.json({success:false, message:"Error"});
//     }
// }

// export {placeOrder, userOrders}