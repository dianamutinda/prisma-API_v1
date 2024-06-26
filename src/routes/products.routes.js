import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const Products = await prisma.product.findMany();
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({success: false, message: error.message})
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.product.findFirst({
      where: {productId: id}
    });
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({success: false, message:error.message})
  }
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

router.delete("/:id", async(req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.product.delete({
      where: {productId: id}
    });
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({success: false, message:error.message})
  }
});

export default router;
