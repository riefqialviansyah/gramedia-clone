import { ObjectId } from "mongodb";
import { getCollection } from "../config";

type Book = {
  _id: ObjectId;
  author: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: [string];
  createdAt: string;
  updatedAt: string;
};

type NewBook = Omit<Book, "_id" | "createdAt" | "updatedAt">;

class ProductModel {
  static collection() {
    return getCollection("Books");
  }

  static async addBook(newBook: NewBook) {
    await this.collection().insertOne(newBook);

    return { message: "Success add new book" };
  }
}

export default ProductModel;
