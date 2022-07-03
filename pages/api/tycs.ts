// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TyCsAPIResponse } from "../../types";
import { terminosYCondiciones } from "./db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TyCsAPIResponse>
) {
  res.status(200).json(terminosYCondiciones);
}
