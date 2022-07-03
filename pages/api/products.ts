// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsAPIResponse } from "../../types";
import { products } from "./db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProductsAPIResponse>
) {
  res.status(200).json(products);
}
