import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { hashPassword } from "../helpers/hash";

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

  static async findUsers() {
    return (await this.collection().find().toArray()) as User[];
  }

  static async register(newUser: NewUser) {
    newUser = { ...newUser, password: hashPassword(newUser.password) };
    await this.collection().insertOne(newUser);

    return "Success create user";
  }
}

export default UserModel;
