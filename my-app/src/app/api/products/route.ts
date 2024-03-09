import ProductModel from "@/db/models/product";

export async function GET(request: Request) {
  try {
    // console.log("masuk sini controller product <<<<<<<<<<<<<<<<");
    const result = await ProductModel.getProduct();
    // console.log(result, "<<<<<<");
    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
