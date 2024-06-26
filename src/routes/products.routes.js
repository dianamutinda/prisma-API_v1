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
    if (!product){
      res.status(404).json({success: false, message:"product not found"})
    }else {
      res.status(200).json(product)
    }
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

router.patch("/:id", async(req, res) => {
  const { productThumbnail, productTitle,  productDescription, productCost, onOffer } = req.body;
  const id = req.params.id;
  try {
    let updateProduct;
    if (productThumbnail){
      updateProduct = await prisma.product.update({
        where: {productId: id},
        data: {productThumbnail:productThumbnail}
      })
    }

    if (productTitle){
      updateProduct = await prisma.product.update({
        where: {productId: id},
        data: {productTitle:productTitle}
      })
    }

    if (productDescription){
      updateProduct = await prisma.product.update({
        where: {productId: id},
        data: {productDescription:productDescription}
      })
    }

    if (productCost){
      updateProduct = await prisma.product.update({
        where: {productId: id},
        data: {productCost:productCost}
      })
    }

    if (onOffer){
      updateProduct = await prisma.product.update({
        where: {productId: id},
        data: {onOffer:onOffer}
      })
    }
    res.status(200).json(updateProduct)
  } catch (error) {
    res.status(500).json({success: false, message:error.message})
  }
});

router.delete("/:id", async(req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.product.delete({
      where: {productId: id}
    });
    if (!product){
      res.status(404).json({success: false, message:"product not found"})
    }else {
      res.status(200).json(product)
    }
  } catch (error) {
    res.status(500).json({success: false, message:error.message})
  }
});

export default router;
