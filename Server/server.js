require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth_router.js");
const adminRoute = require("./router/admin_router.js");
const connectDb = require("./utils/db.js");
const error_middleware = require("./middlewares/error_middleware.js");
const contactRoute = require("./router/contact_router.js");
const serviceRoute = require("./router/service_router.js");
const userRoute = require("./router/user_router.js");

// --- This is the updated CORS handling section ---

// 1. Read the comma-separated list of allowed domains from your .env file
const allowedOrigins = process.env.URI ? process.env.URI.split(',') : [];

const corsOptions = {
  // 2. Use a function to check if the incoming request origin is in the allowed list
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
// --- End of updated CORS section ---


app.use(express.json());

// let's define admin route
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/user", userRoute);

app.use(error_middleware);

const PORT = process.env.PORT || 8000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is runing at port ${PORT} `);
  });
});
