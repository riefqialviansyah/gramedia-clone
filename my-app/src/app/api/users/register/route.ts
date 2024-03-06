import UserModel from "@/db/models/user";

export async function POST(request: Request) {
  const inputUser = await request.json();

  const result = await UserModel.register(inputUser);
  return Response.json(result);
}
