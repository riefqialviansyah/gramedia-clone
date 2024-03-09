import WishlistModel from "@/db/models/wishlist";

export async function DELETE(request: Request) {
  try {
    const productId = await request.json();
    // console.log(productId, "<<<<<<<<< product id");

    const result = await WishlistModel.delete(productId);

    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" });
  }
}
