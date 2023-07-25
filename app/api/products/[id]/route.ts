import Error from "next/error";
import { NextResponse } from "next/server";
import products from "../../../../data/products.json";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const product = products.find(({ id }) => id === params.id);

  return NextResponse.json(product);
}
