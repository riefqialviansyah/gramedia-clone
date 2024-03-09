import ProductModel from "@/db/models/product";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // console.log("masuk sini controller product <<<<<<<<<<<<<<<<");
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page");
    console.log(page, "<<<<<<<< nilai page");
    const result = await ProductModel.getProduct(Number(page));
    // console.log(result, "<<<<<<");
    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
