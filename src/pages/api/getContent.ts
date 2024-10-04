import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "microcms-js-sdk";
import { Item } from "@/libs/microcms";
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_API_KEY is required");
}
const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log(process.env.NEXT_PUBLIC_MICROCMS_API_KEY);
  console.log(process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);
  try {
    const data = await client.getList<Item>({
      endpoint: "items",
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
