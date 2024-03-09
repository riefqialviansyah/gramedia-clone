import ProductModel from "@/db/models/product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const product = await ProductModel.findBySlug(params.slug);

  return Response.json(product);
}
