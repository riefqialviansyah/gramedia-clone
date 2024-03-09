import { verifyPassword } from "@/db/helpers/hash";
import { createToken } from "@/db/helpers/jwt";
import UserModel from "@/db/models/user";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email) throw { error: "Email is required" };
    if (!body.password) throw { error: "Password is required" };

    const user = await UserModel.findUser(body.email);

    if (!user) {
      return Response.json(
        {
          error: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const isValid = verifyPassword(body.password, user.password);

    if (!isValid) {
      return Response.json(
        {
          error: "Invalid email/password",
        },
        {
          status: 401,
        }
      );
    }

    const access_token = createToken({
      _id: user._id,
      email: user.email,
      role: user.role,
    });

    // set cookies froms server
    cookies().set("Authorization", `Bearer ${access_token}`);

    return Response.json({
      data: { access_token },
    });
  } catch (error) {
    return Response.json(error);
  }
}
