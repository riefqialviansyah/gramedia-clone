import ProductModel from "@/db/models/product";

export async function GET(request: Request) {
  try {
    const result = await ProductModel.getProduct();

    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
