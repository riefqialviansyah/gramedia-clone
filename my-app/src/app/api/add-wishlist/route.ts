import WishlistModel from "@/db/models/wishlist";

export async function POST(request: Request) {
  try {
    const productId = await request.json();
    const userId = request.headers.get("x-id-user") as string;
    // console.log({ productId, userId }, "<<<<<<<<<<<< data");
    const result = await WishlistModel.addWishlist(productId, userId);

    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
