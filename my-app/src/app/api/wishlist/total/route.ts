import WishlistModel from "@/db/models/wishlist";

export async function GET(request: Request) {
  const userId = request.headers.get("x-id-user") as string;
  // console.log(userId, "<<<<<<<<<< total");
  const totalWishlist = await WishlistModel.getTotalWishlist(userId);

  return Response.json(totalWishlist);
}
