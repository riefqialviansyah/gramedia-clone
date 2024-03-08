import ProductModel from "@/db/models/product";

export async function POST(request: Request) {
  const searchKey = await request.json();
  const result = await ProductModel.getProductByName(searchKey);
  return Response.json(result);
}
