import ProductModel from "@/db/models/product";

export async function GET(reques: Request) {
  try {
    const result = await ProductModel.getProductPreview();

    return Response.json({ data: result });
  } catch (error) {
    console.log(error);
  }
}
