import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;
    console.log(1 ?? "Ok");
    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath,
    });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
