import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, igredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      igredients: igredients ?? JSON.parse(igredients),
      imagePath,
    });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
