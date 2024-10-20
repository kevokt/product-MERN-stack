import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

// API URL for GET ALL PRODUCTS
router.get("/", getProducts)

// API URL for CREATE PRODUCT
router.post("/", createProduct)

// API URL for UPDATE PRODUCT
router.put("/:id", updateProduct);

// API URL for DELETE PRODUCT
router.delete("/:id", deleteProduct)

export default router;