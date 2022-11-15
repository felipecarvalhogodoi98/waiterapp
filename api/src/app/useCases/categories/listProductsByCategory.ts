import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const product = await Product.find().where("category").equals(categoryId);

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
