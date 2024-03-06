import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { hashPassword } from "../helpers/hash";
import { use } from "react";

type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUser = Omit<User, "_id">;

class UserModel {
  static collection() {
    return getCollection("Users");
  }

  static async findUser(email: string) {
    return await this.collection().findOne({ email });
  }

  static async findUsers() {
    return (await this.collection().find().toArray()) as User[];
  }

  static async register(newUser: NewUser) {
    let user = await this.collection().findOne({ username: newUser.username });
    if (user) throw { message: "Username already used" };

    user = await this.collection().findOne({ email: newUser.email });
    if (user) throw { message: "Email already used" };

    newUser = { ...newUser, password: hashPassword(newUser.password) };
    await this.collection().insertOne(newUser);

    return "Success create user";
  }
}

export default UserModel;
