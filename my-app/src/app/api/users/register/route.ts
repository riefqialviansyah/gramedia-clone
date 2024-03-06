import UserModel from "@/db/models/user";

export async function POST(request: Request) {
  try {
    const inputUser = await request.json();

    const result = await UserModel.register(inputUser);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
