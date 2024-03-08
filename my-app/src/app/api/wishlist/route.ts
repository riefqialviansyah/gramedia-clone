import WishlistModel from "@/db/models/wishlist";

export async function GET(request: Request) {
  const userId = request.headers.get("x-id-user") as string;
  const result = await WishlistModel.getWishlist(userId);

  return Response.json({ data: result });
}
