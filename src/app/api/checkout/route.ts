import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, address, phone, company, additionalInfo, totalAmount, products } = body;

    if (!name || !email || !address || !phone || !totalAmount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const order = {
      _type: "orders",
      name,
      email,
      address,
      phone,
      company: company || "",
      additionalInfo: additionalInfo || "",
      totalAmount,
      products: products.map((product: any) => ({
        _type: "orderItem",
        name: product.name,
        quantity: product.quantity,
        price: product.price
      })),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const result = await client.create(order);
    return NextResponse.json({ success: true, data: result }, { status: 201 });

  } catch (error) {
    console.error("Sanity error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
