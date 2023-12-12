
# Building the Ultimate Airbnb Experience: A Node.js and Express.js API

Welcome to the official documentation of my Airbnb api. This API was created by me for interacting with a clone of my react nextjs full stack clone of Airbnb

## API Documentation

Explore the comprehensive API documentation to understand how to use each endpoint, request and response formats, and authentication methods. Please refer to the [API Documentation](https://app.swaggerhub.com/apis-docs/ESSIENEDIDIONG1000_1/airbnb-api/1.0.0#/) for more details.


## Features

- **Accommodation Listings:**
  Provide users with a comprehensive list of available accommodations. Users can narrow down results based on location, dates, price range, and amenities.
- **Accommodation Details:**
  Fetch detailed information about a specific accommodation, including its description, photos, amenities, and reviews.
- **User Authentication:**
  Implement a secure authentication system, allowing users to register, log in, and access protected endpoints. Generate authentication tokens for secure communication.
- **User Bookings:**
  User can add or create Reservations on the accommodation they are interested in
- **Search and Filters:** 
  I created functions which receives queries which allow user to filtering based on different parameters such as price, location, title, types and may more
- **Booking Reservations:**
  Reservations models and controllers were made accessible in this api. Controllers to see, delete Reservations were being created

- **Reviews and Ratings:**
  Routes were created user can leave a review
- Host Management
- Real-time Notifications
- Favorites and Wishlists
- Payment Integration (using stripe)
- Reporting and Analytics
- Admin Dashboard




## API Reference

### Register a new user.

```http
  POST api/v1/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Required**.User's first name |
| `lastname` | `string` | **Required**. User's last name |
| `email` | `string` | **Required**. User's email address |
| `password` | `string` | **Required**. User's password |

**Response:**
 - Status: 200 OK
 - Body:
    ```json
    {
      "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "phone": "1234567890",
        "email": "john@example.com",
        "isAdmin": false,
        "country": "United States",
        "state": "California",
        "postalCode": "12345"
      }
    }
    ```

### Example Request

```http
POST /api/auth/register
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "phone": "1234567890",
  "country": "United States"
}

```

Register a new user with the provided details and generate an authentication token.

### Login a user.

```http
  POST api/v1/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User's email address |
| `password` | `string` | **Required**. User's password |

**Response:**
 - Status: 200 OK
 - Body:
    ```json
    {
      "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "phone": "1234567890",
        "email": "john@example.com",
        "isAdmin": false,
        "country": "United States",
        "state": "California",
        "postalCode": "12345"
      }
    }
    ```

Login a new user with the provided details and generate an authentication token.

### Example Request

```http
POST /api/auth/login
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "phone": "1234567890",
  "country": "United States"
}

```


## Get All Listings Endpoint

Retrieve a list of listings ( listings) based on specified filters and sorting options.


```http
  GET api/v1/listings
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` |  Search by listing  title |
| `sort` | `string` | Sort by "latest", "oldest", "price", or "rating". |
| `colors` | `string` |  Filter based on the color listing  |
| `category` | `string` |  Filter based on the category listing  |
| `tag` | `string` | Filter by listing tag|
| `minprice` | `number` | Filter based on the minimum price|
| `tag` | `number` | Filter based on the maximum price|
| `limit` | `number` | Filter by  tag|
| `page` | `number` | Page number (default: 1)|


**Response:**
  - Status: 200 OK
  - Body:

    ```json
    {
      "listing": [
        {
          "_id": "product_id",
          "title": "Product Title",
          "price": 99.99,
          "colors": ["Red", "Blue"],
          "category": "Electronics",
          "tag": "Featured",
          "createdAt": "2023-08-11T10:00:00.000Z",
          "rating": 4.5
          // ... other listing properties
        },
        // ... more listings
      ],
      "noOfPages": 5,
      "totalProduct": 73
    }

 ```


### Example Request

```http
GET /api/v1/listing?search=Telsa&sort=latest&colors=Red&category=Electric Cars&limit=10&page=1
```


## Create Single Car Product Endpoint

```http
  POST api/v1/listings
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` |  listing  title |
| `price` | `string` |  listing  price |


- **Headers:**
  - `Authorization` (string): Bearer token for authentication.
- **Response:**

  - Status: 200 OK
  - Body:
    ```json
    {
      "listing": {
        "_id": "product_id",
        "title": "New Product Title",
        "price": 129.99,
        // ... other listing properties ...
        "user": "user_id",
        "createdAt": "2023-08-11T12:00:00.000Z"
      }
    }
    ```
### Example Request

```http
POST /api/v1/listing
Authorization: Bearer your_jwt_token
Content-Type: application/json

{
  "title": "New Product Title",
  "price": 129.99,
  // ... other listing properties ...
}

```



#### Nodemon and Basic Express Server

In order to achieve the server, we have to craete one. This can be done by:

```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
```

#### Not Found Middleware
- Idea is to detect for any error when a route which is not specified was being reached out to
- The code can be seen below
```js

const NotFound = (req, res, next)=> {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
    
}
```


#### Error Middleware

- The basic Idea about this function is to detect for any error that take place during the request and response cycle

```js
const errorHandler =(err, req, res, next)=> {
    const statuscode = res.statusCode === 200? 500:res.statusCode
    const errMessage = err.message
    res.status(statuscode)
    res.json({
        message:errMessage,

    })
}

```

#### INSTALLING PACKAGES
- Packages or dependencies that needed to be available in application includes


```js
   "dependencies": {
    "bcryptjs": "^2.4.3",
    "cloudinary": "^1.37.3",
    "concurrently": "^7.6.0",
    "config": "^3.3.8",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "express-session": "^1.17.3",
    "googleapis": "^120.0.0",
    "jsonwebtoken": "^9.0.0",
    "moment": "^2.29.4",
    "mongoose": "^6.8.1",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.3",
    "passport": "^0.6.0",
    "passport-google-oauth20": "^2.0.0",
    "stripe": "^11.18.0",
    "uuid": "^9.0.0"
  },
```

#### CREATING models

- USER MODELS
``` JS
import mongoose from "mongoose";

// a structure of the user
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    googleId: {
      type: String,
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: [true, "PLease add an emailvalue"],
    },
    password: {
      type: String,
      required: [true, "PLease add a password value"],
    },
    verified: {
      type: Boolean,
      default: false,
    },

    about: {
      from: { type: String },
      language: { type: Array, default: [] },
      description: { type: String },
      skills: { type: Array, default: [] },
      information: { type: String },
    },
    country: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    level: {
      type: String,
      default: "level 1 seller",
      enum: ["level 1 seller", "level 2 seller", "level 3 seller"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

```

## Listing models
- The basic idea about this structure is that it is responsible for defining the schema of our lisitng or rentals that various users interested in buying and selling will have to conform to

```js

import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    listing_host_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listing_image: {
      type: Array,
      // required: [true, 'PLease add the image value for the Listing']
    },
    listing_title: {
      type: String,
      required: true,
    },
    listing_country: {
      type: String,
    },
    listing_city: {
      type: String,
    },
    listing_location: {
      type: String,
    },
    listing_region: {
      type: String,
    },
    listing_distance: {
      type: Number,
    },
    listing_description: {
      type: String,
      required: true,
    },
    listing_type: {
      type: String,
    },
    listing_price: {
      type: Number,
      required: true,
    },
    listing_bedrooms: {
      type: Number,
    },
    listing_guests: {
      type: Number,
    },
    listing_bathrooms: {
      type: Number,
    },
    listing_beds: {
      type: Number,
    },
    listing_startDate: {
      type: String,
    },
    listing_endDate: {
      type: String,
    },
    listing_duration: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Listings", ListingSchema);


```
## Reservation model
- Basically responsible for the structure of the various reservations the user who is interested in.
- The schema can be seen below
```js

  import mongoose from "mongoose";

// resrevations schema of the buyer the gig created by the author
const ReservationSchema = new mongoose.Schema(
    // this is the id of the seller or creator 
  {
    listing_host_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // the listing id the user is reserving
    listing_Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Listings",
    },
    gigQuantity: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    adults: {
      type: Number,
    },
    children: {
      type: Number,
    },
    infants: {
      type: Number,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);

```
### Order model
- The order structure has to be defined since it defines the basis of the transaction that will take place
```js
 import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    reservation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservations",
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    image: {
      type: Array,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    paidAt: {
      type: Date,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Not Delivered"],
      default: "Pending",
    },
    adults: {
      type: Number,
    },
    children: {
      type: Number,
    },
    infants: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);

```

## Creating our various routes

### These are the various routes
* User route
* Listing route
* Reservations route
* Order route

## User route
```js
 import express from "express";
//  steps taken to create the router
const router = express.Router();
<!--  important middlewares -->
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication.js";
<!-- controllers or functions needed -->
import {
  GetUserById,
  GetAllUser,
  UpdateUser,
  DeleteUser,
  AdminUpdateUser,
  GetUsersProfile,
} from "../controllers/userControllers.js";

<!-- route to get all users -->
router.get("/", authMiddleware, adminMiddleware, GetAllUser);
<!-- route to delete, update and get a single user  -->
<!--  it is reserved for the admin only -->
router
  .route("/admin/profile/:id")
  .delete(authMiddleware, adminMiddleware, DeleteUser)
  .get(authMiddleware, GetUserById)
  .put(authMiddleware, adminMiddleware, AdminUpdateUser);

<!-- route to update and get user profile: id of the user is needed -->
router
  .route("/profile/:id")
  .put(authMiddleware, UpdateUser)
  .get(authMiddleware, GetUsersProfile);
export default router;

```



## Listing route
```js
 import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
  sellerAdminMiddleware,
} from "../middleware/authentication.js";

import {
  GetSingleListing,
  GetAllListing,
  UpdateListing,
  DeleteListing,
  CreateSingleListing,
  GetHostListing,
} from "../controllers/listingControllers.js";

<!-- route for creating listing and getting all the listing -->
router
  .route("/")
  .get(GetAllListing)
  .post(authMiddleware, sellerAdminMiddleware, CreateSingleListing);

<!-- get all of the host listing -->
router.route("/host/:id").get(GetHostListing);

<!-- route for getting a single lisitng, updating the lisitng and deleting -->
router
  .route("/:id")
  .get(GetSingleListing)
  .put(authMiddleware, sellerAdminMiddleware, UpdateListing)
  .delete(authMiddleware, DeleteListing);

export default router;

```


