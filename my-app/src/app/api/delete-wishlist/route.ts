import WishlistModel from "@/db/models/wishlist";

export async function POST(request: Request) {
  const wishlistId = await request.json();

  const result = await WishlistModel.delete(wishlistId);
  return Response.json(result);
}
