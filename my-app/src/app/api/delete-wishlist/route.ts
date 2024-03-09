import WishlistModel from "@/db/models/wishlist";

export async function POST(request: Request) {
  const productId = await request.json();

  const result = await WishlistModel.delete(productId);
  return Response.json(result);
}
