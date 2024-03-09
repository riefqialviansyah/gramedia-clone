import ProductModel from "@/db/models/product";

export async function POST(request: Request) {
  let inputUser = await request.json();
  let filterImages = inputUser.images.split(" ");
  filterImages = filterImages.filter((el: string) => el != "");

  let filterTags = inputUser.tags.split(" ");
  filterTags = filterTags.filter((el: string) => el != "");

  inputUser = {
    ...inputUser,
    tags: filterTags,
    images: filterImages,
  };
  const result = await ProductModel.addBook(inputUser);

  return Response.json(result);
}
