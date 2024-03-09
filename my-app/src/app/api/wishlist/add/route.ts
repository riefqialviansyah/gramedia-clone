import WishlistModel from "@/db/models/wishlist";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  try {
    const productId = await request.json();
    const userId = request.headers.get("x-id-user") as string;

    const result = await WishlistModel.addWishlist(productId, userId);
    return Response.json(result);
  } catch (error) {
    console.log(error, "Invalid token");
    if (error == "Invalid token") {
      redirect("/login");
    }
  }
}
