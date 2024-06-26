import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("getting all products");
});

router.get("/:id", (req, res) => {
  res.send("getting a single product");
});

router.post("/", async (req, res) => {
  try {
    const { prodName, prodDescription, prodCost, onoffer } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        prodName: prodName,
        prodDescription: prodDescription,
        prodCost:prodCost,
        onoffer: onoffer,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch("/:id", (req, res) => {
  res.send("updating a product");
});

router.delete("/:id", (req, res) => {
  res.send("deleting a product");
});

export default router;
