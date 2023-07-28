import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(({ uuid }) => uuid === params.id);
  return NextResponse.json({ product });
}
