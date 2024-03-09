import ProductModel from "@/db/models/product";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // const searchKey = await request.json();
    const searchParams = request.nextUrl.searchParams;
    const searchKey = searchParams.get("search") as string;
    const result = await ProductModel.getProductByName(searchKey);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
