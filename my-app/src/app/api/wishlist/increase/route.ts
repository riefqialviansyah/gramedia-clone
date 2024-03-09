import WishlistModel from "@/db/models/wishlist";

export async function POST(request: Request) {
  const productId = await request.json();
  const userId = request.headers.get("x-id-user") as string;

  const result = await WishlistModel.addWishlist(productId, userId);

  return Response.json(result);
}
