import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ProductsInterface } from "@/interfaces";

const filePathGen = () => {
  return path.join(process.cwd(), "data", "products.json");
};

const getProducts = (filePath: string): ProductsInterface[] => {
  return JSON.parse(fs.readFileSync(filePath).toString());
};

export async function GET(request: Request) {
  const filePath = filePathGen();
  const products = getProducts(filePath);

  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  const body: ProductsInterface = await request.json();
  const filePath = filePathGen();
  const data = getProducts(filePath);

  if (!body.description || !body.name || !body.image || !body.price) {
    return NextResponse.json(
      { error: "Missing Product Data" },
      { status: 400 },
    );
  }

  data.push(body);
  fs.writeFileSync(filePath, JSON.stringify(data));

  return NextResponse.json(body, { status: 201 });
}
