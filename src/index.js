import express from "express";
import productRoutes from "./routes/products.routes.js";

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

app.listen(3500, () => {
  console.log("server running in port 3500...");
});
