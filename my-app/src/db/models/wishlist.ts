import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { IWishlist } from "@/interfaces/interface";

type NewWishList = Omit<IWishlist, "_id" | "detailProduct">;

class WishlistModel {
  static collection() {
    return getCollection("Wishlists");
  }
  static async addWishlist(productId: string, userId: string) {
    const newWishList: NewWishList = {
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.collection().insertOne(newWishList);

    return { message: "Success add wishlist" };
  }

  static async getWishlist(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(String(userId)),
        },
      },
      {
        $lookup: {
          from: "Books",
          localField: "productId",
          foreignField: "_id",
          as: "detailProduct",
        },
      },
      {
        $unwind: {
          path: "$detailProduct",
          preserveNullAndEmptyArrays: true,
        },
      },
    ];
    const wishlist = await this.collection().aggregate(agg).toArray();

    return wishlist;
  }

  static async delete(wishlistId: string) {
    await this.collection().deleteOne({
      _id: new ObjectId(String(wishlistId)),
    });

    return { message: "Success to delete wishlist" };
  }
}

export default WishlistModel;
