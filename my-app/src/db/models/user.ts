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

  static async findUser(email: string) {
    return await this.collection().findOne({ email });
  }

  static async findUsers() {
    return (await this.collection().find().toArray()) as User[];
  }

  static async register(newUser: NewUser) {
    // manual validasi
    if (!newUser.name) throw { error: "Full Name is required" };
    if (!newUser.username) throw { error: "Username is required" };
    if (!newUser.email) throw { error: "Email is required" };
    if (!newUser.password) throw { error: "Password is required" };

    let user = await this.collection().findOne({ username: newUser.username });
    if (user) throw { error: "Username already used" };

    user = await this.collection().findOne({ email: newUser.email });
    if (user) throw { error: "Email already used" };

    if (newUser.password.length < 5)
      throw { error: "Minimum lengt of password is 5 character" };

    newUser = { ...newUser, password: hashPassword(newUser.password) };
    await this.collection().insertOne(newUser);

    return { message: "Success create user" };
  }
}

export default UserModel;
