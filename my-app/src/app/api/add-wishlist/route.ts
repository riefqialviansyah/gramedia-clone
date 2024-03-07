export async function POST(request: Request) {
  const newWishlist = await request.json();

  return Response.json({ message: "Success add to wishlist" });
}
