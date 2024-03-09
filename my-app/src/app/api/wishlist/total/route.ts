import WishlistModel from "@/db/models/wishlist";

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-id-user") as string;
    // console.log(userId, "<<<<<<< id user di controller total wishlist<");
    if (!userId) {
      return Response.json(0);
    }
    const totalWishlist = await WishlistModel.getTotalWishlist(userId);

    return Response.json(totalWishlist);
  } catch (error) {
    console.log(error);
  }
}
