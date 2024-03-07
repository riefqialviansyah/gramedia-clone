import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { Product } from "@/interfaces/interface";

type NewProduct = Omit<Product, "_id">;

class ProductModel {
  static collection() {
    return getCollection("Books");
  }

  static async addBook(newBook: NewProduct) {
    newBook.createdAt = new Date();
    newBook.updatedAt = new Date();

    await this.collection().insertOne(newBook);

    return { message: "Success add new book" };
  }

  static async getProduct() {
    const products = (await this.collection().find().toArray()) as Product[];
    return products;
  }
}

export default ProductModel;
