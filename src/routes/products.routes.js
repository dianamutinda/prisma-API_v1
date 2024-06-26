import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  try {
    const Products = prisma.product.findMany();
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({success: false, message: error.message})
  }
});

router.get("/:id", (req, res) => {
  res.send("getting a single product");
});

router.post("/", async (req, res) => {
  try {
    const { productThumbnail, productTitle,  productDescription, productCost, onOffer } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        productThumbnail,
        productTitle,
        productDescription,
        productCost,
        onOffer
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
