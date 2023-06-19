// import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import moment from "moment";
import asyncHandler from "express-async-handler";

// GET All Order
//  Private
//  Only Admin
const GetAllOrder = async (req, res) => {
  // instantiate the Order variable

  const limit = req.query.limit || 6;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  const totalOrder = await Order.countDocuments({});

  const order = await Order.find({})
    .populate("createdBy", "firstname lastname email address")
    .skip(skip)
    .limit(limit);

  const noOfPages = Math.ceil(totalOrder / limit);

  res.status(200).json({ order, noOfPages, totalOrder });
};

// GET All Order
//  Private
//  Admin and User

const GetCustomerOrder = async (req, res) => {
  // instantiate the user id from the req.user
  const { userId } = req.user;
  // instantiate the Order variable
  const order = await Order.find({ createdBy: userId })
    .populate("createdBy", "firstname lastname email address")
    .populate("cartId", "image title price countInStock deliveryDays");
  res.status(200).json({ order });
};

// get the order id
const GetOrderById = async (req, res) => {
  // instantiate the user id from the req.user
  const { id } = req.params;
  // instantiate the Order variable
  const order = await Order.findById({ _id: id }).populate(
    "createdBy",
    "firstname lastname email address"
  );
  res.status(200).json({ order });
};

// Create Order for the user
//  Private
// User
const CreateOrder = async (req, res) => {
  // instantiate the form data from the request body
  const { userId } = req.user;
  const {
    paymentMethod,
    estimatedTax,
    shippingPrice,
    TotalShoppingPrice,
    cartId,
  } = req.body;

  const order = await Order.create({
    createdBy: userId,
    cartId,
    paymentMethod,
    estimatedTax,
    shippingPrice,
    TotalShoppingPrice: parseInt(TotalShoppingPrice),
  });

  res.status(200).json({ order });
  // console.log({
  //   paymentMethod,
  //   estimatedTax,
  //   shippingPrice,
  //   TotalShoppingPrice:parseInt(TotalShoppingPrice),
  //   cartId,
  // });
};

// Update Order to paid for the user
//  Private
// Admin
const UpdateOrderToPaid = async (req, res) => {
  // find the user order in the data base
  const order = await Order.findOne({ cartId: req.params.id });
  // check if the order exist
  if (!order) {
    res.status(403);
    throw new Error("This order request does not exist");
  }
  // udate the cart
  const updatedOrder = await Order.findOneAndUpdate(
    { cartId: req.params.id },
    {
      isPaid: true,
      paidAt: Date.now(),
      paymentResult: {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      },
    },
    { new: true }
  );
  // clear the buyer cart
  await Cart.findByIdAndDelete({ _id: req.params.id });

  res.status(200).json({ updatedOrder });
};

// Update Order to Delivered for the user
//  Private
// Admin
const UpdateOrderToIsDelivered = async (req, res) => {
  // find the user order in the data base
  const order = await Order.findById({ _id: req.params.id });
  // check if the order exist
  if (!order) {
    res.status(403);
    throw new Error("This order request does not exist");
  }

  // update the order based on the req params
  const updatedOrder = await Order.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDelivered: true,
      deliveredAt: Date.now(),
    },
    { new: true }
  );
  res.status(200).json({ updatedOrder });
};

// PRIVATE/ADMIN
const AggregateUserOrderStats = asyncHandler(async (req, res) => {
  // get the total order based on the title
  let totalOrder = await Order.aggregate([
    // match the users to nothing
    { $match: {} },
    // group based on year and month
    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        totalQuantity: { $sum: "$TotalShoppingPrice" },
        averageOrderQuantity: { $avg: "$totalQuantity" },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
  ]);

  // modify the stats
  totalOrder = totalOrder.map((stats) => {
    const {
      _id: { year, month },
      totalQuantity,
      averageOrderQuantity,
    } = stats;
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");

    return { date, totalQuantity, averageOrderQuantity };
  });

  res.status(200).json({ totalOrder });
});

export {
  CreateOrder,
  GetOrderById,
  GetAllOrder,
  UpdateOrderToPaid,
  GetCustomerOrder,
  UpdateOrderToIsDelivered,
  AggregateUserOrderStats,
};
