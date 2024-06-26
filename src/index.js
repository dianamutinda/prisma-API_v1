import express from "express";
import { config} from 'dotenv'
import productRoutes from "./routes/products.routes.js";

const app = express();
config();
app.use(express.json());
app.use("/products", productRoutes);

app.listen(4000, () => {
  console.log("server running in port 4000...");
});
