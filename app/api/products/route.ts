import { NextResponse } from "next/server";
import products from "../../../data/products.json";

export async function GET(request: Request) {
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  return NextResponse.json({ products });
}

export async function PUT(request: Request) {
  return NextResponse.json({ products });
}

export async function DELETE(request: Request) {
  return NextResponse.json({ products });
}
